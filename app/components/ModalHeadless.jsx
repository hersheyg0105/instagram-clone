"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { CameraIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { db, storage } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { ref, getDownloadURL, uploadString } from "firebase/storage";

export default function ModalHeadless() {
  let [isOpen, setIsOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const captionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const uploadPost = async () => {
    if (loading) return;

    setLoading(true);

    // 1. Create a post and add to firestore 'posts' collection
    // 2. we get back the post id for newly created psot
    // 3. upload the image to firebase storage with post id
    // 4. get a download url from firebase storage and update the original post with image

    const docRef = await addDoc(collection(db, "posts"), {
      username: session.user.username,
      caption: captionRef.current.value,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    });

    console.log("New doc added with ID", docRef.id);
    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      }
    );
    setIsOpen(false);
    setLoading(false);
    setSelectedFile(false);
  };

  const addImageToPost = (e) => {
    console.log(e);

    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };

    console.log("showing chosen image");
    console.log(selectedFile);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {selectedFile ? (
                    <img
                      src={selectedFile}
                      alt="selected image"
                      className="w-full object-contain cursor-pointer"
                      onClick={() => setSelectedFile(null)}
                    ></img>
                  ) : (
                    <div
                      className="mt-1 mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 p-2"
                      onClick={() => filePickerRef.current.click()}
                    >
                      <CameraIcon className=" text-blue-600 text-center justify-center"></CameraIcon>
                    </div>
                  )}

                  <div className="mt-2 text-lg leading-6 text-gray-900 text-center font-bold">
                    <h1>Upload a photo</h1>
                  </div>

                  <div className="mt-3">
                    <input
                      ref={filePickerRef}
                      type="file"
                      hidden
                      onChange={addImageToPost}
                    />
                  </div>

                  <div className="mt-3">
                    <input
                      type="text"
                      placeholder="Please enter a caption..."
                      className="border-none focus:ring-0 w-full text-center"
                      ref={captionRef}
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      disabled={!selectedFile}
                      className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed hover:disabled:bg-red-400"
                      onClick={uploadPost}
                    >
                      {loading ? "Uploading... " : "Upload Post"}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
