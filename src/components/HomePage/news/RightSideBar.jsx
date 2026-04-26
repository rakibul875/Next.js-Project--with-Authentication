import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import swimming from "@/assets/image/swimming.png";
import Class from "@/assets/image/class.png";
import Play from "@/assets/image/playground.png";
import bg from "@/assets/image/bg.png";

const RightSideBar = () => {
  return (
    <div>
      <h1 className="font-bold text-lg">Login with</h1>
      <div className="flex flex-col gap-2 mt-2">
        <button className="btn border-blue-400 text-blue-400">
          <FaGoogle /> Login With Google
        </button>
        <button className="btn border-gray-400 text-gray-500">
          <FaGithub /> Login With Github
        </button>
      </div>
      <div className="mt-2">
        <h1 className="font-bold text-lg">Find Us On</h1>
        <div className="flex flex-col text-center gap-2">
          <button className="btn border py-2 px-3 border-gray-300 text-gray-500">
            <FaFacebook /> Facebook
          </button>
          <button className="btn border py-2 px-3 border-gray-300 text-gray-500">
            <FaTwitter /> Twitter
          </button>
          <button className="btn border py-2 px-3 border-gray-300 text-gray-500">
            <FaInstagram /> Instagram
          </button>
        </div>
      </div>
      <div className="bg-gray-200 mt-3 py-3 rounded-xl">
        <h1 className="font-bold text-lg text-gray-500 ml-3">Q-zoon</h1>
        <Image
          src={swimming}
          alt="swimming image"
          width={250}
          height={250}
          className="mx-auto"
        />
        <Image
          src={Class}
          alt="Class image"
          width={250}
          height={250}
          className="mx-auto"
        />
        <Image
          src={Play}
          alt="Playground image"
          width={250}
          height={250}
          className="mx-auto"
        />
      </div>
      <div className="mt-3">
        <Image src={bg} alt="Background Image" width={300} height={300} />
      </div>
    </div>
  );
};

export default RightSideBar;
