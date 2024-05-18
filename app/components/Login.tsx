'use client'
import {motion} from 'framer-motion';
import {ReactTyped} from 'react-typed'
import React from 'react'
import Link from 'next/link';
const Login = () => {
  return (
   <div className='bg-white flex justify-center items-center pb-32 space-x-10 z-50   w-full '>
    <div className='flex flex-col items-center justify-center space-y-16'>
    <ReactTyped
                  strings={[
                    'Do you have a Google Account?',
                    'Do you want to check the weather',
                    "let's go"
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                  className=" text-3xl lg:text-6xl font-bold text-cyan-600"
                />
       <motion.p whileTap={{scale:1.1}} className='text-cyan-500 text-4xl bg-zinc-700 px-6 py-4 rounded-md hover:bg-zinc-900 transition'><Link href={'/api/auth/signin'}>Start</Link></motion.p> 
    </div>

   </div>
  )
}

export default Login