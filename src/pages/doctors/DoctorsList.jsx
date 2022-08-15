import React from 'react'
import { FiTwitter, FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";


const DoctorsList = ({AvailableDoctors}) => {
  return (
	<div className="bg-gray-50 grid  sm:grid-cols-2 gap-y-16 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-3 mt-5 mx-4">
                {AvailableDoctors?.map((doc, index) => {
                    return (
                        <div
                            key={index}
                            className="drop-shadow-md rounded-md bg-white flex flex-col overflow-hidden shadow-lg group"
                        >
                            <div className="flex items-center">
                                <img src={doc.image} alt="doc" height='100%' width='100%' className="relative" />
                                <div className='hidden group-hover:flex flex-col absolute left-2 gap-2'>
                                        <span className="h-10 w-10 opacity-70 drop-shadow-md rounded-full border border-gray-300 bg-blue-100 flex items-center justify-center cursor-pointer group hover:bg-blue-600 "><FiFacebook className=" text-blue-900 group-hover:text-white"  /></span>
										<span className="h-10 w-10 opacity-70 drop-shadow-md rounded-full border border-gray-300 bg-blue-100 flex items-center justify-center cursor-pointer group hover:bg-blue-600 "><FiLinkedin className=" text-blue-900"  /></span>
										<span className="h-10 w-10 opacity-70 drop-shadow-md rounded-full border border-gray-300 bg-blue-100 flex items-center justify-center cursor-pointer group hover:bg-blue-600 "><FiGithub className=" text-blue-900" /></span>
										<span className="h-10 w-10 opacity-70 drop-shadow-md rounded-full border border-gray-300 bg-blue-100 flex items-center justify-center cursor-pointer group hover:bg-blue-600 "><FiTwitter className=" text-blue-900" /></span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center px-3 h-24 group-hover:bg-blue-500 group ">
                                <span className="text-black-900 font-bold group-hover:bg-blue-500 group-hover:text-white">
                                    {doc.name}
                                </span>
                                <span className="text-gray-500 group-hover:bg-blue-500 group-hover:text-gray-200">
                                    {doc.department}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
  )
}

export default DoctorsList