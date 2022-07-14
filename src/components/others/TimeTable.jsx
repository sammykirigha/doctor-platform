import React from "react";
import { BsFillClockFill, BsTelephone } from "react-icons/bs";
import {HiOutlineMail} from 'react-icons/hi'

const TimeTable = () => {
    return (
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row mb-5">
            <div className="sm:w-[100%] sm:mt-5 md:w-[100%] lg:w-[40%] border shadow-sm rounded-md  pt-3">
                <div className="flex flex-row  mx-3 ">
                    <span className="flex flex-row items-center ">
                        <BsFillClockFill className="text-md text-blue-600  mr-3" />{" "}
                        Monday
                    </span>
                    <div className="sm:ml-auto sm:w-auto ml-auto w-auto ">
                        Time:{" "}
                        <span className="text-blue-400">8.00 - 20.00</span>
                    </div>
                </div>
                <div className="flex flex-row items-center mx-3 mt-3">
                    <span className="flex flex-row items-center ">
                        <BsFillClockFill className="text-md text-blue-600 mr-3" />{" "}
                        Tuesday
                    </span>
                    <div className=" sm:ml-auto sm:w-auto ml-auto w-auto">
                        Time:{" "}
                        <span className="text-blue-400">8.00 - 20.00</span>
                    </div>
                </div>
                <div className="flex flex-row items-center mx-3 mt-3 ">
                    <span className="flex flex-row items-center ">
                        <BsFillClockFill className="text-md text-blue-600 mr-3" />{" "}
                        Wednesday
                    </span>
                    <div className=" sm:ml-auto sm:w-auto ml-auto w-auto">
                        Time:{" "}
                        <span className="text-blue-400">8.00 - 20.00</span>
                    </div>
                </div>
                <div className="flex flex-row items-center mx-3 mt-3 ">
                    <span className="flex flex-row items-center ">
                        <BsFillClockFill className="text-md text-blue-600 mr-3" />{" "}
                        Thursday
                    </span>
                    <div className=" sm:ml-auto sm:w-auto ml-auto w-auto">
                        Time:{" "}
                        <span className="text-blue-400">8.00 - 20.00</span>
                    </div>
                </div>
                <div className="flex flex-row items-center mx-3 mt-3 ">
                    <span className="flex flex-row items-center ">
                        <BsFillClockFill className="text-md text-blue-600 mr-3" />{" "}
                        Friday
                    </span>
                    <div className=" sm:ml-auto sm:w-auto ml-auto w-auto">
                        Time:{" "}
                        <span className="text-blue-400">8.00 - 20.00</span>
                    </div>
                </div>
                <div className="flex flex-row items-center mx-3 mt-3 ">
                    <span className="flex flex-row items-center ">
                        <BsFillClockFill className="text-md text-blue-600 mr-3" />{" "}
                        Saturday
                    </span>
                    <div className=" sm:ml-auto sm:w-auto ml-auto w-auto">
                        Time:{" "}
                        <span className="text-blue-400">8.00 - 20.00</span>
                    </div>
                </div>
                <div className="flex flex-row items-center mx-3 mt-3 mb-3 ">
                    <span className="flex flex-row items-center ">
                        <BsFillClockFill className="text-md text-blue-600 mr-3" />{" "}
                        Sunday
                    </span>
                    <div className=" sm:ml-auto sm:w-auto ml-auto w-auto">
                        Time:{" "}
                        <span className="text-blue-400">8.00 - 20.00</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-col sm:gap-y-5 sm:gap-x-5 md:ml-3 md:flex-row lg:flex-row justify-between flex-1 mt-5">
                <div className="sm:ml-0 border flex flex-col py-4 items-center rounded-md">
                    <div className="flex flex-col sm:ml-10 md:ml-10 ">
                        <span className="h-[60px] w-[60px] bg-blue-100 rounded-md flex items-center justify-center">
                            <BsTelephone className="text-2xl text-blue-800 font-bold" />
                        </span>
                        <span className="text-lg text-slate-900 font-bold hover:text-blue-600 mt-4">
                            Phone
                        </span>
                    </div>

                    <div className="flex flex-col justify-center">
                        <p className="text-lg text-slate-900 opacity-40 mx-3">
                            Great doctor if you need your family member to get
                            effective immediate assistance
                        </p>
                        <span className="text-md text-blue-500 mx-auto mt-5">
                            +152 534-468-854
                        </span>
                    </div>
                </div>

                <div className="sm:0 mt-3 sm:mt-0 border flex flex-col py-4 items-center rounded-md">
                    <div className="flex flex-col">
                        <span className="h-[60px] w-[60px] bg-blue-100 rounded-md flex items-center justify-center">
                            <HiOutlineMail className="text-2xl text-blue-800 font-bold" />
                        </span>
                        <span className="text-lg text-slate-900 font-bold hover:text-blue-600 mt-4">
                            Email
                        </span>
                    </div>

                    <div className="flex flex-col justify-center">
                        <p className="text-lg text-slate-900 opacity-40 mx-3">
                            Great doctor if you need your family member to get effective immediate assistance
                        </p>
                        <span className="text-md text-blue-500 mx-auto mt-5">
                            contact@example.com
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeTable;
