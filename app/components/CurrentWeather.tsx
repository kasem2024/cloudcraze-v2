'use client'

import React from 'react';
import {motion} from 'framer-motion'
import Image from 'next/image';
const CurrentWeather = ({currentWeather}:any) => {
    console.log(currentWeather)
  return (
    <div className='bg-black/70 text-white px-24 p-6 xl:text-4xl shadow-lg rounded-md'>
      <motion.div whileTap={{scale:1.1}} className="bg-zinc-900 p-4 px-10 flex justify-between items-center shadow-lg rounded-md">
        <div>
          <p className='text-5xl text-cyan-600 font-extrabold'>{currentWeather?.city}</p>
          <p className='text-2xl text-slate-400'>{currentWeather?.weather[0]?.description}</p>
        </div>
        <motion.div whileHover={{rotateX:20}}><Image width={100} height={100}  src={`/icons/${currentWeather?.weather[0]?.icon}.png`} alt="" className='bg-white rounded-full p-4' /></motion.div>
      </motion.div>
      <div className="flex justify-between items-center mt-7">
          <p className='text-6xl font-bold'>{Math.round(currentWeather.main.temp)}<span className='text-6xl text-cyan-600'>°C</span></p>
          <div className="w-[50%]">
              <div className='flex justify-end items-center'>
                <span className='lg:text-4xl font-bold text-cyan-600 '> Details</span>
              </div>
              <div className="flex items-center justify-between">
                <span className='lg:text-4xl font-bold text-white'> Feels Like</span>
                <span className='lg:text-4xl font-bold text-white'> {Math.round(currentWeather.main.feels_like)}°C</span>
              </div>
              <div className="flex items-center justify-between">
                <span className='lg:text-4xl font-bold text-cyan-600'> Wind</span>
                <span className='lg:text-4xl font-bold text-cyan-600'> {currentWeather.wind.speed} m/s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className='lg:text-4xl font-bold text-white'> humidity</span>
                <span className='lg:text-4xl font-bold text-white'> {currentWeather.main.humidity} %</span>
              </div>
              <div className="flex items-center justify-between">
                <span className='lg:text-4xl font-bold text-cyan-600'> Pressure</span>
                <span className='lg:text-4xl font-bold text-cyan-600'> {currentWeather.main.pressure} hpa</span>
              </div>
          </div>
      </div>
    </div>
)
}

export default CurrentWeather

