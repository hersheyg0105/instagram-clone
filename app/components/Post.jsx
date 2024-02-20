import React, { useEffect } from "react";

import {
  BeakerIcon,
  SearchIcon,
  MagnifyingGlassIcon,
  MagnifyingGlassCircleIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  EllipsisHorizontalIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BookmarkIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";

import {
  HomeIcon,
  Bars3Icon,
  HeartIcon as HeartIconFilled,
} from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import {
  Timestamp,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useState } from "react";
import { db, storage } from "../../firebase";
import Moment from "react-moment";

const Post = ({ id, username, userImg, img, caption }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );

    return unsubscribe;
  }, [db]);

  console.log("comments: ", comments);
  return (
    <div className=" bg-white my-7 border rounded-lg">
      {/* <h1>I am a post</h1>
      <h1>whats up</h1> */}

      {/* Header */}
      <div className=" flex items-center p-5 ">
        <img
          src={userImg}
          alt=""
          className=" h-12 w-12 rounded-full object-contain border mr-3"
        />
        <p className=" flex-1 font-bold">{username}</p>
        <EllipsisHorizontalIcon className=" h-5 "></EllipsisHorizontalIcon>
      </div>

      {/* img */}
      <div>
        <img src={img} alt="" className="object-cover w-full" />
      </div>

      {/* Buttons */}
      {session && (
        <div className="flex items-center justify-between p-2">
          <div className=" flex gap-1">
            <HeartIcon className="btn"></HeartIcon>
            <ChatBubbleOvalLeftEllipsisIcon className="btn"></ChatBubbleOvalLeftEllipsisIcon>
            <PaperAirplaneIcon className="btn"></PaperAirplaneIcon>
          </div>
          <div>
            <BookmarkIcon className="btn"></BookmarkIcon>
          </div>
        </div>
      )}

      {/* caption */}
      <div>
        <p className="p-3 truncate">
          <span className=" font-bold mr-1">{username}</span>
          {caption}
        </p>
      </div>

      {/* comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-black hover:scroll">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                src={comment.data().userImage}
                alt="comment"
                className="h-7 rounded-full mr-2"
              ></img>
              <p className="text-sm flex-1">
                <span className="font-bold">{comment.data().username} </span>
                {comment.data().comment}
              </p>

              <Moment fromNow={true} className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* input box */}
      {session && (
        <form className="flex items-center justify-around p-3">
          <FaceSmileIcon className="w-7"></FaceSmileIcon>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className=" border-none flex-1 focus:ring-0 outline-none"
          />
          <button
            disabled={!comment.trim()}
            className=" font-semibold text-blue-400 hover:text-blue-800"
            type="submit"
            onClick={sendComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
