'use client'
import {motion} from 'framer-motion';
import {ReactTyped} from 'react-typed'
import React from 'react'
import Link from 'next/link';
import cloud from '@/app/src/assets/cloud.jpg'
import Image from 'next/image';
const Login = () => {
  return (
   <div className='bg-white flex flex-col justify-center items-center lg:flex-row  lg:justify-center lg:items-center pb-32 space-x-10 z-50   w-full '>
    <div className='flex flex-col items-center justify-center space-y-16  w-[50vw] h-[50vh] mx-auto   relative p-5'>
    <ReactTyped
                  strings={[
                    'welcome to cloud craze',
                    'continue with Google ',
                    "let's go"
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                  className=" text-3xl lg:text-6xl font-bold text-cyan-800"
                />
      <motion.p
        whileTap={{ scale: 1.1 }}
        className="
        absolute
        bottom-0
       
        w-[200px]
        mx-auto
          mr-5 mb-5
          text-cyan-900 
          text-2xl sm:text-3xl md:text-4xl       
          bg-zinc-300 
          px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4  
          rounded-md md:rounded-lg                 
          hover:bg-zinc-200 
          transition
          text-center                               
                               
        "
      >
  <Link href="/api/auth/signin " >Start</Link>
</motion.p>
    </div>
    <div className='w-[50vw] h-[50vh] mx-auto mt-10 flex justify-center items-center'>
      <Image width={230} height={230} src={cloud} alt="img" className='mr-4'/>
    </div>

   </div>
  )
}

export default Login