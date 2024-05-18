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
    const [forecast, setForecast] = useState(null)
    const handleOnSearchChange = (searchData) => {
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

    // const [bgvalue , setBgValue] = useState('bg-navbg1')
    const [counter , setCounter] = useState(0)
    console.log(counter)
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
    useEffect(()=>{

    }, [])
    console.log(currentWeather)
    console.log(forecast)
    const {data} = useSession();
 
  return (
 <div>
      <div className={` overflow-hidden w-[100vw]  ${bgData[counter]} width-full h-[100vh] bg-cover flex justify-center items-start`}>
        <div className=' flex justify-center items-center w-full absolute top-0 left-0 px-10 2xl:pl-10 2xl:pr-20  py-5   text-white z-30'>
            <div className='text-3xl font-extrabold absolute top-[30px] left-[30px]'><span className='text-5xl text-cyan-600'>C</span>loud </div>
             <div className=' border-4 border-white w-[60%] p-2 text-black text-2xl'>
             <Search onSearchChange={handleOnSearchChange}/>
             </div>
            <div className='flex space-x-3 items-center justify-center  absolute top-[10px] right-[30px]'>
              <User data={data}/>
              <Link href={'/api/auth/signout'} className='text-zinc-100 text-5xl bg-black rounded-full p-5 border-4'><LogOut/> </Link>
            </div>
           </div>
   
       <div className='pt-28 rounded-md text-2xl bg-black/30 w-[100vw]   2xl:w-[70vw] h-screen shadow-lg text-cyan-600 flex justify-center items-start z-20'>

      <div className='w-[80%] '> {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
      {forecast && <Forecast data={forecast} />}</div>
       </div>
     { !forecast && <div className='flex absolute  bottom-0 left-0 w-full h-[50vh] z-50'>
         <GlobeDemo/>
      </div>}
      </div>
      <div className='bg-black/10 w-full h-full absolute z-10 top-0 left-0 '>
      </div>
 </div>
  )
}

export default Weather

