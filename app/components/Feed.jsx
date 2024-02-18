"use client";
import React from "react";
import Stories from "../components/Stories";
import Posts from "../components/Posts";
import MiniProfile from "../components/MiniProfile";
import Suggestions from "../components/Suggestions";
import { useSession } from "next-auth/react";

const Feed = () => {
  const { data: session } = useSession();
  return (
    <main
      className={` grid grid-cols-1 md:grid-cols-2 md:max-width-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
    >
      <section className="col-span-2">
        {/* Stories */}
        <Stories></Stories>
        <Posts></Posts>
      </section>

      {session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          {/* Mini Profile and Suggestions*/}
          <div className="fixed">
            <MiniProfile></MiniProfile>
            <Suggestions></Suggestions>
          </div>
        </section>
      )}
    </main>
  );
};

export default Feed;
