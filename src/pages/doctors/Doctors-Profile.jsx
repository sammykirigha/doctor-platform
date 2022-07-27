import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import {  NavLink, Outlet, useLocation } from "react-router-dom";
import image1 from "../../data/images/01.jpg";
import { useSelector, useDispatch } from "react-redux/";
import { useEffect } from "react";
import { GET_DOCTOR_QUERY } from "../../queries/doctors";
import { getDoctorAction } from "../../state/actions/doctors.action";
import { useState } from "react";

const DoctorsProfile = () => {
    const { user } = useSelector((state) => state.auth);
    const [doctor, setDoctor] = useState({})

    const params = useLocation();
    const dispatch = useDispatch()

    const firstName = params.pathname.split("/")[1];
    const secondName = params.pathname.split("/")[2];

    useEffect(() => {
        if (user?.email) {
            const inputValues = {
                email: user?.email,
            };

            const details = {
                query: GET_DOCTOR_QUERY,
                variables: {
                    input: inputValues,
                },
            };

            const getDoctor = async () => {
                const { payload } = await dispatch(getDoctorAction(details));
                setDoctor(payload.doctor)
                return payload
            };
            getDoctor();

            
        }
    }, [user?.email, dispatch, setDoctor]);

    console.log('<<<<>>>>', doctor);
    return (
        <div className="mx-5 min-h-screen ">
            <div className="flex flex-col sm:flex-col sm:items-center sm:justify-between md:flex-row md:items-center md:justify-between lg:flex-row lg:items-center lg:justify-between">
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
            <div className="w-full mt-5  bg-white rounded-md">
                <div className="bg-blue-500 h-[100px] rounded-t-md relative"></div>
                <div className="ml-5 flex flex-row bt-white absolute top-48">
                    <img
                        src={doctor.image}
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
                    <div className=" flex flex-col sm:flex-col sm:items-center sm:justify-between sm:h-[auto] md:flex-row md:items-center md:justify-between md:h-[50px] md:w-[100%] bg-gray-200 rounded-md   ">
                        <NavLink
                            to=""
                            className={({ isActive }) =>
                                isActive
                                    ? " sm:h-full sm:w-[100%] md:w-[20%] text-lg text-slate-500 cursor-pointer  text-center py-2 rounded-l-md"
                                    : " sm:h-full sm:w-[100%] md:w-[20%] text-lg text-slate-500 cursor-pointer text-center py-2 rounded-l-md"
                            }
                        >
                            Overview
                        </NavLink>
                        <NavLink
                            to="experience"
                            className={({ isActive }) =>
                                isActive
                                    ? "sm:h-full sm:w-[100%] md:w-[20%] text-lg text-white cursor-pointer bg-blue-700   text-center py-2 "
                                    : "sm:h-full sm:w-[100%] md:w-[20%] text-lg text-slate-500 cursor-pointer text-center py-2 "
                            }
                        >
                            Experience
                        </NavLink>
                        <NavLink
                            to="reviews"
                            className={({ isActive }) =>
                                isActive
                                    ? "sm:h-full sm:w-[100%] md:w-[20%] text-lg text-white cursor-pointer bg-blue-700   text-center py-2 "
                                    : "sm:h-full sm:w-[100%] md:w-[20%] text-lg text-slate-500 cursor-pointer  text-center py-2 "
                            }
                        >
                            Reviews
                        </NavLink>
                        <NavLink
                            to="time-table"
                            className={({ isActive }) =>
                                isActive
                                    ? "sm:h-full sm:w-[100%] md:w-[20%] text-lg text-white cursor-pointer bg-blue-700  text-center py-2 "
                                    : "sm:h-full sm:w-[100%] md:w-[20%] text-lg text-slate-500 cursor-pointer  text-center py-2 "
                            }
                        >
                            Time Table
                        </NavLink>
                        <NavLink
                            to="settings"
                            className={({ isActive }) =>
                                isActive
                                    ? " sm:h-full sm:w-[100%] md:w-[20%] md:rounded-r-md text-lg text-white cursor-pointer bg-blue-700  text-center py-2"
                                    : " sm:h-full sm:w-[100%] md:w-[20%] md:rounded-r-md text-lg text-slate-500 cursor-pointer  text-center py-2 "
                            }
                        >
                            Settings
                        </NavLink>
                    </div>
                    <div className="mt-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsProfile;
