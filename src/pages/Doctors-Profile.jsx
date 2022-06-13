import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, Outlet, useLocation } from "react-router-dom";
import image1 from "../data/images/01.jpg";

const DoctorsProfile = () => {
    const params = useLocation();
    const firstName = params.pathname.split("/")[1];
    const secondName = params.pathname.split("/")[2];
    return (
        <div className="mx-5 min-h-screen">
            <div className="flex flex-row items-center justify-between">
                <h4 className="text-lg text-slate-900 font-semibold">
                    Docto's Profile & Settings
                </h4>
                <div>
                    <p className="paragraph inline-flex items-center justify-between text-md uppercase text-md ">
                        Docris{" "}
                        <RiArrowRightSLine className="flex items-center mx-2 mt-0.5" />{" "}
                        <span className="text-blue-700 text-md">
                            {firstName.toUpperCase()}
                        </span>{" "}
                        <RiArrowRightSLine className="flex items-center mx-2 mt-0.5" />{" "}
                        <span className="text-blue-700 text-md">
                            {secondName.toUpperCase()}
                        </span>{" "}
                    </p>
                </div>
            </div>
            <div className="w-full mt-5 h-screen bg-white ">
                <div className="bg-blue-500 h-[100px] rounded-t-md relative"></div>
                <div className="ml-5 flex flex-row bt-white absolute top-48">
                    <img
                        src={image1}
                        height="100px"
                        width="100px"
                        className="rounded-full drop-shadow-lg"
                        alt="doc"
                    />
                </div>
                <div className="flex flex-col ml-[140px]">
                    <h3 className="text-lg text-slate-900 font-semibold">
                        Dr. Calvin Carlo
                    </h3>
                    <apn className="text-md text-gray-500">Orthopedic</apn>
                </div>
                <div className=" flex flex-col mt-7 mx-5">
                    <div className=" h-[50px] bg-gray-200 rounded-md  flex flex-row items-center justify-between">
                        <Link
                            to="overview"
                            className="text-lg text-slate-500 cursor-pointer hover:bg-blue-700 hover:text-white h-full w-[20%] text-center py-2 rounded-l-md"
                        >
                            Overview
                        </Link>
                        <Link
                            to="experience"
                            className="text-lg text-slate-500 cursor-pointer hover:bg-blue-700 hover:text-white h-full w-[20%] text-center py-2 "
                        >
                            Experience
                        </Link>
                        <Link
                            to="reviews"
                            className="text-lg text-slate-500 cursor-pointer hover:bg-blue-700 hover:text-white h-full w-[20%] text-center py-2 "
                        >
                            Reviews
                        </Link>
                        <Link
                            to="time-table"
                            className="text-lg text-slate-500 cursor-pointer hover:bg-blue-700 hover:text-white h-full w-[20%] text-center py-2 "
                        >
                            Time Table
                        </Link>
                        <Link
                            to="settings"
                            className="text-lg text-slate-500 cursor-pointer hover:bg-blue-700 hover:text-white h-full w-[20%] text-center py-2 rounded-r-md"
                        >
                            Settings
                        </Link>
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsProfile;
