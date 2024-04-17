import React, { Fragment } from 'react'
import Image from 'next/image'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../public/bg2.jpg'
import Signin from './Signin'

const Hero = () => {
  return (
   
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-8 py-8'>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Тэтгэвэр төлөвлөлт</h1>
                <p className='text-2xl'>This is our Tech brand.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Төлөвлөлт</button>
            </div>
            <div>
                <Image className='w-full' src={bgImg} alt="/" />
            </div>
        </div>
    </div>
    
  )
}

export default Hero