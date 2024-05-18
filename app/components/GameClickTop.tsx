'use client'
import { CloudDrizzle, CloudLightning, CloudRain, CloudSun, CloudSunRain,  Haze,  Leaf,  Snowflake, SunSnow } from 'lucide-react';

import React, { useEffect, useState } from 'react'
import {motion  } from 'framer-motion'


const  GameClickTop = () => {

  
  return (

<div className={`flex items-center justify-between w-full mt-[-400px] bg-white `}>
    <motion.div   animate={{  rotate:[0 ,360 ]  }} transition={{duration:20 ,    }}  className='flex flex-col items-center justify-center w-fit'>

      <div className=' w-2 h-[400px]  '></div>
        <motion.div  animate={{  rotate:[0 ,-360 ] }} transition={{duration:20 ,    }}  className='p-10  border-t-4 border-cyan-800 w-fit rounded-full bg-black hover:bg-zinc-700 transition'><CloudSun className='text-yellow-400 ' size={100}/></motion.div>
    </motion.div>
    <motion.div animate={{  rotate:[0 ,360 ] }} transition={{duration:18 ,  delay:1  }}  className='flex flex-col items-center justify-center  w-fit'>
    <div className=' w-2 h-[400px] '></div>
    <motion.div animate={{  rotate:[0 ,-360 ] }} transition={{duration:20 ,    }}  className='p-10  border-t-4 border-cyan-800 w-fit rounded-full bg-black hover:bg-zinc-700 transition '><CloudSunRain  className='text-orange-500' size={100}/></motion.div>
    </motion.div>
    <motion.div animate={{  rotate:[0 ,360 ] }} transition={{duration:16,  delay: 2 }}  className='flex flex-col items-center justify-center  w-fit'>
      <div className=' w-2 h-[400px] '></div>
      <motion.div animate={{  rotate:[0 ,-360 ] }} transition={{duration:20 ,    }}  className='p-10  border-t-4 border-cyan-800 w-fit rounded-full  bg-black hover:bg-zinc-700 transition'><Snowflake     className='text-zinc-100' size={100}/></motion.div>
    </motion.div>
    <motion.div animate={{  rotate:[0 ,360 ] }} transition={{duration:14 ,  delay:3 }}  className='flex flex-col items-center justify-center  w-fit'>
        <div className=' w-2 h-[400px] '></div>
        <motion.div animate={{  rotate:[0 ,-360 ] }} transition={{duration:20 ,    }} className='p-10  border-t-4 border-cyan-800 w-fit rounded-full bg-black hover:bg-zinc-700 transition '><CloudLightning  className='text-violet-500' size={100}/></motion.div>
    </motion.div>
    <motion.div animate={{  rotate:[0 ,360 ] }} transition={{duration:12 ,  delay:4  }}  className='flex flex-col items-center justify-center  w-fit'>
        <div className=' w-2 h-[400px] '></div>
        <motion.div animate={{  rotate:[0 ,-360 ] }} transition={{duration:20 ,    }} className='p-10  border-t-4 border-cyan-800 w-fit rounded-full bg-black hover:bg-zinc-700 transition'><Leaf   className='text-rose-500' size={100}/></motion.div>
    </motion.div>
    <motion.div animate={{  rotate:[0 ,360 ] }} transition={{duration:10 ,    delay:5   }}  className='flex flex-col items-center justify-center  w-fit'>
        <div className=' w-2 h-[400px] '></div>
        <motion.div animate={{  rotate:[0 ,-360 ] }} transition={{duration:20 ,    }} className='p-10  border-t-4 border-cyan-800 w-fit rounded-full bg-black hover:bg-zinc-700 transition '><SunSnow    className='text-zinc-400' size={100}/></motion.div>
    </motion.div>
    <motion.div animate={{  rotate:[0 ,360 ] }} transition={{duration:8 ,   delay:6   }}  className='flex flex-col items-center justify-center  w-fit'>
        <div className=' w-2 h-[400px] '></div>
        <motion.div animate={{  rotate:[0 ,-360 ] }} transition={{duration:20 ,    }} className='p-10  border-t-4 border-cyan-800 w-fit rounded-full bg-black hover:bg-zinc-700 transition'><CloudRain   className='text-yellow-400' size={100}/></motion.div>
    </motion.div>
    <motion.div animate={{  rotate:[0 ,360 ] }} transition={{duration:6  ,   delay:7  }}  className='flex flex-col items-center justify-center  w-fit'>
        <div className=' w-2 h-[400px] '></div>
        <motion.div animate={{  rotate:[0 ,-360 ] }} transition={{duration:20 ,    }} className='p-10  border-t-4 border-cyan-800 w-fit rounded-full bg-black  hover:bg-zinc-700 transition'><Haze   className='text-blue-600' size={100}/></motion.div>
    </motion.div>
    <motion.div animate={{  rotate:[0 ,360 ] }} transition={{duration:4 ,   delay:8  }} className='flex flex-col items-center justify-center  w-fit'>
    <div className=' w-2 h-[400px] '></div>
    <motion.div animate={{  rotate:[0 ,-360 ] }} transition={{duration:20 ,    }} className='p-10  border-t-4 border-cyan-800 w-fit rounded-full bg-black  hover:bg-zinc-700 transition'><CloudDrizzle  className='text-cyan-600' size={100}/></motion.div>
    </motion.div>
</div>
  
  )
}

export default GameClickTop