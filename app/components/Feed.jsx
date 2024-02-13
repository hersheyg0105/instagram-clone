import React from "react";
import Stories from "../components/Stories";
import Posts from "../components/Posts";

const Feed = () => {
  return (
    <main className=" grid grid-cols-1 md:grid-cols-2 md:max-width-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto bg-blue-300">
      <section className="col-span-2">
        {/* Stories */}
        <Stories></Stories>
        <Posts></Posts>

        {/* Posts */}
      </section>

      <section className="bg-red-500">
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
};

export default Feed;
