import React, { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import ChatMessages from "../../components/others/ChatMessages";
import useFetchPatient from "../../hooks/useFetchPatients";
import { useSelector } from "react-redux";

const Chat = () => {
    const { patient } = useSelector((state) => state.patient);
    const params = useLocation();
    const firstName = params.pathname.split("/")[1];
    const secondName = params.pathname.split("/")[2];

    let activeClassName = {
        textDecoration: "underline",
    };

    useFetchPatient();

    return (
        <div className="mx-5 min-h-screen">
            <div className="flex flex-row items-center justify-between">
                <h4 className="text-lg text-slate-900 font-semibold">
                    Messgaes
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
            <div className="flex flex-row  justify-between w-full  mt-4 ">
                <div className="w-[45%] bg-white border rounded-md flex flex-col items-center justify-center">
                    <div className=" border-b w-full">
                        <div className="flex flex-col items-center pb-6">
                            <span className="rounded-full h-24 w-24 flex items-center border border-gray-100 ">
                                <img
                                    src={patient?.image}
                                    alt="user"
                                    className="h-16 w-16 rounded-2xl ml-2"
                                />
                            </span>
                            <div className="flex flex-col items-center">
                                <span className="text-xl text-slate-900 font-bold opacity-90">
                                    {patient?.firstname} {patient?.lastname}
                                </span>
                                <span className="textmd text-gray-400">
                                    {patient?.department}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="slim-scrollbar overflow-y-auto h-[400px] w-full pt-1">
                        <div className="flex flex-row items-center justify-around my-3 cursor-pointer shadow-xl">
                            <NavLink
                                to="chatts"
                                className={({ isActive }) =>
                                    isActive ? "underline " : " "
                                }
                            >
                                Chatts
                            </NavLink>
                            <NavLink
                                to="ready-to-chat"
                                className={({ isActive }) =>
                                    isActive ? "underline " : " "
                                }
                            >
                                Doctors
                            </NavLink>
                        </div>

                        <Outlet />
                    </div>
                </div>
                <ChatMessages width={"100%"} height={"500px"} />
            </div>
        </div>
    );
};

export default Chat;
