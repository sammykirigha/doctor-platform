import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { GET_APPOINTMENTS_BY_DATE } from "../queries/appointments";
import { getAppointmentsByDate } from "../state/actions/appointments";
import { useDispatch, useSelector } from "react-redux";

const SingleAppointment = () => {
    const param = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [appointment, setAppointment] = useState({})
    

    useEffect(() => {
        const fetchAppointment = async () => {
            const inputValue = {
                id: {
                   eq: param.appointmentId
                },
               
            };

            const details = {
                query: GET_APPOINTMENTS_BY_DATE,
                variables: {
                    filters: inputValue,
                },
            };
            let res = await dispatch(getAppointmentsByDate(details));
            setAppointment(res?.payload?.appointments[0])
        };

        fetchAppointment();
    }, [dispatch, param.appointmentId]);

    console.log("appointment", appointment);

    return (
        <div className="ml-10 ">
            <div className="">
                <span onClick={() => navigate(-1)}>
                    {" "}
                    <BsArrowLeftCircleFill className="text-blue-600 h-10 w-10 cursor-pointer" />{" "}
                </span>
            </div>
            <div className="mt-10 mx-10 bg-white flex items-center justify-evenly flex-col ">
                <div className="mt-7">
                    <h2 className="text-xl leading-9 font-[600] my-3">
                        Your Appointment Information
                    </h2>
                </div>
                <div className=" pt-5 items-center ">
                    <div className="flex pt-5 items-center ">
                        <div className="">
                            <div className=" ">
                                <span className="text-xl leading-9 font-[600] my-3">
                                    Fullnames:{" "}
                                    <span className="text-lg leading-7 font-[400]">
                                        Samuel Kirigha
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span className="text-xl leading-9 font-[600] my-3">
                                    Phone:{" "}
                                    <span className="text-lg leading-7 font-[400]">
                                        0707564356
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span className="text-xl leading-9 font-[600] my-3">
                                    Appointment Date:{" "}
                                    <span className="text-lg leading-7 font-[400]">
                                        12/12/2022
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span className="text-xl leading-9 font-[600] my-3">
                                    Doctors Email:{" "}
                                    <span className="text-lg leading-7 font-[400]">
                                        nvdblkjferil@gmail.com
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span className="text-xl leading-9 font-[600] my-3">
                                    Doctors Name:{" "}
                                    <span className="text-lg leading-7 font-[400]">
                                        John Katua
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span className="text-xl leading-9 font-[600] my-3">
                                    Appointment Type:{" "}
                                    <span className="text-lg leading-7 font-[400]">
                                        Back pain
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="ml-28">
                            <div className="">
                                <span className="text-xl leading-9 font-[600] my-3">
                                    age:{" "}
                                    <span className="text-lg leading-7 font-[400]">
                                        87
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span className="text-xl leading-9 font-[600] my-3">
                                    Email:{" "}
                                    <span className="text-lg leading-7 font-[400]">
                                        dkirigha18@gmail.com
                                    </span>{" "}
                                </span>
                            </div>
                            <div>
                                <span className="text-xl leading-9 font-[600] my-3">
                                    Time:{" "}
                                    <span className="text-lg leading-7 font-[400]">
                                        30:40PM
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span className="text-xl leading-9 font-[600] my-3">
                                    Department:{" "}
                                    <span className="text-lg leading-7 font-[400]">
                                        Urologist
                                    </span>{" "}
                                </span>
                            </div>
                            <div>
                                <span className="text-xl leading-9 font-[600] my-3">
                                    Doctors Phone Number:{" "}
                                    <span className="text-lg leading-7 font-[400]">
                                        00998767583
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span className="text-xl leading-9 font-[600] my-3">
                                    Appointment Charges:{" "}
                                    <span className="text-lg leading-7 font-[400]">
                                        1500
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                         <div className="flex items-center ">
                                <span className="text-xl leading-9 font-[600] my-3">
                                    Reasons for Appointment:{" "}
                                    <span className="text-lg leading-7 font-[400]">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </span>
                                </span>
                            </div>
                    </div>
                </div>
            </div>
            <button className="ml-10 mt-10 py-2 px-4 text-lg text-white rounded-md bg-blue-700">Update?</button>
        </div>
    );
};

export default SingleAppointment;
