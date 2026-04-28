"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const loginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(res,error)
  };

  return (
    <div className="flex justify-center items-center bg-slate-100 container mx-auto mt-20 rounded-2xl">
      <div className="bg-white p-20 rounded-2xl my-5">
        <h1 className="text-3xl font-semibold">Login Your Account</h1>
        <p className="border border-t-2 border-gray-300 my-5"></p>
        <form onSubmit={handleSubmit(handelLogin)} className="space-y-5">
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Email Address</legend>
            <input
              type="email"
              className="input"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your Email"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
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
        <p className="mt-2">
          Don't Have An Account
          <Link href={"/register"} className="text-lg text-red-400">
            Register?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default loginPage;
