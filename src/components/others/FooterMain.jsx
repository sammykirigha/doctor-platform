import React from "react";
import logo from "../../data/images/logo3.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const FooterMain = () => {
    return (
        <div className="bg-[#202942]">
            <div className="bg-[#202942] pl-3 mt-8 pt-5 sm:pt-5 md:pt-5  h-[auto] w-full
		 grid sm:grid-cols-2 sm:items-start md:grid-cols-3 md:items-start md:justify-evenly lg:pt-5 lg:px-16 lg:grid-cols-4 lg:items-start lg:justify-evenly">
            <div className="flex flex-col sm:ml-5 md:ml-10 lg:ml-0 -md:mt-10 ">
                <div className="flex flex-row items-center mt-3">
                    <img
                        src={logo}
                        alt="logo"
                        height={"40"}
                        width={"40"}
                        className="rounded-full"
                    />
                    <span className="text-gray-100 text-3xl ml-3">Doctris</span>
                </div>
                <p className="text-gray-100 text-lg w-[auto] mt-5">
                    Great doctor if you need your family member to get effective
                    immediate assistance, emergency treatment or a simple
                    consultation.
                </p>
            </div>
            <div className="flex flex-col sm:ml-5 md:pt-0 md:mt-0 md:ml-20 lg:ml-20 ">
                <h3 className="text-gray-100 mb-1 mt-3 text-xl">Company</h3>
                {[
                    "About us",
                    "Services",
                    "Team",
                    "Project",
                    "Blog",
                    "Login",
                ].map((item) => {
                    return (
                        <div className="flex flex-row items-center text-gray-100 pt-2 text-lg">
                            <IoMdArrowDropright />
                            <span>{item}</span>
                        </div>
                    );
                })}
            </div>

            <div className="flex flex-col sm:mt-10 sm:ml-5 md:pt-0 md:mt-0 md:ml-10 md:mr-0">
                <h3 className="text-gray-100 mb-1 mt-3 text-xl ">Departments</h3>
                {[
                    "Eye Care",
                    "Psychotherapy",
                    "Dental Care",
                    "Orthopedic",
                    "Cardiology",
                    "Gynecology",
                    "Neurology",
                ].map((item) => {
                    return (
                        <div className="flex flex-row items-center text-gray-100 pt-2 text-lg">
                            <IoMdArrowDropright />
                            <span>{item}</span>
                        </div>
                    );
                })}
            </div>

            <div className="flex flex-col sm:ml-5 sm:mt-10 md:mt-10  lg:mt-0">
                <h3 className="text-gray-100 mb-1 mt-3 text-xl">Contact us</h3>
                <div className="flex flex-row items-center text-gray-100 text-lg">
                    <AiOutlineMail className="mr-2 mt-1" />
                    <span>contact@example.com</span>
                </div>
                <div className="flex flex-row items-center text-gray-100 text-lg">
                    <AiOutlinePhone className="mr-2 mt-1" />
                    <span>+152 534-468-854</span>
                </div>
                <div className="flex flex-row items-center text-gray-100 text-lg">
                    <GoLocation className="mr-2 mt-1" />
                    <span>View on Google map</span>
                </div>
            </div>
            </div>
            <div className=" mx-20 my-10 border-t pt-3 flex flex-col  sm:flex-col sm:items-center sm:justify-between md:flex-row  md:items-center md:justify-between lg:flex-row lg:items-center lg:justify-between ">
                <p className="text-gray-100 text-lg">2022 @ Dorcis. Designed by Dorcis kirigha</p>
                <div className="flex flex-row items-center justify-between sm:mt-8 md:flex-row  md:items-center md:justify-between md:mt-0 lg:mt-0">
                    <span className="text-gray-100 text-lg mr-2">Terms</span>
                    <span className="text-gray-100 text-lg mr-2">Privacy</span>
                    <span className="text-gray-100 text-lg mr-2">About</span>
                    <span className="text-gray-100 text-lg mr-2">Contact</span>
                </div>
            </div>
        </div>
		
    );
};

export default FooterMain;
