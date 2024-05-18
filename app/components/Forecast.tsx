'use client'
import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import {motion} from 'framer-motion'
const week_days = ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'sunday'];

const Forecast = ({ data }) => {
  const dayInAweek = new Date().getDay();
  const newDays =  week_days.slice(dayInAweek, week_days.length).concat(week_days.slice(0, dayInAweek));
  return (
    <>
      {/* <label className='text-2xl text-white p-6'>Daily</label> */}
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='flex justify-between items-center bg-zinc-900 px-20 mt-3 rounded-md space-x-4 '>
                 <motion.div whileHover={{rotateX:29}} className='bg-white  rounded-full'> <img className='text-cyan-600 w-[80px] h-[80px]' src={`icons/${item?.weather[0]?.icon}.png`} alt="img" /></motion.div>
                  <label className='text-cyan-600 text-4xl'>{newDays[index]}</label>
                  <label className='lg:text-4xl'>{item?.weather[0]?.description}</label>
                  <label className='text-zinc-500 text-4xl'>
                    {Math.round(item.main.temp_min)}°C /{" "}{Math.round(item.main.temp_max)}
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className='daily-details-grid '>
                <div className="daily-details-grid-item bg-black mb-1 ">
                  <label className='text-white'>Pressure</label>
                   <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item bg-black mb-1 ">
                  <label className='text-xl text-white'>Humidity</label>
                   <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item bg-black mb-1">
                  <label className='text-white'>Clouds</label>
                   <label>{item.clouds.all}</label>
                </div>
                 <div className="daily-details-grid-item bg-black mb-1">
                  <label className='text-white'>Wind speed:</label>
                   <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item bg-black">
                  <label className='text-white'>Sea Level</label>
                   <label>{item.main.sea_level} m</label>
                </div>
                <div className="daily-details-grid-item bg-black">
                  <label className='text-white'>Feels Like</label>
                   <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
     
    </>
    
  )
}

export default Forecast
