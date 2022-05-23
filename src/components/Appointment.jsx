import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import flag from "../assets/Flag-Kenya.jpg";

const Appointment = () => {
    return (
        <div className="bg-white rounded-md w-[100%] mt-5">
			<div className="bg-white rounded-md">
				<div className="flex flex-row items-center justify-between border-b">
                    <div className="flex flex-row items-center my-5 mx-5">
                        <AiOutlineCalendar className="text-blue-400 h-6 w-6" />
                        <span className="text-gray-900 font-semibold ml-2">Latest Appointment</span>
                    </div>
                    <span className="mr-5 text-gray-600 font-semibold">55 Patients</span>
				</div>
                
                <div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center justify-start">
                            <img
                                src={flag}
                                alt="logo"
                                className="m-2 w-5 h-5 rounded-full cursor-pointer"
                            />
                            <div className="flex flex-col ml-4">
                                <h2>Calvin Carlo</h2>
                                <p>Booking on 27th Nov, 2020</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <AiOutlineCalendar />
                            <AiOutlineCalendar />
                        </div>
					</div>
					<div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center justify-start">
                            <img
                                src={flag}
                                alt="logo"
                                className="m-2 w-5 h-5 rounded-full cursor-pointer"
                            />
                            <div className="flex flex-col ml-4">
                                <h2>Calvin Carlo</h2>
                                <p>Booking on 27th Nov, 2020</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <AiOutlineCalendar />
                            <AiOutlineCalendar />
                        </div>
					</div>
					<div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center justify-start">
                            <img
                                src={flag}
                                alt="logo"
                                className="m-2 w-5 h-5 rounded-full cursor-pointer"
                            />
                            <div className="flex flex-col ml-4">
                                <h2>Calvin Carlo</h2>
                                <p>Booking on 27th Nov, 2020</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <AiOutlineCalendar />
                            <AiOutlineCalendar />
                        </div>
					</div>
					<div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center justify-start">
                            <img
                                src={flag}
                                alt="logo"
                                className="m-2 w-5 h-5 rounded-full cursor-pointer"
                            />
                            <div className="flex flex-col ml-4">
                                <h2>Calvin Carlo</h2>
                                <p>Booking on 27th Nov, 2020</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <AiOutlineCalendar />
                            <AiOutlineCalendar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
