import React from "react";
import Modal from "../common/Modal";
import { IoMdClose } from "react-icons/io";

const AppointmentModal = ({ isOpen, closeModal }) => {
    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            positionY="top"
            width={600}
        >
            <div className="rounded-md bg-white flex flex-col w-[650px]">
                <div className="flex flex-row mx-2 pb-5 items-center justify-between border-b border-gray-300">
                    <h2 className="text-lg font-bold text-gray-600 uppercase">
                        Book an Appointment
                    </h2>
                    <span>
                        {" "}
                        <IoMdClose className="h-8 w-8 cursor-pointer" />{" "}
                    </span>
                </div>
                <div className="w-full mt-4">
                    <h4 className="text-gray-500 mb-2 ">Patient Name</h4>
                    <input
                        placeholder="Patient Name:"
                        className="w-ful"
                        type="text"
                    />
                </div>
                <div className="w-full mt-4 flex flex-row items-center justify-between">
                    <div>
                        <h4 className="text-gray-500 mb-2 ">Departments</h4>
                        <input
                            type="text"
                            placeholder="Department name:"
                            className="w-[200px]"
                        />
                    </div>
                    <div>
                        <h4 className="text-gray-500 mb-2 ">Doctor</h4>
                        <input
                            type="text"
                            placeholder="Doctor's Name:"
                            className="w-[200px]"
                        />
                    </div>
                    <div>
                        <h4 className="text-gray-500 mb-2 ">Your Email</h4>
                        <input
                            type="email"
                            placeholder="Enter your emeil:"
                            className="w-[200px]"
                        />
                    </div>
                </div>
                <div className="w-full mt-4 flex flex-row items-center justify-between">
                    <div>
                        <h4 className="text-gray-500 mb-2 ">Your Phone :</h4>
                        <input
                            type="text"
                            placeholder="Your Phone:"
                            className="w-[200px]"
                        />
                    </div>
                    <div>
                        <h4 className="text-gray-500 mb-2 ">Date :</h4>
                        <input
                            type="date"
                            placeholder="Doctor's Name:"
                            className="w-[200px]"
                        />
                    </div>
                    <div>
                        <h4 className="text-gray-500 mb-2 ">Time :</h4>
                        <input
                            type="time"
                            placeholder="Enter your emeil:"
                            className=" w-[200px]"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <h4 className="text-gray-500 mb-2 ">Comments</h4>
                    <textarea
                        type="text"
                        placeholder="Enter your comment:"
                        className="w-full h-[100px] placeholder:italic placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border focus:outline-none"
                    />
                </div>
               <button className="btn">Book An Appointment</button>
            </div>
        </Modal>
    );
};

export default AppointmentModal;
