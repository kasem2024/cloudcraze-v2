'use client' // i will add user profile so in the future i will make  a server componet
import React , {useState , useEffect} from 'react'
// import { bgData } from '@/utils/bgData'
import { useSession } from 'next-auth/react'
import Search from './Search'
 const bgData = [
    "bg-navbg1",
    "bg-navbg2",
    "bg-navbg3",
    "bg-navbg4",
    "bg-navbg5",
    "bg-navbg6",
    "bg-navbg7",
    "bg-navbg8",
    "bg-navbg9",
]

import { GlobeDemo } from './Globe'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
import { API_Key } from '@/data/api'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import User from './User'
const  apiWeatherUrl = "https://api.openweathermap.org/data/2.5"

const Weather = () => {
    const [currentWeather, setCurrentWeather] = useState(null)
    const [counter , setCounter] = useState(0)
    const [forecast, setForecast] = useState(null)
    const {data} = useSession();
    const handleOnSearchChange = (searchData :any) => {
        const [lat, lon] = searchData.value.split(' ')
        const currentWeatherFetch = fetch(
          `${apiWeatherUrl}/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`
        )
        const currentforecastFetch = fetch(
          `${apiWeatherUrl}/forecast?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`
        )
        Promise.all([currentWeatherFetch, currentforecastFetch])
          .then(async (response) => {
            const weatherResponse = await response[0].json()
            const forecastResponse = await response[1].json()
            setCurrentWeather({ ...weatherResponse, city: searchData.label })
            setForecast({ ...forecastResponse, city: searchData.label })
          })
          .catch((err) => console.log(err))
      }

    useEffect(()=>{
    const timeoutId = setTimeout(() => {
        if(counter < 8){
            setCounter((counter)=> ++counter)
        }else{
            setCounter(0)
        }
    
    }, 11000);
    return ()=> clearTimeout(timeoutId)
    }, [counter])

    console.log(currentWeather)
    console.log(forecast)
 
  return (
 <div>
      {/* FIRST LAYER  */}
      <div className={` overflow-hidden w-[100vw]  ${bgData[counter]} width-full h-[100vh] bg-cover flex justify-center items-start`}>
            {/* NAVBAR  */}
            <nav className=' flex justify-center items-center w-full absolute top-0 left-0 px-5 2xl:pl-7 2xl:pr-10  py-3   text-white z-30'>
                <div className='text-3xl font-extrabold absolute top-[20px] left-[20px]'><span className='text-4xl text-cyan-600'>C</span>loud </div>

                <div className='z-50 border-2 border-white w-[60%] p-1 text-black text-xl'>
                <Search onSearchChange={handleOnSearchChange}/>
                </div>

                <div className='flex space-x-3 items-center justify-center  absolute top-[10px] right-[20px]'>
                  <User data={data}/>
                  <Link href={'/api/auth/signout'} className='text-zinc-100 text-5xl bg-black rounded-full p-3 border-2'><LogOut/> </Link>
                </div>
            </nav>
            {/* WEATHER  */}
            <div className='pt-24 rounded-md text-2xl bg-black/30 w-[100vw]   2xl:w-[70vw] h-screen shadow-lg text-cyan-600 flex justify-center items-start z-20'>
                <div className='w-[80%] '> 
                    {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
                    {forecast && <Forecast data={forecast} />}
                </div>
            </div>

            { !forecast && <div className='md:flex absolute bottom-[300px] left-[50%] translate-x-[-50%] w-[700px] h-[20vh] hidden  '> <GlobeDemo/> </div>}
        
      </div>
      {/* SECOND LAYER  */}
      <div className='bg-black/10 w-full h-full absolute z-10 top-0 left-0 '>
      </div>
 </div>
  )
}

export default Weather

