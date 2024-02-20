"use client";
import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      company: faker.company.name(),
    }));
    console.log(suggestions);
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="ml-10 mt-6 ">
      <div className="flex justify-between text-sm mb-5">
        <h1 className="text-sm font-bold">Suggestions for you</h1>
        <button className="text-gray-600 font-semibold hover:text-gray-800">
          See All
        </button>
      </div>
      {suggestions.map((profile) => (
        <div
          key={profile.userId}
          className="flex items-center justify-between my-2"
        >
          <img
            src={profile.avatar}
            alt=""
            className="h-10 w-10 rounded-full border p-[2px]"
          />
          <div className="flex-1 ml-3">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h2 className="text-xs text-gray-400 truncate">
              Works at {profile.company}
            </h2>
          </div>
          <button className="text-blue-400 hover:text-blue-800 text-xs">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
