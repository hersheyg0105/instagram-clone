import React from "react";
import Stories from "../components/Stories";
import Posts from "../components/Posts";
import MiniProfile from "../components/MiniProfile";
import Suggestions from "../components/Suggestions";

const Feed = () => {
  return (
    <main className=" grid grid-cols-1 md:grid-cols-2 md:max-width-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      <section className="col-span-2">
        {/* Stories */}
        <Stories></Stories>
        <Posts></Posts>
      </section>

      <section className="hidden xl:inline-grid md:col-span-1">
        {/* Mini Profile */}
        <div className="fixed">
          <MiniProfile></MiniProfile>
          <Suggestions></Suggestions>
        </div>

        {/* Suggestions */}
      </section>
    </main>
  );
};

export default Feed;
