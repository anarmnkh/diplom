import React, { useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useSession,signIn,signOut } from "next-auth/react";
import Signup from "./Signup";

const Signin = ({}) => {
  const [show, setShow] = useState(false);

  
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);


  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
    setShowLoginForm(false);
  };

 
  //google handler function
  async function handleGoogleSignin(){
    signIn('google',{callbackUrl:"https://localhost:3000"})
  }

  return (
    <div className="bg-black bg-opacity-25 backdrop-blur-sm min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      //  onClick={() => onClose()} 
      >
      <div className="max-w-md w-full bg-white rounded-[25px] shadow-lg overflow-hidden ">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Нэвтрэх
          </h2>
        </div>
        <form className="mt-8 space-y-4">
          <div className="px-8 flex item-center justify-between">
            <input
              type="email"
              autoComplete="none"
              required
              className="w-full px-4 py-3 border-b border-gray-300 placeholder-gray-500 text-gray-900 outline-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="И-мэйл хаяг"
            />
            <span className="icon-gray-500 absolute mt-3 ml-[22rem] ">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className="px-8  flex item-center justify-between  ">
            <input
              type={show ? "text" : "password"}
              name="password"
              autoComplete="none"
              required
              className="w-full px-4 py-3 border-b border-gray-300 placeholder-gray-500 text-gray-900 outline-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="Нууц үг"
            />
            <span
              className="icon-gray-500 absolute mt-3 ml-[22rem]"
              style={{ color: show ? "#4299e1" : "#7f7f7f" }}
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          <div class="px-8 mt-6">
            <button className="w-full py-3 px-4 border-2  text-sm font-medium rounded-full text-black bg-white hover:bg-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 border-red-300">
              Нэвтрэх
            </button>
          </div>
          </form>
          <div className="px-8 mt-4">
            <button
              type="submit"
              className="w-full py-3 px-4 border-2 text-sm font-medium rounded-full text-black bg-white hover:bg-gray-300  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border-red-300"           
              onClick={toggleRegisterForm}
             >
              Бүртгүүлэх
            </button>
          </div>
          {showLoginForm && <Signin onClose={() => setShowLoginForm(false)} />}
          {showRegisterForm && <Signup onClose={() => setShowRegisterForm(false)} />}
          <div className="px-8 mt-6 flex items-center justify-between">
            <div className="w-full h-px bg-gray-300"></div>
            <p className="text-sm text-gray-500">Эсвэл</p>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="px-8 mt-6 mb-6">
            <button 
            type='button'
            className="w-full py-3 px-4 border-2 text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-300  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border-red-300">
              Gmail-ээр нэвтрэх
            </button>
          </div>
        
        
      </div>
    </div>
  );
};

export default Signin;
