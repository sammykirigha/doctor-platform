import React from 'react';
import logo from '../assets/logo3.jpg';
import { sidebarOptionRoutes } from './sidebar-options-routes';


const MainPage = () => {
  return (
	  <div className='grid grid-cols-5 grid-flow-row-dense '>
		  <div className='bg-white-500 h-screen w-75 flex-shrink-0 border-r border-gray-100'>
			  <div className='bg-white-900 flex  my-1 border-b border-gray-200 h-35'>
				  <img src={logo} alt='logo' height='54' width='64' className='ml-2 cursor-pointer' />
				  <h3 className='text-2xl text-gray-800 font-bold pt-3 pl-1 cursor-pointer'>Doctris</h3>
			  </div>
			  <div className='pt-5'>
				  {
					  sidebarOptionRoutes?.map((option, index) => {
						  return (
							  <div key={index} className='ml-5 p-1.5 flex hover:text-blue-600 '>
								  <span className='h-8 justify-center rounded bg-gray-100 cursor-pointer'>{option.icon}</span>
								  <h4 className='cursor-pointer ml-2 text-l font-normal'>{ option.text}</h4>
							  </div>
						  )
					  })
				  }
			  </div>
		  </div>
		  <div className=' col-span-4 w-autoS'>mainpage</div>
	</div>
  )
}

export default MainPage