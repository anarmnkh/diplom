import React from 'react';

import {  ArrowSmRightIcon } from '@heroicons/react/outline';
import { VscLaw } from "react-icons/vsc";
import { GoLaw } from "react-icons/go";
import Image from 'next/image';

import bg from '../public/bg2.jpg'

const Legal = () => {
  return (
  <div className='w-full '>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <Image className='w-full h-full object-cover mix-blend-overlay' src={bg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
            
              <h3 className='text-5xl font-bold py-6 text-center'>Мэдээ, мэдээлэл</h3>
              <p className='py-4 text-3xl text-slate-300'>Монгол улсын хэмжээнд үйлчилж байгаа тэтгэвэр тогтоолгох тухай бүх хууль тогтоомжууд</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <VscLaw  className=' h-14 w-14 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-10'>НИЙГМИЙН ДААТГАЛЫН ЕРӨНХИЙ ХУУЛЬ</h3>
                      
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'> <ArrowSmRightIcon className='w-5 ml-2' />ХАРАХ</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <VscLaw  className='h-14 w-14 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>НИЙГМИЙН ДААТГАЛЫН САНГААС ОЛГОХ ТЭТГЭВРИЙН ТУХАЙ</h3>
                      
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>ХАРАХ <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <VscLaw className='h-14 w-14 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-10'>ДУНДАЖ ЦАЛИН ХӨЛС ТОДОРХОЙЛОХ ЖУРАМ</h3>
                      
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      <p className='flex items-center text-indigo-600'>ХАРАХ <ArrowSmRightIcon className='w-5 ml-2' /></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Legal;
