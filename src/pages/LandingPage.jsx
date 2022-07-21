import React from "react";
import logo from "../data/images/logo3.jpg";
import aboutTreatmentImage from "../data/images/about-2.png";
import image1 from "../data/images/01.jpg";
import image2 from "../data/images/new-1.jpg";
import image3 from "../data/images/new-2.jpg";
import image4 from '../data/images/new-3.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import {BsFillPersonFill,BsArrowRight,BsEyeFill,BsFillStarFill,BsCalendarDay,BsHeart} from "react-icons/bs";
import {RiMentalHealthFill,RiCapsuleFill,RiMicroscopeFill,RiHeartPulseFill,} from "react-icons/ri";
import { FaStethoscope } from "react-icons/fa";
import { MdOutlineAutoGraph, MdOutlineBloodtype, MdArrowRight } from "react-icons/md";
import { BiTime } from 'react-icons/bi';
import { FooterContent } from "../components/others/FooterMain";
import DoctorsList from "./doctors/DoctorsList";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const LandingPage = () => {
    return (
        <div className="w-full">
            {/* start */}
            <div
                className="bg-hero-pattern bg-no-repeat w-[100%] h-[750px] relative pt-56 pl-10 opacity-15"
                style={{
                    background: "url(/images/about.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <img
                    src={logo}
                    alt="logo"
                    height="44"
                    width="54"
                    className="ml-2 cursor-pointer rounded-full"
                />
                <h2 className="sm:w-[100%] md:w-[300px] text-white text-4xl font-bold uppercase tracking-widest">
                    Meet The Best Doctor
                </h2>
                <p className="sm:w-[100%]   md:w-[650px] text-white text-xl mt-6">
                    Great doctor if you need your family member to get effective
                    immediate assistance, emergency treatment or a simple
                    consultation.
                </p>
                <h3 className=" text-white text-2xl mt-6">
                    Create your profile to continue
                </h3>
                <div className="flex items-center mt-5">
                    <button className="bg-blue-700 px-6 text-white py-1 rounded-md">
                        Patient?
                    </button>
                    <span className="text-white bg-gray-500 rounded-full px-3">
                        Or
                    </span>
                    <button className="bg-blue-700 px-6 text-white py-1 rounded-md">
                        Doctor?
                    </button>
                </div>
            </div>
            {/* end  */}

            {/* start */}
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
            {/* end  */}

            {/* start  */}
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row relative bg-white mx-auto sm:mt-0 sm:w-[100%]  md:-mt-20 sm:x-2 rounded-md md:w-[80%] justify-between">
                <div className="flex flex-col gap-y-2 bg-gray-100 px-5  py-5 rounded-md">
                    <img
                        src={logo}
                        alt="logo"
                        height="44"
                        width="54"
                        className="ml-2 cursor-pointer rounded-full"
                    />
                    <h3 className="text-gray-900 font mt-5 text-2xl">
                        Emergency Cases
                    </h3>
                    <p className="text-gray-400 w-auto">
                        This is required when, for example, the is not yet
                        available. Dummy text is also known as 'fill text'.
                    </p>
                    <span className="text-blue-600 flex items-center">
                        Read More{" "}
                        <BsArrowRight className="text-blue-600 ml-1" />{" "}
                    </span>
                </div>
                <div className="flex flex-col gap-y-2 bg-white px-5 py-5  rounded-md">
                    <img
                        src={logo}
                        alt="logo"
                        height="44"
                        width="54"
                        className="ml-2 cursor-pointer rounded-full"
                    />
                    <h3 className="text-gray-900 font mt-5 text-2xl">
                        Doctors Timetable
                    </h3>
                    <p className="text-gray-400 w-auto">
                        This is required when, for example, the is not yet
                        available. Dummy text is also known as 'fill text'.
                    </p>
                    <span className="text-blue-600 flex items-center">
                        Read More{" "}
                        <BsArrowRight className="text-blue-600 ml-1" />{" "}
                    </span>
                </div>
                <div className="flex flex-col gap-y-2 bg-gray-100 px-5 py-5  rounded-md">
                    <img
                        src={logo}
                        alt="logo"
                        height="44"
                        width="54"
                        className="ml-2 cursor-pointer rounded-full"
                    />
                    <h3 className="text-gray-900 font mt-5 text-2xl">
                        Opening Hours
                    </h3>
                    <p className="text-gray-400 w-auto">
                        This is required when, for example, the is not yet
                        available. Dummy text is also known as 'fill text'.
                    </p>
                    <span className="text-blue-600 flex items-center">
                        Read More{" "}
                        <BsArrowRight className="text-blue-600 ml-1" />{" "}
                    </span>
                </div>
            </div>
            {/* end  */}

            {/* start  */}
            <div className="flex flex-col sm:flex-col md:flex-row mt-20 items-center px-10">
                <img src={aboutTreatmentImage} alt="about page" />
                <div className="ml-10 px-5">
                    <h3 className="text-2xl text-slate-900 font-bold uppercase mb-8 ">
                        About Our Treatments
                    </h3>
                    <p className="text-gray-500">
                        Great doctor if you need your family member to get
                        effective immediate assistance, examination, emergency
                        treatment or a simple consultation. Thank you.
                    </p>
                    <br />
                    <p className="text-gray-500">
                        The most well-known dummy text is the 'Lorem Ipsum',
                        which is said to have originated in the 16th century.
                        Lorem Ipsum is composed in a pseudo-Latin language which
                        more or less corresponds to 'proper' Latin. It contains
                        a series of real Latin words.
                    </p>
                    <button className="flex items-center bg-blue-700 text-white px-5 py-3 rounded-md mt-8">
                        Read More <BsArrowRight className="text-white ml-3" />
                    </button>
                </div>
            </div>
            {/* end  */}

            {/* start  */}
            <div className="mt-20 w-full ">
                <div className="mx-auto flex flex-col items-center justify-center">
                    <button className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm">
                        Departments
                    </button>
                    <h3 className="text-2xl text-slate-900 font-semibold uppercase my-5">
                        Our Medical Services
                    </h3>
                    <p className="text-gray-500 text-lg mx-20 sm:w-[100%] md:w-[600px] text-center ">
                        Great doctor if you need your family member to get
                        effective immediate assistance, emergency treatment or a
                        simple consultation.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mx-10 mb-5 mt-8">
                    <div>
                        <div className="h-20 w-20 bg-gray-100 rounded-lg flex justify-center items-center">
                            <BsEyeFill className="text-blue-600 h-12 w-12" />
                        </div>
                        <h3 className="text-gray-700 text-xl my-4">Eye Care</h3>
                        <p className="text-gray-500">
                            There is now an abundance of readable dummy texts
                            required purely to fill a space.
                        </p>
                        <span className="flex items-center text-blue-600 px-5 py-3 rounded-md mt-8 w-44 cursor-pointer">
                            Read More{" "}
                            <BsArrowRight className="text-blue-600  ml-3" />
                        </span>
                    </div>
                    <div>
                        <div className="h-20 w-20 bg-gray-100 rounded-lg flex justify-center items-center">
                            <RiMentalHealthFill className="text-blue-600 h-12 w-12" />
                        </div>
                        <h3 className="text-gray-700 text-xl my-4">
                            Psychotherapy
                        </h3>
                        <p className="text-gray-500">
                            There is now an abundance of readable dummy texts
                            required purely to fill a space.
                        </p>
                        <span className="flex items-center text-blue-600 px-5 py-3 rounded-md mt-8 w-44 cursor-pointer">
                            Read More{" "}
                            <BsArrowRight className="text-blue-600  ml-3" />
                        </span>
                    </div>
                    <div>
                        <div className="h-20 w-20 bg-gray-100 rounded-lg flex justify-center items-center">
                            <FaStethoscope className="text-blue-600 h-12 w-12" />
                        </div>
                        <h3 className="text-gray-700 text-xl my-4">
                            Primary Care
                        </h3>
                        <p className="text-gray-500">
                            There is now an abundance of readable dummy texts
                            required purely to fill a space.
                        </p>
                        <span className="flex items-center text-blue-600 px-5 py-3 rounded-md mt-8 w-44 cursor-pointer">
                            Read More{" "}
                            <BsArrowRight className="text-blue-600  ml-3" />
                        </span>
                    </div>
                    <div>
                        <div className="h-20 w-20 bg-gray-100 rounded-lg flex justify-center items-center">
                            <RiCapsuleFill className="text-blue-600 h-12 w-12" />
                        </div>
                        <h3 className="text-gray-700 text-xl my-4">
                            Dental Care
                        </h3>
                        <p className="text-gray-500">
                            There is now an abundance of readable dummy texts
                            required purely to fill a space.
                        </p>
                        <span className="flex items-center text-blue-600 px-5 py-3 rounded-md mt-8 w-44 cursor-pointer">
                            Read More{" "}
                            <BsArrowRight className="text-blue-600  ml-3" />
                        </span>
                    </div>
                    <div>
                        <div className="h-20 w-20 bg-gray-100 rounded-lg flex justify-center items-center">
                            <RiMicroscopeFill className="text-blue-600 h-12 w-12" />
                        </div>
                        <h3 className="text-gray-700 text-xl my-4">
                            Orthopedic
                        </h3>
                        <p className="text-gray-500">
                            There is now an abundance of readable dummy texts
                            required purely to fill a space.
                        </p>
                        <span className="flex items-center text-blue-600 px-5 py-3 rounded-md mt-8 w-44 cursor-pointer">
                            Read More{" "}
                            <BsArrowRight className="text-blue-600  ml-3" />
                        </span>
                    </div>
                    <div>
                        <div className="h-20 w-20 bg-gray-100 rounded-lg flex justify-center items-center">
                            <MdOutlineAutoGraph className="text-blue-600 h-12 w-12" />
                        </div>
                        <h3 className="text-gray-700 text-xl my-4">
                            Cardiology
                        </h3>
                        <p className="text-gray-500">
                            There is now an abundance of readable dummy texts
                            required purely to fill a space.
                        </p>
                        <span className="flex items-center text-blue-600 px-5 py-3 rounded-md mt-8 w-44 cursor-pointer">
                            Read More{" "}
                            <BsArrowRight className="text-blue-600  ml-3" />
                        </span>
                    </div>
                    <div>
                        <div className="h-20 w-20 bg-gray-100 rounded-lg flex justify-center items-center">
                            <RiHeartPulseFill className="text-blue-600 h-12 w-12" />
                        </div>
                        <h3 className="text-gray-700 text-xl my-4">
                            Gynecology
                        </h3>
                        <p className="text-gray-500">
                            There is now an abundance of readable dummy texts
                            required purely to fill a space.
                        </p>
                        <span className="flex items-center text-blue-600 px-5 py-3 rounded-md mt-8 w-44 cursor-pointer">
                            Read More{" "}
                            <BsArrowRight className="text-blue-600  ml-3" />
                        </span>
                    </div>
                    <div>
                        <div className="h-20 w-20 bg-gray-100 rounded-lg flex justify-center items-center">
                            <MdOutlineBloodtype className="text-blue-600 h-12 w-12" />
                        </div>
                        <h3 className="text-gray-700 text-xl my-4">
                            Neurology
                        </h3>
                        <p className="text-gray-500">
                            There is now an abundance of readable dummy texts
                            required purely to fill a space.
                        </p>
                        <span className="flex items-center text-blue-600 px-5 py-3 rounded-md mt-8 w-44 cursor-pointer">
                            Read More{" "}
                            <BsArrowRight className="text-blue-600  ml-3" />
                        </span>
                    </div>
                </div>
            </div>
            {/* end  */}

            {/* start doctors */}
            <div className="mt-20 w-full ">
                <div className="mx-auto flex flex-col items-center justify-center">
                    <h3 className="text-2xl text-slate-900 font-semibold uppercase my-5">
                        Doctors
                    </h3>
                    <p className="text-gray-500 text-lg mx-20 sm:w-[100%] md:w-[600px] text-center ">
                        Great doctor if you need your family member to get
                        effective immediate assistance, emergency treatment or a
                        simple consultation.
                    </p>
                </div>
                <DoctorsList />
            </div>
            {/* end doctors */}

            {/* start reviews */}
            <div className="mt-20 w-full ">
                <div className="mx-auto flex flex-col items-center justify-center mb-10">
                    <h3 className="text-2xl text-slate-900 font-semibold uppercase my-5">
                        Patients Says
                    </h3>
                    <p className="text-gray-500 text-lg mx-20 sm:w-[100%] md:w-[600px] text-center ">
                        Great doctor if you need your family member to get
                        effective immediate assistance, emergency treatment or a
                        simple consultation.
                    </p>
                </div>

                <Splide
                    options={{
                        rewind: true,
                        width: 800,
                        gap: "1rem",
                    }}
                    aria-label="My Favorite Images"
                    className="flex flex-row items-center justify-center mx-auto"
                >
                    <SplideSlide>
                        <p className="text-gray-500 text-lg mx-20 sm:w-[100%] md:w-[600px] text-center ">
                            The advantage of its Latin origin and the relative
                            meaninglessness of Lorum Ipsum is that the text does
                            not attract attention to itself or distract the
                            viewer's attention from the layout. "
                        </p>
                        <div className="flex flex-col items-center justify-center mt-3">
                            <img
                                src={image1}
                                className="h-14 w-14 rounded-full"
                                alt=""
                            />
                            <span className="flex flex-row mt-2">
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                            </span>
                            <span className="text-gray-500 text-xl mb-6">
                                <strong className="text-blue-600">
                                    -Software Engineer
                                </strong>{" "}
                                Samuel Kirigha{" "}
                            </span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <p className="text-gray-500 text-lg mx-20 sm:w-[100%] md:w-[600px] text-center ">
                            The advantage of its Latin origin and the relative
                            meaninglessness of Lorum Ipsum is that the text does
                            not attract attention to itself or distract the
                            viewer's attention from the layout. "
                        </p>
                        <div className="flex flex-col items-center justify-center mt-3">
                            <img
                                src={image1}
                                className="h-14 w-14 rounded-full"
                                alt=""
                            />
                            <span className="flex flex-row mt-2">
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                            </span>
                            <span className="text-gray-500 text-xl mb-6">
                                <strong className="text-blue-600">
                                    -Software Engineer
                                </strong>{" "}
                                Samuel Kirigha{" "}
                            </span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <p className="text-gray-500 text-lg mx-20 sm:w-[100%] md:w-[600px] text-center ">
                            The advantage of its Latin origin and the relative
                            meaninglessness of Lorum Ipsum is that the text does
                            not attract attention to itself or distract the
                            viewer's attention from the layout. "
                        </p>
                        <div className="flex flex-col items-center justify-center mt-3">
                            <img
                                src={image1}
                                className="h-14 w-14 rounded-full"
                                alt=""
                            />
                            <span className="flex flex-row mt-2">
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                            </span>
                            <span className="text-gray-500 text-xl mb-6">
                                <strong className="text-blue-600">
                                    -Software Engineer
                                </strong>{" "}
                                Samuel Kirigha{" "}
                            </span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <p className="text-gray-500 text-lg mx-20 sm:w-[100%] md:w-[600px] text-center ">
                            The advantage of its Latin origin and the relative
                            meaninglessness of Lorum Ipsum is that the text does
                            not attract attention to itself or distract the
                            viewer's attention from the layout. "
                        </p>
                        <div className="flex flex-col items-center justify-center mt-3">
                            <img
                                src={image1}
                                className="h-14 w-14 rounded-full"
                                alt=""
                            />
                            <span className="flex flex-row mt-2">
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                            </span>
                            <span className="text-gray-500 text-xl mb-6">
                                <strong className="text-blue-600">
                                    -Software Engineer
                                </strong>{" "}
                                Samuel Kirigha{" "}
                            </span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <p className="text-gray-500 text-lg mx-20 sm:w-[100%] md:w-[600px] text-center ">
                            The advantage of its Latin origin and the relative
                            meaninglessness of Lorum Ipsum is that the text does
                            not attract attention to itself or distract the
                            viewer's attention from the layout. "
                        </p>
                        <div className="flex flex-col items-center justify-center mt-3">
                            <img
                                src={image1}
                                className="h-14 w-14 rounded-full"
                                alt=""
                            />
                            <span className="flex flex-row mt-2">
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                                <BsFillStarFill className="text-orange-500" />
                            </span>
                            <span className="text-gray-500 text-xl mb-6">
                                <strong className="text-blue-600">
                                    -Software Engineer
                                </strong>{" "}
                                Samuel Kirigha{" "}
                            </span>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
            {/*  end of reviews*/}
            <div className="mt-20 w-full ">
                <div className="mx-auto flex flex-col items-center justify-center mb-10">
                    <h3 className="text-2xl text-slate-900 font-semibold uppercase my-5">
                        Latest News & Blogs
                    </h3>
                    <p className="text-gray-500 text-lg mx-20 sm:w-[100%] md:w-[600px] text-center ">
                        Great doctor if you need your family member to get
                        effective immediate assistance, emergency treatment or a
                        simple consultation.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-0 sm:mx-0 md:mx-0 lg:mx-40 gap-5">
                    <div className="border">
                        <img src={image2} alt='' className="h-[250px] w-[100%]" />
                        <div className="mx-2">
                            <div className="mt-5 text-gray-500 flex items-center justify-between">
                                <span className="inline-flex items-center justify-center "><BsCalendarDay className="mr-3"  /> 20th November, 2020</span>
                                <span className="inline-flex items-center justify-center"><BiTime className="mr-3" /> 5 min read</span>
                            </div>
                            <p className="text-gray-900 text-2xl sm:w-auto my-2">
                                You can easily connect to doctor and make a treatment
                            </p>
                            <div className="flex flex-row items-center justify-between mb-3">
                                <div className="flex flex-row">
                                   <span className="inline-flex items-center justify-center"><BsHeart className="mr-3" /> 33 </span>
                                   <span className="inline-flex items-center justify-center ml-4"><AiOutlineMail className="mr-3"/> 33 </span>
                                </div>
                                <span className="inline-flex items-center justify-center text-blue-700  cursor-pointer">Read More <MdArrowRight className="mr-3" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="border">
                        <img src={image3} alt='' className="h-[250px] w-[100%]" />
                        <div className="mx-2">
                            <div className="mt-5 text-gray-500 flex items-center justify-between">
                                <span className="inline-flex items-center justify-center "><BsCalendarDay className="mr-3"  /> 20th November, 2020</span>
                                <span className="inline-flex items-center justify-center"><BiTime className="mr-3" /> 5 min read</span>
                            </div>
                            <p className="text-gray-900 text-2xl sm:w-auto my-2">
                                You can easily connect to doctor and make a treatment
                            </p>
                            <div className="flex flex-row items-center justify-between mb-3">
                                <div className="flex flex-row">
                                   <span className="inline-flex items-center justify-center"><BsHeart className="mr-3" /> 33 </span>
                                   <span className="inline-flex items-center justify-center ml-4"><AiOutlineMail className="mr-3"/> 33 </span>
                                </div>
                                <span className="inline-flex items-center justify-center text-blue-700  cursor-pointer">Read More <MdArrowRight className="mr-3" /></span>
                            </div>
                        </div>
                    </div>
                     <div className="border">
                        <img src={image4} alt='' className="h-[250px] w-[100%]" />
                        <div className="mx-2">
                            <div className="mt-5 text-gray-500 flex items-center justify-between">
                                <span className="inline-flex items-center justify-center "><BsCalendarDay className="mr-3"  /> 20th November, 2020</span>
                                <span className="inline-flex items-center justify-center"><BiTime className="mr-3" /> 5 min read</span>
                            </div>
                            <p className="text-gray-900 text-2xl sm:w-auto my-2">
                                You can easily connect to doctor and make a treatment
                            </p>
                            <div className="flex flex-row items-center justify-between mb-3">
                                <div className="flex flex-row">
                                   <span className="inline-flex items-center justify-center"><BsHeart className="mr-3" /> 33 </span>
                                   <span className="inline-flex items-center justify-center ml-4"><AiOutlineMail className="mr-3"/> 33 </span>
                                </div>
                                <span className="inline-flex items-center justify-center text-blue-700 cursor-pointer">Read More <MdArrowRight className="mr-3" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterContent />
        </div>
    );
};

export default LandingPage;
