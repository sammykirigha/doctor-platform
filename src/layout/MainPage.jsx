import React from 'react'

const MainPage = () => {
  return (
	  <div className='grid grid-cols-4 grid-flow-row-dense '>
		  <div className='bg-red-500 h-screen w-75 flex-shrink-0'>sidebar</div>
		  <div className='bg-blue-700 col-span-3 w-autoS'>mainpage</div>
	</div>
  )
}

export default MainPage