import BaseCard from "../components/base-components/BaseCard";
import "./pages.css";
import logo from "../assets/logo.png";
import visible from "../assets/open.png";
import hidden from "../assets/close.png";

import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  let [pswdIsVisible, setPswdIsVisible] = useState(false);
  let handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen">
      <div className="bg-img w-full h-full flex flex-col justify-center items-center sm:pt-10">
        <div className="flex justify-center mt-6">
          <img
            src={logo}
            alt="logo"
            className="w-44 h-10 max-w-[215px] max-h-[74px]"
          />
        </div>

        <BaseCard>
          <h2 className="text-xl md:text-2xl text-black font-medium text-center">
            Welcome Back!
          </h2>
          <p className="text-sm md:text-base text-[#444444] text-center">
            Log into your account
          </p>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="py-[26px]"
          >
            <div>
              <label htmlFor="username" className="text-[#9B9B9B]">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="w-full py-3 md:py-4 rounded-lg bg-[#9a9fbf20] px-3 md:px-4 focus:outline-none"
                placeholder="Username"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="password" className="text-[#9B9B9B]">
                Password
              </label>
              <div className="flex items-center w-full rounded-lg bg-[#e8f0fe] pr-2">
                <input
                  type={pswdIsVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  className="rounded-lg px-3 md:px-4 py-3 md:py-4 bg-transparent w-11/12 focus:outline-none"
                />
                <div className="">
                  {pswdIsVisible && (
                    <button
                      onClick={() => {
                        setPswdIsVisible(false);
                      }}
                    >
                      <img src={visible} alt="open eye icon" />
                    </button>
                  )}
                  {!pswdIsVisible && (
                    <button
                      onClick={() => {
                        setPswdIsVisible(true);
                      }}
                    >
                      <img src={hidden} alt="closed eye icon" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex mt-[25px]">
              <div className="hidden md:flex w-1/2">
                <input type="checkbox" name="remember-me" id="remember-me" />
                <label
                  htmlFor="remember-me"
                  className="text-[#13113F] ml-3 text-xs font-medium"
                >
                  Remember me
                </label>
              </div>
              <div className="flex justify-end w-full md:w-1/2">
                <Link
                  to="/"
                  className="text-[#13113F] ml-3 text-xs font-medium"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <button className="w-full text-white bg-[#4834D4] py-3 md:py-4 mt-11 rounded-lg">
              Login
            </button>
          </form>
        </BaseCard>
      </div>
    </div>
  );
};

export default Login;
