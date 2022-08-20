import React from 'react'
import { TiSocialLinkedin, TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";


const DoctorsList = ({doctors}) => {
  return (
	<div className="pl-2">
                 {doctors?.map((doc, index) => {
                    return (
                        <div
                            key={index}
                            className="drop-shadow-md rounded-md bg-white flex flex-col items-center shadow-lg group w-full my-3 "
                        >
                            <div className="flex items-center my-auto h-[200px] px-3">
                                <img src={doc.image} alt="doc" style={{height: "90%", width: "90%"}} className="relative ml-5 rounded-md" />
                                <div className='hidden group-hover:flex flex-col absolute left-2 gap-2'  >
                                        <span className="h-10 w-10 opacity-70 drop-shadow-md rounded-full border border-gray-300 bg-blue-100 flex items-center justify-center cursor-pointer group hover:bg-blue-600 "><TiSocialFacebook className=" text-blue-900"  /></span>
										<span className="h-10 w-10 opacity-70 drop-shadow-md rounded-full border border-gray-300 bg-blue-100 flex items-center justify-center cursor-pointer group hover:bg-blue-600 "><TiSocialLinkedin className=" text-blue-900 "   /></span>
										<span className="h-10 w-10 opacity-70 drop-shadow-md rounded-full border border-gray-300 bg-blue-100 flex items-center justify-center cursor-pointer group hover:bg-blue-600 "><TiSocialTwitter className=" text-blue-900" /></span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center px-3 h-24 group-hover:bg-blue-500 group w-full ">
                                <span className="text-black-900 font-bold group-hover:bg-blue-500 group-hover:text-white">
                                    {doc.firstname} {doc.lastname}
                
                                </span>
                                <span className="text-gray-500 group-hover:bg-blue-500 group-hover:text-gray-200">
                                    {doc.specialization}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
  )
}

export default DoctorsList