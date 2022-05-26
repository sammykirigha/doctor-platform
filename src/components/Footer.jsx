import React, { useContext } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { NavigationContext } from '../navigation.context';

const Footer = () => {
	const { sideBarOpen, toggleSidebar } = useContext(NavigationContext);
  return (
	  <div className={`w-full bg-white-600 border-t border-gray-200 ${sideBarOpen ? "pl-[300px]" : "pl-1"}`}>
		  <p className='text-gray-400 font-semibold h-16 px-2 text-lg inline-flex items-center'>{ new Date().getFullYear()} @ Dorcis. Design with <span className='mx-[5px] mt-[6px]'><AiFillHeart className='text-red-400 ' /></span> by SamuelKirigha </p>
	</div>
  )
}

export default Footer