import React from "react";

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

const Post = ({ id, username, userImg, img, caption }) => {
  const { data: session } = useSession();
  console.log("Session value in Post component: ", session);
  //   console.log("I am in post");
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

      {/* input box */}
      {session && (
        <form className="flex items-center justify-around p-3">
          <FaceSmileIcon className="w-7"></FaceSmileIcon>
          <input
            type="text"
            placeholder="Add a comment..."
            className=" border-none flex-1 focus:ring-0 outline-none"
          />
          <button className=" font-semibold text-blue-400 hover:text-blue-800">
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
