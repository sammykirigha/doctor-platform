import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

const Footer = () => {
  return (
	  <div className='w-full bg-white border-l border-gray-500'>
		  <p className='text-gray-900'>{ new Date().getFullYear()} @ Dorcis. Design with <AiFillHeart className='text-red-400' /> by SamuelKirigha </p>
	</div>
  )
}

export default Footer