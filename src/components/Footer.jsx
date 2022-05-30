import React, { useContext } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { NavigationContext } from '../contexts/navigation.context';

const Footer = () => {
	const { sideBarOpen, toggleSidebar } = useContext(NavigationContext);
  return (
	  <div className={`w-full bg-gray-300 h-[70px] bg-white-600 border-t border-gray-200 ${sideBarOpen && "ml-[250px]"}`}>
		  <p className='text-gray-400 font-semibold  px-2 text-lg inline-flex items-center'>{ new Date().getFullYear()} @ Dorcis. Design with <span className='mx-[5px] mt-[6px]'><AiFillHeart className='text-red-400 ' /></span> by SamuelKirigha </p>
	</div>
  )
}

export default Footer