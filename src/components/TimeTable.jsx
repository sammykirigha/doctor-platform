import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';

const TimeTable = () => {
  return (
    <div className='flex flex-row w-full mb-5'>
      <div className=" border shadow-sm rounded-md w-[40%] pt-3">
        <div className='flex flex-row  mx-3 '>
          <span className='flex flex-row items-center '><BsFillClockFill className='text-md text-blue-600  mr-3' /> Monday</span>
          <div className='ml-[140px]  w-80'>Time: <span className='text-blue-400'>8.00 - 20.00</span></div>
        </div>
        <div className='flex flex-row items-center mx-3 mt-3'>
          <span className='flex flex-row items-center '><BsFillClockFill className='text-md text-blue-600 mr-3' /> Tuesday</span>
          <div className='ml-[140px] w-80'>Time: <span className='text-blue-400'>8.00 - 20.00</span></div>
        </div>
        <div className='flex flex-row items-center mx-3 mt-3 '>
          <span className='flex flex-row items-center '><BsFillClockFill className='text-md text-blue-600 mr-3' /> Wednesday</span>
          <div className='ml-[120px] w-80'>Time: <span className='text-blue-400'>8.00 - 20.00</span></div>
        </div>
        <div className='flex flex-row items-center mx-3 mt-3 '>
          <span className='flex flex-row items-center '><BsFillClockFill className='text-md text-blue-600 mr-3' /> Thursday</span>
          <div className='ml-[136px] w-80'>Time: <span className='text-blue-400'>8.00 - 20.00</span></div>
        </div>
        <div className='flex flex-row items-center mx-3 mt-3 '>
          <span className='flex flex-row items-center '><BsFillClockFill className='text-md text-blue-600 mr-3' /> Friday</span>
          <div className='ml-[160px] w-80'>Time: <span className='text-blue-400'>8.00 - 20.00</span></div>
        </div>
        <div className='flex flex-row items-center mx-3 mt-3 '>
          <span className='flex flex-row items-center '><BsFillClockFill className='text-md text-blue-600 mr-3' /> Saturday</span>
          <div className='ml-[140px] w-80'>Time: <span className='text-blue-400'>8.00 - 20.00</span></div>
        </div>
        <div className='flex flex-row items-center mx-3 mt-3 mb-3 '>
          <span className='flex flex-row items-center '><BsFillClockFill className='text-md text-blue-600 mr-3' /> Sunday</span>
          <div className='ml-[150px]'>Time: <span className='text-blue-400'>8.00 - 20.00</span></div>
        </div>
        
      </div>
      <div>right</div>
  </div>
  )
}

export default TimeTable