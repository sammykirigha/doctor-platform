import React from "react";
import { BsFillClockFill, BsTelephone } from "react-icons/bs";
import {HiOutlineMail} from 'react-icons/hi'

const TimeTable = () => {
    return (
        <div className="flex flex-row w-full mb-5">
            <div className=" border shadow-sm rounded-md w-[40%] pt-3">
                <div className="flex flex-row  mx-3 ">
                    <span className="flex flex-row items-center ">
                        <BsFillClockFill className="text-md text-blue-600  mr-3" />{" "}
                        Monday
                    </span>
                    <div className="ml-[140px]  w-80">
                        Time:{" "}
                        <span className="text-blue-400">8.00 - 20.00</span>
                    </div>
                </div>
                <div className="flex flex-row items-center mx-3 mt-3">
                    <span className="flex flex-row items-center ">
                        <BsFillClockFill className="text-md text-blue-600 mr-3" />{" "}
                        Tuesday
                    </span>
                    <div className="ml-[140px] w-80">
                        Time:{" "}
                        <span className="text-blue-400">8.00 - 20.00</span>
                    </div>
                </div>
                <div className="flex flex-row items-center mx-3 mt-3 ">
                    <span className="flex flex-row items-center ">
                        <BsFillClockFill className="text-md text-blue-600 mr-3" />{" "}
                        Wednesday
                    </span>
                    <div className="ml-[118px] w-80">
                        Time:{" "}
                        <span className="text-blue-400">8.00 - 20.00</span>
                    </div>
                </div>
                <div className="flex flex-row items-center mx-3 mt-3 ">
                    <span className="flex flex-row items-center ">
                        <BsFillClockFill className="text-md text-blue-600 mr-3" />{" "}
                        Thursday
                    </span>
                    <div className="ml-[134px] w-80">
                        Time:{" "}
                        <span className="text-blue-400">8.00 - 20.00</span>
                    </div>
                </div>
                <div className="flex flex-row items-center mx-3 mt-3 ">
                    <span className="flex flex-row items-center ">
                        <BsFillClockFill className="text-md text-blue-600 mr-3" />{" "}
                        Friday
                    </span>
                    <div className="ml-[157px] w-80">
                        Time:{" "}
                        <span className="text-blue-400">8.00 - 20.00</span>
                    </div>
                </div>
                <div className="flex flex-row items-center mx-3 mt-3 ">
                    <span className="flex flex-row items-center ">
                        <BsFillClockFill className="text-md text-blue-600 mr-3" />{" "}
                        Saturday
                    </span>
                    <div className="ml-[140px] w-80">
                        Time:{" "}
                        <span className="text-blue-400">8.00 - 20.00</span>
                    </div>
                </div>
                <div className="flex flex-row items-center mx-3 mt-3 mb-3 ">
                    <span className="flex flex-row items-center ">
                        <BsFillClockFill className="text-md text-blue-600 mr-3" />{" "}
                        Sunday
                    </span>
                    <div className="ml-[150px]">
                        Time:{" "}
                        <span className="text-blue-400">8.00 - 20.00</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between flex-1 mt-5">
                <div className="ml-5">
                    <div className="flex flex-col ml-32">
                        <span className="h-[60px] w-[60px] bg-blue-100 rounded-md flex items-center justify-center">
                            <BsTelephone className="text-2xl text-blue-800 font-bold" />
                        </span>
                        <span className="text-lg text-slate-900 font-bold hover:text-blue-600 mt-4">
                            Phone
                        </span>
                    </div>

                    <div className="flex flex-col justify-center">
                        <p className="text-lg text-slate-900 opacity-40">
                            Great doctor if you need your family member to get
                            effective immediate assistance
                        </p>
                        <span className="text-md text-blue-500 ml-20 mt-5">
                            +152 534-468-854
                        </span>
                    </div>
                </div>

                <div className="ml-5">
                    <div className="flex flex-col ml-32">
                        <span className="h-[60px] w-[60px] bg-blue-100 rounded-md flex items-center justify-center">
                            <HiOutlineMail className="text-2xl text-blue-800 font-bold" />
                        </span>
                        <span className="text-lg text-slate-900 font-bold hover:text-blue-600 mt-4">
                            Email
                        </span>
                    </div>

                    <div className="flex flex-col justify-center">
                        <p className="text-lg text-slate-900 opacity-40">
                            Great doctor if you need your family member to get effective immediate assistance
                        </p>
                        <span className="text-md text-blue-500 ml-20 mt-5">
                            contact@example.com
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeTable;
