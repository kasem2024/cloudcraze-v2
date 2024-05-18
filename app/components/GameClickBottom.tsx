'use client'
import {motion} from 'framer-motion'
import { CloudDrizzle, CloudLightning, CloudSun, CloudSunRain, Flower, LeafyGreen } from 'lucide-react'
import React from 'react'

const GameClickBottom = () => {
  return (
  
<div className='w-full relative'>
    <div className='flex items-center justify-between w-full mb-[-400px] bg-zinc-800   '>
        <motion.div initial={{}}  animate={{  y:[0 ,-300] } } transition={{duration:4  }} className='flex flex-col items-center justify-center   w-fit'>
         
            <div className='p-10  border-b-4 border-green-600 w-fit rounded-full shadow-lg '><Flower   className='text-green-700' size={100}/></div>
            <div className=' w-2 h-[600px] bg-green-600'></div>
        </motion.div>
        <motion.div    animate={{  y:[0 ,-300] } } transition={{duration:4  }} className='flex flex-col items-center justify-center   w-fit'>
         
         <div className='p-10  border-b-4 border-green-600 w-fit rounded-full shadow-lg  '><Flower  className='text-green-700' size={100}/></div>
         <div className=' w-2 h-[400px] bg-green-600'></div>
     </motion.div>
     <motion.div  animate={{  y:[0 ,-300] } } transition={{duration:4  }} className='flex flex-col items-center justify-center   w-fit'>
         
         <div className='p-10  border-b-4 border-green-600 w-fit rounded-full shadow-lg '><Flower  className='text-green-700' size={100}/></div>
         <div className=' w-2 h-[400px] bg-green-600'></div>
     </motion.div>
     <motion.div  animate={{  y:[0 ,-300] } } transition={{duration:4  }} className='flex flex-col items-center justify-center   w-fit'>
         
         <div className='p-10  border-b-4 border-green-600 w-fit rounded-full shadow-lg  '> <Flower  className='text-green-700' size={100}/></div>
         <div className=' w-2 h-[600px] bg-green-600'></div>
     </motion.div>
    </div>
    <div className='bg-black absolute w-full h-[400px] top-0'></div>
</div>
  )
}

export default GameClickBottom
