import React from "react";

const Story = ({ img, username }) => {
  return (
    <div className="">
      <img
        src={img}
        alt="user profile"
        className="rounded-full h-14 w-14 p-[2px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition duration-200 ease-out"
      />
      <p className=" text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
};

export default Story;
