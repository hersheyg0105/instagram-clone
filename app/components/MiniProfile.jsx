import React from "react";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      {/* <h1>I am in mini feed</h1>
      <h1>whats up</h1> */}
      <img
        src="https://media.licdn.com/dms/image/D4E35AQGFH3hmH9FOYw/profile-framedphoto-shrink_200_200/0/1692929048181?e=1708297200&v=beta&t=2eXSOACshQdKkug_yxKneHrdVAncquh3PpIuujivY44"
        alt=""
        className="rounded-full border p-1 w-16 h-16"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">hersheyg0105</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold hover:text-blue-800">
        Sign Out
      </button>
    </div>
  );
};

export default MiniProfile;
