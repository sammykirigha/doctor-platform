import React from 'react'
import {MdOutlineRefresh} from 'react-icons/md'
const Inbox = () => {
  return (
	  <div className=' flex flex-col mt-5'>
		  <div className='flex flex-row items-center border-b pl-5 pb-7'>
			  <input type='checkbox' width='30px' height='30px' className="default:ring-2 mr-7 cursor-pointer" />
			  <MdOutlineRefresh className='text-2xl cursor-pointer text-gray-500' />
		  </div>
	</div>
  )
}

export default Inbox