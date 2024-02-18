"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const MiniProfile = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex items-center justify-between mt-14 ml-10 bg-red-400">
      {/* <h1>I am in mini feed</h1>
      <h1>whats up</h1> */}
      <img
        src={session?.user?.image}
        alt=""
        className="rounded-full border p-1 w-16 h-16"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button
        className="text-blue-400 text-sm font-semibold hover:text-blue-800"
        onClick={signOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default MiniProfile;
