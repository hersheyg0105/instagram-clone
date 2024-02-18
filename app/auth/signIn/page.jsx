"use client";
import { getProviders } from "next-auth/react";
import React from "react";
import Header from "../../components/Header";
// import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import { signIn } from "next-auth/react";
import instagramLogo from "../../pictures/instagramLogo.png";

const SignInButton = () => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center justify-center min-h-screen -mt-52">
        <div className="">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
            alt="Instagram Logo"
            className="w-80"
          />
        </div>
        <div className="mt-20 flex bg-blue-400 rounded-lg p-3">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png"
            alt="Google Icon"
            className="w-12 object-contain bg-white rounded-full p-2"
          />
          <button
            className="p-3   text-white"
            onClick={() => signIn("google", { callbackUrl: "/" })}
            type="button"
          >
            Sign In With Google
          </button>
        </div>
      </div>
    </>
  );
};

// export async function getServerSideProps() {
//   const providers = getProviders();
// }

export default SignInButton;
