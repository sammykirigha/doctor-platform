import React from "react";
import logo from "../data/images/logo3.jpg";
import { BsFillPersonFill, BsArrowRightShort, BsArrowRight } from "react-icons/bs";
const LandingPage = () => {
    return (
        <div>
            <div className="bg-blue-400 w-[100%] h-[750px] relative pt-56 pl-10">
                <img
                    src={logo}
                    alt="logo"
                    height="44"
                    width="54"
                    className="ml-2 cursor-pointer rounded-full"
                />
                <h2 className="w-[300px] text-white text-4xl font-bold uppercase tracking-widest">
                    Meet The Best Doctor
                </h2>
                <p className="w-[650px] text-white text-xl mt-6">
                    Great doctor if you need your family member to get effective
                    immediate assistance, emergency treatment or a simple
                    consultation.
                </p>
                <h3 className=" text-white text-2xl mt-6" >Create your profile to continue</h3>
                <div className="flex items-center mt-5">
                    <button className="bg-blue-900 px-6 text-white py-1 rounded-md">Patient?</button>
                    <span className="text-white bg-gray-700 rounded-full px-3">Or</span>
                    <button className="bg-blue-900 px-6 text-white py-1 rounded-md">Doctor?</button>
                </div>
            </div>
            <div className="fixed bg-white px-8 w-full top-0 flex flex-row items-center justify-between">
                <div className="flex justify-center">
                    <img
                        src={logo}
                        alt="logo"
                        height="44"
                        width="54"
                        className="ml-2 cursor-pointer rounded-full py-1"
                    />
                    <h3 className="text-2xl text-gray-700 font-bold pt-3 pl-1 cursor-pointer ml-3">
                        Doctris
                    </h3>
                </div>

                <div className="">
                    <ul className="flex flex-row items-center justify-between gap-x-5">
                        <li className="text-gray-700 font-semibold text-lg uppercase cursor-pointer">
                            Home
                        </li>
                        <li className="text-gray-700 font-semibold text-lg uppercase cursor-pointer">
                            Sercives
                        </li>
                        <li className="text-gray-700 font-semibold text-lg uppercase cursor-pointer">
                            Doctors
                        </li>
                        <li className="text-gray-700 font-semibold text-lg uppercase cursor-pointer">
                            Reviews
                        </li>
                        <li className="text-gray-700 font-semibold text-lg uppercase cursor-pointer">
                            New & Blogs
                        </li>
                    </ul>
                </div>

                <div>
                    <BsFillPersonFill className="text-2xl cursor-pointer text-gray-700" />
                </div>
            </div>
            <div className="flex flex-row relative bg-white mx-auto -mt-20 w-[70%]">
                <div className="flex flex-col gap-y-2 bg-gray-100 px-5 py-5 rounded-md">
                    <img
                        src={logo}
                        alt="logo"
                        height="44"
                        width="54"
                        className="ml-2 cursor-pointer rounded-full"
                    />
                    <h3 className="text-gray-900 font mt-5 text-2xl">Emergency Cases</h3>
                    <p className="text-gray-400 w-[300px]">
                        This is required when, for example, the is not yet
                        available. Dummy text is also known as 'fill text'.
                    </p>
                    <span className="text-blue-600 flex items-center">
                        Read More <BsArrowRight className="text-blue-600 ml-1" />{" "}
                    </span>
                </div>
                <div className="flex flex-col gap-y-2 bg-white px-5 py-5 rounded-md">
                    <img
                        src={logo}
                        alt="logo"
                        height="44"
                        width="54"
                        className="ml-2 cursor-pointer rounded-full"
                    />
                    <h3 className="text-gray-900 font mt-5 text-2xl">Doctors Timetable</h3>
                    <p className="text-gray-400 w-[300px]">
                        This is required when, for example, the is not yet
                        available. Dummy text is also known as 'fill text'.
                    </p>
                    <span className="text-blue-600 flex items-center">
                        Read More <BsArrowRight className="text-blue-600 ml-1" />{" "}
                    </span>
                </div>
                <div className="flex flex-col gap-y-2 bg-gray-100 px-5 py-5 rounded-md">
                    <img
                        src={logo}
                        alt="logo"
                        height="44"
                        width="54"
                        className="ml-2 cursor-pointer rounded-full"
                    />
                    <h3 className="text-gray-900 font mt-5 text-2xl">Opening Hours</h3>
                    <p className="text-gray-400 w-[300px]">
                        This is required when, for example, the is not yet
                        available. Dummy text is also known as 'fill text'.
                    </p>
                    <span className="text-blue-600 flex items-center">
                        Read More <BsArrowRight className="text-blue-600 ml-1" />{" "}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
