import React from 'react';
import logo from '../assets/logo3.jpg'

const MainPage = () => {
  return (
	  <div className='grid grid-cols-5 grid-flow-row-dense '>
		  <div className='bg-white-500 h-screen w-75 flex-shrink-0 '>
			  <div className='flex  my-1 border-b-2 border-gray-400'>
				  <img src={logo} alt='logo' height='54' width='64' className='ml-2 cursor-pointer' />
				  <h3 className='text-2xl text-gray-800 font-bold pt-3 pl-1 cursor-pointer'>Doctris</h3>
			  </div>
		  </div>
		  <div className='bg-blue-700 col-span-4 w-autoS'>mainpage</div>
	</div>
  )
}

export default MainPage