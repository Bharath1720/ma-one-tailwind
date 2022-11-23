import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import bgimg from "./bg-imgart-edit1.png";
import { BsLink } from "react-icons/bs";
import { BiChevronsRight } from "react-icons/bi";
import { AiOutlineStop } from "react-icons/ai";

import { useContext } from "react";

import { AppContext } from "../Context";

const Login = ({ children }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [toggleIcon, setToggleIcon] = useState(false);
  const [forgetPass, setForgetPass] = useState(false);

  const { login, setLoggedIn } = useContext(AppContext);

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
    }
  };
  const forgetPassHandler = () => {
    setForgetPass(true);
  };
  const forgetPassHandler1 = () => {
    setForgetPass(false);
  };
  const showPass = () => {
    if (
      refInp.current.type === "password" &&
      refInp.current.value.length >= 1
    ) {
      refInp.current.type = "text";
      setToggleIcon(true);
    } else {
      refInp.current.type = "password";
      setToggleIcon(false);
    }
  };
  return (
    <div className="w-full h-screen fixed">
      <p className="bg-sky-500 w-full p-[2px]"></p>
      <div className="flex bg-gray-200 bg-hero-pattern bg-no-repeat bg-cover justify-center w-full h-screen items-center box-border">
        <div className="flex flex-col w-full md:w-[50%] mx-auto ">
          <div className="flex flex-col md:flex-row mx-auto gap-x-4">
            {/* Left Side */}
            <div className="flex flex-col w-[80%] md:w-[25%] mx-auto md:mx-0 md:ml-12 items-center justify-between rounded-t-md md:rounded-md bg-gray-300 space-y-14 md:space-y-20 ">
              <div className="flex relative ">
                <img
                  src="https://res.cloudinary.com/duwkxxbeh/image/upload/v1667819859/main-logo_img_kfuvh2.png"
                  className="w-[35%] md:w-[75%] mx-auto  m-2"
                  alt="mainlogo"
                />
                <BsLink className="hidden md:block text-[26px] absolute -right-8 top-2  bg-black text-gray-400 rounded-full p-2 box-content" />
              </div>
              <p className="flex space-x-1 cursor-pointer hover:space-x-3 hover:transition  hover:duration-500 items-center ">
                <span className="text-xs text-gray-500">Powered by </span>
                <img
                  src="https://res.cloudinary.com/duwkxxbeh/image/upload/v1667819859/main-logo_img_kfuvh2.png"
                  className="w-[50%] h-10"
                  alt="anc"
                />
              </p>
            </div>
            {/* Right Side */}
            {!forgetPass && (
              <div className="flex flex-col w-[80%] mx-auto md:mx-0 md:w-[50%] text-white rounded-b-md md:rounded-md  bg-gray-500">
                <h2 className="p-2 mb-4 text-lg text-center font-semibold">
                  Artwork Management System
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col w-[80%] p-3 ml-2  space-y-6">
                    <input
                      type="email"
                      className="rounded-sm outline-none focus:ring-black placeholder:text-sm ring-transparent text-black ring-2 focus:ring-opacity-40 p-1"
                      onChange={usernameHandler}
                      value={username}
                      placeholder="Login Id"
                    />
                    <input
                      type="password"
                      className="rounded-sm  outline-none focus:ring-black placeholder:text-sm ring-transparent text-black ring-2 focus:ring-opacity-40 p-1"
                      onChange={passwordHandler}
                      value={password}
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <BiChevronsRight
                      onClick={submitHandler}
                      className="text-[30px] bg-sky-300 cursor-pointer hover:bg-sky-500 rounded-full md:p-4 p-3 -mr-7 ring-8 ring-white box-content "
                    />
                  </div>
                </div>
                <p
                  onClick={forgetPassHandler}
                  className="text-xs mb-9 w-fit ml-2 p-3 cursor-pointer"
                >
                  Forget Password?
                </p>
              </div>
            )}
            {/* Forget Password */}
            {forgetPass && (
              <div className="flex flex-col w-[80%]  items-center mx-auto md:mx-0 md:w-[50%] text-white rounded-b-md md:rounded-md  bg-gray-500">
                <h2 className="p-2 mb-3 text-lg text-center font-semibold">
                  Forget Password
                </h2>
                <p className="w-[80%] leading-5 mb-4 text-xs">
                  Enter the e-mail id associated with your ManageArtworks
                  account and we will share a link to reset the password.
                </p>
                <input
                  type="text"
                  className="rounded-sm outline-none w-[80%] placeholder:text-sm focus:ring-black ring-transparent text-black ring-2 focus:ring-opacity-40 p-1"
                  placeholder="Email Id"
                />
                <div className="flex w-[80%] justify-end mt-10 mb-9 space-x-3">
                  <button
                    onClick={forgetPassHandler1}
                    className="p-1 bg-slate-200 rounded-md hover:bg-slate-300 text-sm text-black"
                  >
                    Cancel
                  </button>
                  <button className="p-1 rounded-md bg-slate-200 hover:bg-slate-300 text-sm text-black">
                    Continue
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex md:ml-12 w-[80%]  mx-auto text-xs">
            <p className="flex flex-wrap  items-center">
              A popup blocker was detected. Please turn it off to use this
              application
              <AiOutlineStop className="text-red-600 ml-1 mt-1 text-lg" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Bgimg from "../Components/../images/Bgimg.png";

// import { useContext } from "react";

// import { AppContext } from "../Context";

// const Login = ({ children }) => {
//   const [username, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [toggleIcon, setToggleIcon] = useState(false);
//   const [forgetPass, setForgetPass] = useState(false);

//   const { setLoggedIn } = useContext(AppContext);

//   const navigate = useNavigate();
//   const refInp = useRef();
//   const usernameHandler = (event) => {
//     setUserName(event.target.value);
//   };
//   const passwordHandler = (event) => {
//     setPassword(event.target.value);
//   };
//   const submitHandler = (e) => {
//     if (username === "artwork" && password === "artwork") {
//       e.preventDefault();
//       setLoggedIn(true);
//       navigate("/");
//     } else {
//       alert("Pease Enter Correct Details");
//     }
//   };
//   const forgetPassHandler = () => {
//     setForgetPass(true);
//   };
//   const forgetPassHandler1 = () => {
//     setForgetPass(false);
//   };
//   const showPass = () => {
//     if (
//       refInp.current.type === "password" &&
//       refInp.current.value.length >= 1
//     ) {
//       refInp.current.type = "text";
//       setToggleIcon(true);
//     } else {
//       refInp.current.type = "password";
//       setToggleIcon(false);
//     }
//   };
//   return (
//     <div>
//       <div className="flex w-full">
//         {/* Left side */}
//         <div className="flex  bg-white border rounded-lg  mr-2  md:px-12 flex-col m-6 w-full md:w-1/2">
//           {/* Logo */}
//           <div className="w-56 mx-auto md:mx-0">
//             <img
//               src="https://res.cloudinary.com/duwkxxbeh/image/upload/v1667819859/main-logo_img_kfuvh2.png"
//               alt=""
//             ></img>
//           </div>
//           <div>
//             <h2 className="font-bold mb-6 text-center md:text-left text-2xl">
//               Artwork Management System
//             </h2>
//             <p className="mb-9 w-2/3 mx-auto text-center md:text-left md:mx-0 leading-7">
//               End-to-End Packaging and Artwork Management platform for
//               <span className="px-1 font-bold text-md text-orange-500">
//                 Pharma & CPG
//               </span>
//               Companies.
//             </p>
//           </div>
//           {/* input field */}
//           {!forgetPass && (
//             <div className="flex mx-auto flex-col w-80 md:w-full">
//               <div className="flex flex-col">
//                 <label htmlFor="email" className="font-medium mb-0.5">
//                   Username
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="border peer border-slate-200  focus:invalid:border-red-500 valid:border-green-500  bg-slate-100 p-3 rounded-lg outline-none"
//                   onChange={usernameHandler}
//                   value={username}
//                   placeholder="name@company.com"
//                   required
//                 />
//                 <p className="mt-2 invisible peer-focus:peer-invalid:visible text-pink-600 text-sm">
//                   Please provide a valid email address.
//                 </p>
//               </div>

//               <div className="flex flex-col relative">
//                 <label htmlFor="password" className="font-medium mb-0.5">
//                   Password
//                 </label>

//                 <input
//                   type="password"
//                   ref={refInp}
//                   id="password"
//                   className="border peer bg-slate-100  valid:border-green-500 focus:invalid:border-red-500  p-3 rounded-lg  outline-none"
//                   onChange={passwordHandler}
//                   value={password}
//                   placeholder="Enter password"
//                   required
//                 />
//                 {/* eye icon */}
//                 <span
//                   onClick={showPass}
//                   className=" absolute right-6 top-10 w-6"
//                 >
//                   {toggleIcon && (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="w-6 h-6 stroke-gray-400"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                     </svg>
//                   )}
//                   {!toggleIcon && (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="w-6 h-6 stroke-gray-400"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
//                       />
//                     </svg>
//                   )}
//                 </span>

//                 <p className="mt-2 invisible peer-focus:peer-invalid:visible text-pink-600 text-sm">
//                   Please provide a valid password.
//                 </p>
//               </div>
//             </div>
//           )}
//           {forgetPass && (
//             <div className="flex flex-col items-center space-y-4 mb-10 w-full">
//               <h2 className="text-lg font-bold">Forget Password</h2>
//               <p>
//                 Enter the e-mail id associated with your ManageArtworks account
//                 and we will share a link to reset the password.
//               </p>
//               <input
//                 type="text"
//                 className="border peer w-full bg-slate-100  p-3 rounded-lg  outline-none"
//                 placeholder="Email Id"
//               />
//             </div>
//           )}
//           {/* block ads */}
//           <div className="flex items-center gap-1">
//             <p htmlFor="" className="  text-gray-400">
//               A popup blocker was detected. Please turn it off to use this
//               application
//             </p>
//             <img
//               className="w-4 h-4"
//               src="https://res.cloudinary.com/duwkxxbeh/image/upload/v1667912056/no-drop_emhzry.png"
//               alt=""
//             />
//           </div>
//           {/* Forget pass */}
//           <div className="flex md:mt-9 mt-10 mx-auto space-x-20 md:space-x-0 md:mx-0 justify-between ">
//             <div className="flex items-center space-x-2">
//               {/* <input
//                 type="checkbox"
//                 className="w-4 h-4 cursor-pointer accent-blue-500"
//                 name=""
//                 id="remember"
//               /> */}
//             </div>
//             {!forgetPass && (
//               <div>
//                 <span
//                   href="#"
//                   onClick={forgetPassHandler}
//                   className="text-blue-500 font-medium md:ml-4"
//                 >
//                   Forget Password?
//                 </span>
//               </div>
//             )}
//           </div>
//           {/* Sign btn */}
//           <div
//             className={`flex ${forgetPass && "justify-end"} ${
//               !forgetPass && "justify-center"
//             }  mx-20 md:mx-0 mb-12`}
//           >
//             {forgetPass && (
//               <div className="mb-6">
//                 <button
//                   onClick={forgetPassHandler1}
//                   className="bg-blue-700 mr-4 hover:bg-blue-500 shadow-md font-medium py-3 rounded-xl w-32 mt-20  text-white"
//                 >
//                   Cancel
//                 </button>
//                 <button className="bg-blue-700 hover:bg-blue-500 shadow-md font-medium py-3 rounded-xl w-32 mt-20  text-white">
//                   Continue
//                 </button>
//               </div>
//             )}
//             {!forgetPass && (
//               <button
//                 onClick={submitHandler}
//                 className="bg-blue-700 hover:bg-blue-500 shadow-md font-medium py-3 rounded-xl w-32 mt-20  text-white"
//               >
//                 Sign in
//               </button>
//             )}
//           </div>
//         </div>

//         {/*  Right side */}
//         <div className="w-1/2 bg-veryLightBlueGray  hidden md:block max-h-full">
//           <img src={Bgimg} className="h-full" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
