import React from 'react'

const Button = ({text, onClick}) => {
  return (
	  <button onClick={onClick} className='button w-[200px] mt-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md py-3 px-6 '>
		  {text}
	</button>
  )
}

export default Button