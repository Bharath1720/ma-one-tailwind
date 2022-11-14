import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bgimg from "../Components/../images/Bgimg.png";

import { useContext } from "react";

import { AppContext } from "../Context";

const Login = ({ children }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [toggleIcon, setToggleIcon] = useState(false);
  const [forgetPass, setForgetPass] = useState(false);

  const { theme, toggleTheme, setLoggedIn } = useContext(AppContext);

  const navigate = useNavigate();
  const refInp = useRef();
  const usernameHandler = (event) => {
    setUserName(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = (e) => {
    if (username === "artwork" && password === "artwork") {
      e.preventDefault();
      setLoggedIn(true);
      navigate("/");
    } else {
      alert("Pease Enter Correct Details");
    }
  };
  const forgetPassHandler = () => {
    setForgetPass(true);
  };
  const forgetPassHandler1 = () => {
    setForgetPass(false);
  };
  const showPass = () => {
    if (refInp.current.type == "password" && refInp.current.value.length >= 1) {
      refInp.current.type = "text";
      setToggleIcon(true);
    } else {
      refInp.current.type = "password";
      setToggleIcon(false);
    }
  };
  return (
    <div>
      <div className="flex w-full">
        {/* Left side */}
        <div className="flex  bg-white border rounded-lg  mr-2  md:px-12 flex-col m-6 w-full md:w-1/2">
          {/* Logo */}
          <div className="w-56 mx-auto md:mx-0">
            <img
              src="https://res.cloudinary.com/duwkxxbeh/image/upload/v1667819859/main-logo_img_kfuvh2.png"
              alt=""
            ></img>
          </div>
          <div>
            <h2 className="font-bold mb-6 text-center md:text-left text-2xl">
              Artwork Management System
            </h2>
            <p className="mb-9 w-2/3 mx-auto text-center md:text-left md:mx-0 leading-7">
              End-to-End Packaging and Artwork Management platform for
              <span className="px-1 font-bold text-md text-orange-500">
                Pharma & CPG
              </span>
              Companies.
            </p>
          </div>
          {/* input field */}
          {!forgetPass && (
            <div className="flex mx-auto flex-col w-80 md:w-full">
              <div className="flex flex-col">
                <label htmlFor="email" className="font-medium mb-0.5">
                  Username
                </label>
                <input
                  type="email"
                  id="email"
                  className="border peer border-slate-200  focus:invalid:border-red-500 valid:border-green-500  bg-slate-100 p-3 rounded-lg outline-none"
                  onChange={usernameHandler}
                  value={username}
                  placeholder="name@company.com"
                  required
                />
                <p className="mt-2 invisible peer-focus:peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid email address.
                </p>
              </div>

              <div className="flex flex-col relative">
                <label htmlFor="password" className="font-medium mb-0.5">
                  Password
                </label>

                <input
                  type="password"
                  ref={refInp}
                  id="password"
                  className="border peer bg-slate-100  valid:border-green-500 focus:invalid:border-red-500  p-3 rounded-lg  outline-none"
                  onChange={passwordHandler}
                  value={password}
                  placeholder="Enter password"
                  required
                />
                {/* eye icon */}
                <span
                  onClick={showPass}
                  className=" absolute right-6 top-10 w-6"
                >
                  {toggleIcon && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 stroke-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                  {!toggleIcon && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 stroke-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </span>

                <p class="mt-2 invisible peer-focus:peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid password.
                </p>
              </div>
            </div>
          )}
          {forgetPass && (
            <div className="flex flex-col items-center space-y-4 mb-10 w-full">
              <h2 className="text-lg font-bold">Forget Password</h2>
              <p>
                Enter the e-mail id associated with your ManageArtworks account
                and we will share a link to reset the password.
              </p>
              <input
                type="text"
                className="border peer w-full bg-slate-100  p-3 rounded-lg  outline-none"
                placeholder="Email Id"
              />
            </div>
          )}
          {/* block ads */}
          <div className="flex items-center gap-1">
            <p htmlFor="" className="  text-gray-400">
              A popup blocker was detected. Please turn it off to use this
              application
            </p>
            <img
              className="w-4 h-4"
              src="https://res.cloudinary.com/duwkxxbeh/image/upload/v1667912056/no-drop_emhzry.png"
              alt=""
            />
          </div>
          {/* Forget pass */}
          <div className="flex md:mt-9 mt-10 mx-auto space-x-20 md:space-x-0 md:mx-0 justify-between ">
            <div className="flex items-center space-x-2">
              {/* <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-blue-500"
                name=""
                id="remember"
              /> */}
            </div>
            {!forgetPass && (
              <div>
                <span
                  href="#"
                  onClick={forgetPassHandler}
                  className="text-blue-500 font-medium md:ml-4"
                >
                  Forget Password?
                </span>
              </div>
            )}
          </div>
          {/* Sign btn */}
          <div
            className={`flex ${forgetPass && "justify-end"} ${
              !forgetPass && "justify-center"
            }  mx-20 md:mx-0 mb-12`}
          >
            {forgetPass && (
              <div className="mb-6">
                <button
                  onClick={forgetPassHandler1}
                  className="bg-blue-700 mr-4 hover:bg-blue-500 shadow-md font-medium py-3 rounded-xl w-32 mt-20  text-white"
                >
                  Cancel
                </button>
                <button className="bg-blue-700 hover:bg-blue-500 shadow-md font-medium py-3 rounded-xl w-32 mt-20  text-white">
                  Continue
                </button>
              </div>
            )}
            {!forgetPass && (
              <button
                onClick={submitHandler}
                className="bg-blue-700 hover:bg-blue-500 shadow-md font-medium py-3 rounded-xl w-32 mt-20  text-white"
              >
                Sign in
              </button>
            )}
          </div>
        </div>

        {/*  Right side */}
        <div className="w-1/2 bg-veryLightBlueGray  hidden md:block max-h-full">
          <img src={Bgimg} className="h-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
