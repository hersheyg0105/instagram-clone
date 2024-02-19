import Image from "next/image";
import ScreenSize from "./components/ScreenSize";
import Header from "./components/Header";
import Feed from "./components/Feed";
import GoogleButton from "react-google-button";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Modal from "./components/Modal";
// import ModalDaisy from "./components/ModalDaisy";
import ModalHeadless from "./components/ModalHeadless";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log("printing session in Home component");
  console.log(session);
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
      {/* <Modal></Modal>
      // <ModalDaisy></ModalDaisy> */}
      <ModalHeadless></ModalHeadless>
    </div>
  );
}
