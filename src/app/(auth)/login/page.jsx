import Link from "next/link";
import React from "react";

const loginPage = () => {
  return (
    <div className="h-[70vh] flex justify-center items-center bg-slate-100 container mx-auto mt-20 rounded-2xl">
      <div className="bg-white p-20 rounded-2xl">
        <h1 className="text-3xl font-semibold">Login Your Account</h1>
        <p className="border border-t-2 border-gray-300 my-5"></p>
        <form className="space-y-5">
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Email Address</legend>
            <input
              type="email"
              className="input"
              placeholder="Enter your Email"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Enter your Password"
            />
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>
        <p className="mt-2">Don't Have An Account <Link href={'/register'} className="text-lg text-red-400">Register?</Link></p>
      </div>
    </div>
  );
};

export default loginPage;
