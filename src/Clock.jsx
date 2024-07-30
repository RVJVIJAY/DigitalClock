import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [currenttime,setCurrentTime]=useState(new Date());

    useEffect(()=>{
        const time= setInterval(()=>{
            setCurrentTime(new Date())
        },1000)
        return ()=> clearInterval(time)
    },[])

    const getNormalTime=(hour)=>{
        return hour === 0 ? 12 : hour >12 ? hour-12 :hour
    }
    const AddDoubleDigit=(num)=>{
        return num<10 ? `0${num}`: num;
    }
 
  return (
    <div className='digitalclock'>
      <h1>Digital Clock</h1>
      <p className='time'>{AddDoubleDigit(getNormalTime(currenttime.getHours()))}
        :
        {AddDoubleDigit(currenttime.getMinutes())}
        :
        {AddDoubleDigit(currenttime.getSeconds())} 
         
        { currenttime.getHours()>12 ? " PM" : " AM"}</p>
      <p className='date'>{currenttime.toDateString()}</p>
      <p></p>
    </div>
  )
}

export default Clock
