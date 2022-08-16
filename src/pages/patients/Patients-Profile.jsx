//Dependencies
import { BsPerson, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { GiMedicalDrip } from "react-icons/gi"
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { NavLink, Outlet, useLocation, useNavigate, } from "react-router-dom";
import { useSelector } from "react-redux";
//Components
import ProgressBar from "../../components/common/ProgressBar";
import image1 from "../../data/images/01.jpg";
import useFetchPatient from "../../hooks/useFetchPatients";

const PatientsProfile = () => {
 const { patient } = useSelector((state) => state.patient)

    const params = useLocation();
    const navigate = useNavigate();


    const firstName = params.pathname.split("/")[1];
    const secondName = params.pathname.split("/")[2];

    useFetchPatient()

    return (
        <div className="mx-4 min-h-screen">
            <div className="flex flex-row items-center justify-between mt-3">
                <h3 className="text-lg text-slate-900 font-bold">
                    Patient Profile
                </h3>
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
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row w-full gap-4  justify-between">
                <div className="w-[100%] sm:w-[100%] md:w-[30%] bg-white rounded-md flex-none grow-0 h-[650px]">
                    <div className="border-b rounded-t-md">
                        <div className="bg-blue-600 h-[80px] relative rounded-t-md"></div>
                        <div className="ml-16 flex flex-row bt-white absolute top-[155px]">
                            <img
                                src={patient?.image}
                                className="h-24 w-24 rounded-full drop-shadow-lg"
                                alt="doc"
                            />
                        </div>
                        <div className="flex flex-col mt-[110px] ml-16">
                            <h3 className="text-lg text-slate-900 font-semibold">
                                 {patient?.firstname} {patient?.lastname}
                            </h3>
                            <apn className="text-md text-gray-500">
                                {/* provide the age property */}
                                25 Years
                            </apn>
                        </div>
                    </div>
                    <div className="my-8 mx-2">
                        <ProgressBar
                            bgcolor={"#2074fa"}
                            progress={85}
                            height={15}
                        />
                        <div className="flex flex-col mt-5 gap-3 ">
                            <div className="flex flex-row items-center  ">
                                <BsPerson className="text-lg text-blue-600 " />
                                <span className="text-md uppercase text-slate-900 font-bold opacity-90 mx-3">
                                    Gender
                                </span>
                                <span className="text-md text-gray-600">
                                    Female
                                </span>
                            </div>
                            <div className="flex flex-row items-center  ">
                                <AiOutlineMail className="text-lg text-blue-600 " />
                                <span className="text-md uppercase text-slate-900 font-bold opacity-90 mx-3">
                                    Birthday
                                </span>
                                <span className="text-md text-gray-600">
                                    19th January 1995
                                </span>
                            </div>
                            <div className="flex flex-row items-center  ">
                                <BsTelephone className="text-lg text-blue-600 " />
                                <span className="text-md uppercase text-slate-900 font-bold opacity-90 mx-3">
                                    Phone No.
                                </span>
                                <span className="text-md text-gray-600">
                                    +(254) 707256013
                                </span>
                            </div>
                            <div className="flex flex-row items-center  ">
                                <FaRegAddressCard className="text-lg text-blue-600 " />
                                <span className="text-md uppercase text-slate-900 font-bold opacity-90 mx-3">
                                    Address
                                </span>
                                <span className="text-md text-gray-600">
                                    Nyeri, Kenya
                                </span>
                            </div>
                            <div className="flex flex-row items-center  ">
                                <GiMedicalDrip className="text-lg text-blue-600 " />
                                <span className="text-md uppercase text-slate-900 font-bold opacity-90 mx-3">
                                    Blood Group
                                </span>
                                <span className="text-md text-gray-600">
                                    B +
                                </span>
                            </div>
                             <div className="flex flex-row items-center  ">
                                <GiMedicalDrip className="text-lg text-blue-600 " />
                                <span className="text-md uppercase text-slate-900 font-bold opacity-90 mx-3">
                                    Age
                                </span>
                                <span className="text-md text-gray-600">
                                    30
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] sm:w-[100%] md:w-[70%] bg-white flex-grow rounded-md">
                    <div className="flex flex-row items-center w-full justify-between border-b h-[60px]">
                        <NavLink
                            to="profile"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-lg text-white tracking-wider font-medium flex items-center justify-center bg-blue-600 w-[50%]  cursor-pointer h-full text-center  rounded-l-md"
                                    : "text-lg text-slate-500 font-medium flex items-center justify-center w-[50%] cursor-pointer h-full  text-center rounded-l-md"
                            }
                        >
                            Profile
                        </NavLink>
                        <NavLink
                            to="settings"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-lg text-white tracking-wider font-medium flex items-center justify-center bg-blue-600 w-[50%]  cursor-pointer  h-full  text-center rounded-r-md"
                                    : "text-lg text-slate-500 font-medium flex items-center justify-center w-[50%] cursor-pointer h-full  text-center rounded-r-md"
                            }
                        >
                            Profile Settings
                        </NavLink>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default PatientsProfile;
