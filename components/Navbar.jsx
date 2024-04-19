import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import Signin from './Signin';
import Signup from './Signup';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const handleClose = () => setNav(false);

    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
        setShowRegisterForm(false); // Hide the register form when showing the login form
    };

    const toggleRegisterForm = () => {
        setShowRegisterForm(!showRegisterForm);
        setShowLoginForm(false); // Hide the login form when showing the register form
    };

    const wrapperRef = useRef(null);

    useEffect(() => {
        // Function to close forms when clicking outside
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowLoginForm(false);
                setShowRegisterForm(false);
            }
        };
        // Attach event listener
        document.addEventListener("mousedown", handleClickOutside);
        // Cleanup
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    

  return (
  
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
    <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>RETIREMENT.</h1>
          <ul className='md:flex '>
              <li><Link  href="/">Нүүр</Link></li>
              <li><Link  href="/about">Мэдээ, мэдээлэл</Link></li>
              <li><Link  href="/legal/page">Хууль тогтоомж</Link></li>
              <li><Link  href="/service/page">Үйлчилгээ</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
            <button className='border-none bg-transparent text-black mr-4' onClick={toggleLoginForm}> Нэвтрэх </button>
            <button className='px-8 py-3' onClick={toggleRegisterForm}>Бүртгүүлэх </button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" duration={500}>Нүүр</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="news" offset={-200} duration={500}>Мэдээ, мэдээлэл</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="legal"  offset={-50} duration={500}>Хууль тогтоомж</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="platforms"  offset={-100} duration={500}>Үйлчилгээ</Link></li>


        <div className='flex flex-col my-4'>
            <button className='bg-transparent text-black px-8 py-3 mb-4' onClick={toggleLoginForm} >Нэвтрэх</button>
            <button className='px-8 py-3' onClick={toggleLoginForm} >Бүртгүүлэх</button>
        </div>
      </ul>
        {showLoginForm && <Signin />}
        {showRegisterForm && <Signup />}
    </div>
   
  );
};

export default Navbar;
