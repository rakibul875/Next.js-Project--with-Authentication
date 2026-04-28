"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import { useForm } from "react-hook-form";

const registerPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = async (data) => {
    const { name, email, password, photo } = data;

    const {data:res, error} = await authClient.signUp.email({
      name: name, 
      email:email, 
      password: password,
      callbackURL: '/',
    });
    console.log(res,error)
    if(error){
      alert(error.message)
    }
    if(res){
      alert('SinUP successfully')
    }
  };
  return (
    <div className="flex justify-center items-center bg-slate-100 container mx-auto mt-20 rounded-2xl">
      <div className="bg-white p-10 rounded-2xl my-5">
        <h1 className="text-3xl font-semibold">Register Your Account</h1>
        <p className="border border-t-2 border-gray-300 my-5"></p>
        <form onSubmit={handleSubmit(handelRegister)} className="space-y-5">
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Your Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Photo URL</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your Photo URL"
              {...register("photo", { required: "Photo URL is required" })}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Email Address</legend>
            <input
              type="email"
              className="input"
              placeholder="Enter your Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Enter your Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>
      </div>
    </div>
  );
};

export default registerPage;
