import React from "react";
import { FiArrowRight, FiTwitter, FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { BiTime, BiLocationPlus } from "react-icons/bi";
import {  HiCurrencyDollar } from "react-icons/hi";
import image1 from "../../data/images/01.jpg";
import image2 from "../../data/images/02.jpg";
import image3 from "../../data/images/03.jpg";
import image4 from "../../data/images/04.jpg";
import image5 from "../../data/images/05.jpg";

const doctorsAvailable = [
    {
        name: "Calvin Carlo",
        department: "Eye Care",
        image: image1,
        experirnce: "1 Years Experienced",
        qualifications: "M.B.B.S, Eye Care",
    },
    {
        name: "Cristino Murphy",
        department: "Gynecology",
        image: image2,
        experirnce: "1 Years Experienced",
        qualifications: "M.B.B.S, Gynecology",
    },
    {
        name: "Alia Reddy",
        department: "Psychotherapy",
        image: image3,
        experirnce: "5 Years Experienced",
        qualifications: "M.B.B.S, Psychotherapy",
    },
    {
        name: "Toni Kovar",
        department: "Orthopedic",
        image: image4,
        experirnce: "3 Years Experienced",
        qualifications: "M.B.B.S, Orthopedic",
    },
    {
        name: "Jessica McFarlane",
        department: "Dentist",
        image: image5,
        experirnce: "2 Years Experienced",
        qualifications: "M.B.B.S, Dentist",
    },
];

const Overview = () => {
    return (
        <div className="mt-4 flex flex-col">
            <p className="text-lg text-gray-400 ">
                A gynecologist is a surgeon who specializes in the female
                reproductive system, which includes the cervix, fallopian tubes,
                ovaries, uterus, vagina and vulva. Menstrual problems,
                contraception, sexuality, menopause and infertility issues are
                diagnosed and treated by a gynecologist; most gynecologists also
                provide prenatal care, and some provide primary care.
            </p>
            <div className="flex flex-col mt-3">
                <span className="text-md text-slate-900 font-semibold">
                    Spacialities:
                </span>
                <div className="flex flex-col mt-5">
                    <span className=" inline-flex items-center text-gray-600 text-md mb-1">
                        <FiArrowRight className="text-blue-600 mr-2" /> Women's
                        health services
                    </span>
                    <span className=" inline-flex items-center text-gray-600 text-md mb-1">
                        <FiArrowRight className="text-blue-600 mr-2 " />{" "}
                        Pregnancy care
                    </span>
                    <span className=" inline-flex items-center text-gray-600 text-md mb-1">
                        <FiArrowRight className="text-blue-600 mr-2 " />{" "}
                        Surgical procedures
                    </span>
                    <span className=" inline-flex items-center text-gray-600 text-md mb-1">
                        <FiArrowRight className="text-blue-600 mr-2 " />{" "}
                        Specialty care
                    </span>
                    <span className=" inline-flex items-center text-gray-600 text-md mb-1">
                        <FiArrowRight className="text-blue-600 mr-2 " />{" "}
                        Conclusion
                    </span>
                </div>
            </div>
            <div className="">
                <span className="text-md text-slate-900 font-semibold">
                    My Team:
                </span>
                <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-1 ">
                    {doctorsAvailable.map((doc, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-md drop-shadow-md  mt-5  mb-5"
                            >
                                <div className="h-[200px] w-[200px] ">
                                    <img
                                        src={doc.image}
                                        alt="doc"
                                        height="100%"
                                        width="100%"
                                    />
                                </div>
                                <div className="flex flex-col mx-3 pt-3 pb-5 ">
                                    <h5 className="text-lg text-slate-900 font-semibold">
                                        {doc.name}
                                    </h5>
                                    <span className="text-md text-gray-400">
                                        {doc.qualifications}
                                    </span>
                                    <div className="flex flex-row items-center">
                                        <div className="flex flex-row">
                                            {[1, 2, 3, 4, 5].map((item) => (
                                                <AiOutlineStar
                                                    color="orange"
                                                    className="text-orange-600"
                                                />
                                            ))}
                                        </div>

                                        <span className="text-lg text-gray-500 ml-12">
                                            5 star
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className=" inline-flex items-center text-sm text-gray-400 my-1">
                                            <BiLocationPlus className="text-blue-500 mr-3" /> 63, PGShustoke, UK
                                        </span>
                                        <span className=" inline-flex items-center text-sm text-gray-400 my-1">
                                            <BiTime className="text-blue-500 mr-3" /> Mon: 2:00PM - 6:00PM
                                        </span>
                                        <span className=" inline-flex items-center text-sm text-gray-400 my-1">
                                            <HiCurrencyDollar className="text-blue-500 my-100 mr-3" />$ 75 USD/Visit
                                        </span>
									</div>
									<div className="flex flex-row mt-4 mr-4 items-center justify-between">
										<span className="h-10 w-10 drop-shadow-md rounded-full bg-blue-50 flex items-center justify-center cursor-pointer group hover:bg-blue-600 "><FiFacebook className="text-blue-500  group-hover:text-white"  /></span>
										<span className="h-10 w-10 drop-shadow-md rounded-full bg-blue-50 flex items-center justify-center cursor-pointer group hover:bg-blue-600 "><FiLinkedin className="text-blue-500 group-hover:text-white"  /></span>
										<span className="h-10 w-10 drop-shadow-md rounded-full bg-blue-50 flex items-center justify-center cursor-pointer group hover:bg-blue-600 "><FiGithub className="text-blue-500 group-hover:text-white" /></span>
										<span className="h-10 w-10 drop-shadow-md rounded-full bg-blue-50 flex items-center justify-center cursor-pointer group hover:bg-blue-600 "><FiTwitter className="text-blue-500 group-hover:text-white" /></span>
									</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Overview;
