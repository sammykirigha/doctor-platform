import React, { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import image1 from "../../data/images/01.jpg";
import { GoPrimitiveDot } from "react-icons/go";
import  AvailableDoctors  from "../doctors/Doctors";
import ChatMessages from "../../components/others/ChatMessages";

const Chat = () => {
    const [user, setUser] = useState({});
    const params = useLocation();
    const firstName = params.pathname.split("/")[1];
    const secondName = params.pathname.split("/")[2];

    useEffect(() => {
        setUser({
            name: "Dr. Calvin Carlo",
            department: "Orthopedic",
            image: image1,
            experirnce: "1 Years Experienced",
        });
    }, []);

    return (
        <div className="mx-5 min-h-screen">
            <div className="flex flex-row items-center justify-between">
                <h4 className="text-lg text-slate-900 font-semibold">
                    Chatbox
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
                <div className="w-[30%] bg-white border rounded-md flex flex-col items-center justify-center">
                    <div className=" border-b w-full">
                        <div className="flex flex-col items-center pb-6">
                            <span className="rounded-full h-24 w-24 flex items-center border border-gray-100 ">
                                <img
                                    src={user.image}
                                    alt="user"
                                    className="h-16 w-16 rounded-2xl ml-2"
                                />
                            </span>
                            <div className="flex flex-col items-center">
                                <span className="text-xl text-slate-900 font-bold opacity-90">
                                    {user.name}
                                </span>
                                <span className="textmd text-gray-400">
                                    {user.department}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="slim-scrollbar overflow-y-auto h-[400px] w-full pt-3 pr-3">
                        {AvailableDoctors.map((doc) => {
                            return (
                                <div className="flex flex-row items-center mx-3 w-full border mb-3 rounded-md bg-blue-50 pb-3 cursor-pointer">
                                    <div className=" mt-3 ml-4 relative h-12 w-12 bg-blue-100 flex items-center justify-center rounded-full ">
                                        <img
                                            src={doc.image}
                                            alt="logo"
                                            className="m-2 w-12 h-12 rounded-full cursor-pointer "
                                        />
                                        <span className="absolute -top-2 right-7">
                                            <GoPrimitiveDot className="text-green-700 h-6 w-6 " />{" "}
                                        </span>
                                    </div>
                                    <div className="flex flex-row items-center ml-3 mt-5 mb-2">
                                        <div className="mr-auto">
                                            <span className="text-sm text-slate-900 font-bold">
                                                {doc.name}
                                            </span>
                                            <p className="text-sm text-gray-500">
                                                Hey, How are you sir?
                                            </p>
                                        </div>
                                        <span className="ml-24 text-gray-400">
                                            10 Min
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <ChatMessages width={"100%"} height={"500px"} />
            </div>
        </div>
    );
};

export default Chat;
