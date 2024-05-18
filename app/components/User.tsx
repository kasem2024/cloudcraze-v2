import React, { useEffect, useState } from 'react'

const User = ({data}:any) => {
  const [RandomNumber , setRandomNumber] = useState(0);
  useEffect(()=>{
    setRandomNumber(  Math.floor(Math.random() * 6) + 0 )
  },[])
  const shortName = data?.user?.name?.split(' ').map((item:any)=> item[0]).join('')

const randomColor = ['bg-green-600' , 'bg-rose-500' , 'bg-violet-500' , 'bg-orange-600' ,'bg-cyan-600' ,'bg-blue-600']
  return (
    <div className={`text-xl border-2 cyan-600 rounded-full ${randomColor[RandomNumber]} p-3`}>{shortName}</div>
  )
}

export default User