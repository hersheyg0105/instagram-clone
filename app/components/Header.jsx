"use client";
import React from "react";
import Image from "next/image";
import insta3 from "../pictures/insta3.png";
import insta2 from "../pictures/insta2.png";
import instagramLogo from "../pictures/instagramLogo.png";
import instagramCamera from "../pictures/instagramCamera.png";
import {
  BeakerIcon,
  SearchIcon,
  MagnifyingGlassIcon,
  MagnifyingGlassCircleIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import { HomeIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";

const Header = async () => {
  const { data: session, status } = await useSession();
  console.log("Im printing session");
  console.log(session);
  console.log(status);

  return (
    <div className=" shadow-sm border-b-2 bg-white sticky top-0 z-50">
      <div className=" flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer items-center">
          <Image
            src={instagramLogo}
            fill={true}
            objectFit="contain"
            className=""
          ></Image>
        </div>

        <div className=" relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer items-center my-auto">
          <Image src={instagramCamera} fill={true} objectFit="contain"></Image>
        </div>

        {/* Middle - Search*/}
        <div className=" mt-1 relative p-3 rounded-md">
          <div className=" absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className=" h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className=" bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-xl"
          />
        </div>

        {/* Right */}
        <div className=" flex items-center justify-between gap-1">
          <HomeIcon className="navButton"></HomeIcon>
          <Bars3Icon className=" h-6 cursor-pointer md:hidden"></Bars3Icon>
          <div className=" relative navButton">
            <PaperAirplaneIcon className=" navButton"></PaperAirplaneIcon>
            <div className=" absolute -top-3 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>

          <PlusCircleIcon className=" navButton"></PlusCircleIcon>
          <UserGroupIcon className=" navButton"></UserGroupIcon>
          <HeartIcon className=" navButton"></HeartIcon>
          <img
            src="https://media.licdn.com/dms/image/D4E35AQGFH3hmH9FOYw/profile-framedphoto-shrink_200_200/0/1692929048181?e=1708297200&v=beta&t=2eXSOACshQdKkug_yxKneHrdVAncquh3PpIuujivY44"
            alt="User Image"
            className=" h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>

      {/* <h1>Hello</h1>
      <h1>whats up</h1>
      <h1>whats popping</h1> */}
    </div>
  );
};

export default Header;
