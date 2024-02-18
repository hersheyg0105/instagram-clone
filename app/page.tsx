import Image from "next/image";
import ScreenSize from "./components/ScreenSize";
import Header from "./components/Header";
import Feed from "./components/Feed";
import GoogleButton from "react-google-button";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      {/* <h1>Hi There</h1>
      <button>Click me</button>
      <div>This is the instagram clone build</div> */}
      {/* <ScreenSize></ScreenSize> */}

      {/* Header Component */}
      {/* <GoogleButton
        onClick={() => {
          signIn("google");
        }}
      /> */}
      <Header></Header>

      {/* Feed Component */}
      <Feed></Feed>

      {/* Modal Component */}
    </div>
  );
}
