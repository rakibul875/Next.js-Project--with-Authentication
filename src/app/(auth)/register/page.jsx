import React from "react";

const registerPage = () => {
  return (
    <div className="flex justify-center items-center bg-slate-100 container mx-auto mt-20 rounded-2xl">
      <div className="bg-white p-10 rounded-2xl my-5">
        <h1 className="text-3xl font-semibold">Register Your Account</h1>
        <p className="border border-t-2 border-gray-300 my-5"></p>
        <form className="space-y-5">
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Your Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Photo URL</legend>
            <input
              type="email"
              className="input"
              placeholder="Enter your Photo URL"
            />
          </fieldset>
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
      </div>
    </div>
  );
};

export default registerPage;
