import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineCheck } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import flag from "../../data/images/Flag-Kenya.jpg";

const Appointment = ({width}) => {
    return (
        <div className={`bg-white rounded-md w-[${width}%] min-h-[300px] mt-5 `}>
			<div className="bg-white rounded-md">
				<div className="flex flex-row items-center justify-between border-b">
                    <div className="flex flex-row items-center my-5 mx-5">
                        <AiOutlineCalendar className="text-blue-400 h-6 w-6" />
                        <span className="text-gray-900 font-semibold ml-2">Latest Appointment</span>
                    </div>
                    <span className="mr-5 text-gray-600 font-semibold">55 Patients</span>
				</div>
                
				<div className=" slim-scrollbar overflow-auto h-72 pb-3 ">
					{[1, 2, 3, 4, 5, 6, 7].map((item, i) => {
						return (
						<div className="flex flex-row items-center justify-between my-4 gap-2">
								<div className="flex flex-row items-center justify-start ml-4">
									<img
										src={flag}
										alt="logo"
										className=" w-8 h-8 rounded-full cursor-pointer"
									/>
									<div className="flex flex-col ml-2">
										<h2 className="text-gray-700 text-md font-semibold">Calvin Carlo</h2>
										<p className="text-gray-500 text-sm">Booking on 27th Nov, 2020</p>
									</div>
								</div>
								<div className="flex flex-row mr-1 mt-2">
									<span className=" mr-2 w-7 h-7 rounded-full bg-green-100 hover:bg-green-700 hover:text-white group cursor-pointer "><HiOutlineCheck className="  m-1 w-5 h-5  text-green-700 group-hover:text-white" /></span>
									<span className="w-7 h-7 rounded-full bg-orange-100 hover:bg-orange-700 hover:text-white group cursor-pointer"><IoMdClose className="m-1 w-5 h-5  text-orange-700 group-hover:text-white" /></span>
                           
								</div>
							</div>
					)
				})}
                </div>
            </div>
        </div>
    );
};

export default Appointment;
