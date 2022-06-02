import React from 'react'

const Button = ({text}) => {
  return (
	  <button className='button text-white bg-blue-500 hover:bg-blue-600 rounded-md p-3 w-auto '>
		  {text}
	</button>
  )
}

export default Button