"use client";
import React from "react";
import Image from "next/image";
import insta3 from "../pictures/insta3.png";
import insta2 from "../pictures/insta2.png";
import instagramLogo from "../pictures/instagramLogo.png";
import instagramCamera from "../pictures/instagramCamera.png";
import { getServerSession } from "next-auth/next";
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
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Header = () => {
  const { data: session, status } = useSession();
  console.log("Im printing session");
  console.log("data object:", session);

  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className=" shadow-sm border-b-2 bg-white sticky top-0 z-50">
      <div className=" flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid w-24 cursor-pointer items-center"
        >
          <Image
            src={instagramLogo}
            fill={true}
            objectFit="contain"
            className=""
          ></Image>
        </div>

        <div
          onClick={() => router.push("/")}
          className=" relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer items-center my-auto"
        >
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
          <HomeIcon
            onClick={() => router.push("/")}
            className="navButton"
          ></HomeIcon>
          <Bars3Icon className=" h-6 cursor-pointer md:hidden"></Bars3Icon>

          {session ? (
            <>
              <div className=" relative navButton">
                <PaperAirplaneIcon className=" navButton"></PaperAirplaneIcon>
                <div className=" absolute -top-3 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>

              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className=" navButton"
              ></PlusCircleIcon>
              <UserGroupIcon className=" navButton"></UserGroupIcon>
              <HeartIcon className=" navButton"></HeartIcon>
              <img
                src={session.user.image}
                alt="User Image"
                className=" h-10 rounded-full cursor-pointer"
                onClick={signOut}
              />
            </>
          ) : (
            <button onClick={signIn} className="text-black">
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
