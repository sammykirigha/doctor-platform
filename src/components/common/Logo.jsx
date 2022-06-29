import React from 'react'
import logo from "../../data/images/logo3.jpg";

const Logo = () => {
  return (
	<div className="bg-white-900 flex  my-1 border-gray-200 h-35">
                <img
                    src={logo}
                    alt="logo"
                    height="54"
                    width="64"
                    className="ml-2 cursor-pointer"
                />
                <h3 className="text-2xl text-gray-800 font-bold pt-3 pl-1 cursor-pointer">
                    Doctris
                </h3>
		</div>
  )
}

export default Logo