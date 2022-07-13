import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import image1 from "../data/images/01.jpg";
import image2 from "../data/images/02.jpg";
import image3 from "../data/images/03.jpg";
import image4 from "../data/images/04.jpg";
import image5 from "../data/images/05.jpg";


const doctorsAvailable = [
    {
        name: "Calvin Carlo",
        department: "Eye Care",
        image: image1,
        experirnce: "1 Years Experienced",
    },
    {
        name: "Cristino Murphy",
        department: "Gynecology",
        image: image2,
        experirnce: "1 Years Experienced",
    },
    {
        name: "Alia Reddy",
        department: "Psychotherapy",
        image: image3,
        experirnce: "5 Years Experienced",
    },
    {
        name: "Toni Kovar",
        department: "Orthopedic",
        image: image4,
        experirnce: "3 Years Experienced",
    },
    {
        name: "Jessica McFarlane",
        department: "Dentist",
        image: image5,
        experirnce: "2 Years Experienced",
    },
];
const animatedComponents = makeAnimated();

const departmentsOptions = [
    { value: "Eye Care", label: "Eye Care" },
    { value: "Gynecologist", label: "Gynecologist" },
    { value: "Psychotherapist", label: "Psychotherapist" },
    { value: "Orthopedic", label: "Orthopedic" },
    { value: "Dentist", label: "Dentist" },
    { value: "Gastrologist", label: "Gastrologist" },
    { value: "Urologist", label: "Urologist" },
    { value: "Neurologist", label: "Neurologist" },
];

const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
];

const AddDoctor = () => {
    const navigate = useNavigate();
    const params = useLocation();
    const firstName = params.pathname.split("/")[1];
    const secondName = params.pathname.split("/")[2];
    return (
        <div className="mx-4 min-h-screen">
            <div className="flex flex-col sm:flex-row items-center justify-between mt-3">
                <h3 className="sm:text-sm text-slate-900 font-bold">
                    Add New Doctor
                </h3>
                <div className="">
                    <p className="paragraph inline-flex items-center justify-between sm:text-sm uppercase ">
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
            <div className="flex flex-col sm:flex-col sm:w-[100%] md:flex-col lg:flex-row mt-3  gap-3 rounded-md">
                <div className="sm:w-[100%] bg-white rounded-md">
                    <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between sm:ml-5 md:ml-9 mr-3 mt-7 ">
                        <div className="flex flex-row items-center ">
                            <span className="rounded-full sm:h-12 sm:w-12 md:h-20 md:w-20 flex items-center border border-gray-300 ">
                                <img
                                    src={image1}
                                    alt="doc"
                                    className=" sm:h-12 md:h-12 sm:w-10 md:w-16 rounded-2xl ml-2"
                                />
                            </span>
                            <div className="flex flex-col ml-5">
                                <h2 className="text-lg text-slate-900 font-semibold mb-2">
                                    Upload Your Picture
                                </h2>
                                <p className="text-md text-gray-500 w-auto md:w-80">
                                    For best results, use an image at least
                                    600px by 600px in either .jpg or .png format
                                </p>
                            </div>
                        </div>
                        <div className="flex mt-5 sm:flex-row sm:mt-4 md:flex-col lg:flex-col gap-3 items-center">
                            <Button text="Upload" />
                            <Button text="Remove" />
                        </div>
                    </div>
                    <div className="mx-3 mt-5 mb-5">
                        <form className="flex flex-col">
                            <div className="flex sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2 lg:gap-5">
                                <div className="flex flex-col sm:w-full ">
                                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="First Name:"
                                        className="sm:w-[100%] md:w-[100%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                    />
                                </div>
                                <div className="flex flex-col sm:w-full ">
                                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Last Name:"
                                        className="sm:w-[100%] md:w-[100%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                    />
                                </div>
                            </div>
                            <div className="flex sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2 lg:gap-5">
                                <div className="flex flex-col sm:w-full ">
                                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500">Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email address:"
                                        className="sm:w-[100%] md:w-[100%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                    />
                                </div>
                                <div className="flex flex-col sm:w-full">
                                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500">Phone no.</label>
                                    <input
                                        type="text"
                                        placeholder="Phone no:"
                                        className="sm:w-[100%] md:w-[100%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                    />
                                </div>
                            </div>
                            <div className="flex sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2 lg:gap-5">
                                <div className="flex flex-col sm:w-full ">
                                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500">Departments</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        className="sm:w-[100%] md:w-[100%]"
                                        defaultValue={departmentsOptions[2]}
                                        options={departmentsOptions}
                                    />
                                </div>
                                <div className="flex flex-col sm:w-full ">
                                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500">Gender</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        className="sm:w-[100%] md:w-[100%]"
                                        options={genderOptions}
                                    />
                                </div>
                            </div>
                            <div className="flex sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2 lg:gap-5">
                                <div className="flex flex-col sm:w-full ">
                                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500">Twitter</label>
                                    <input
                                        type="text"
                                        placeholder="userName:"
                                        className="sm:w-[100%] md:w-[100%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                    />
                                </div>
                                <div className="flex flex-col sm:w-full">
                                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500">Facebook</label>
                                    <input
                                        type="text"
                                        placeholder="userName:"
                                        className="sm:w-[100%] md:w-[100%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                    />
                                </div>
                            </div>
                            <div className="flex sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2 lg:gap-5">
                                <div className="flex flex-col sm:w-full  ">
                                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500">Linkedin</label>
                                    <input
                                        type="text"
                                        placeholder="userName:"
                                        className="sm:w-[100%] md:w-[100%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                    />
                                </div>
                                <div className="flex flex-col sm:w-full ">
                                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500">Instagram</label>
                                    <input
                                        type="text"
                                        placeholder="userName:"
                                        className="sm:w-[100%] md:w-[100%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                    />
                                </div>
                            </div>
                            <div className="w-full mb-3 ml-3 pr-3 flex flex-col ">
                                <label className="after:content-['*'] after:ml-0.5 after:text-red-500">Your Bio</label>
                                <textarea
                                    type="text"
                                    placeholder="Your Bio:"
                                    className="w-full mr-3 h-[100px]  placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                />
                            </div>
                            <Button text="Add Doctor" />
                            {/* <button className="bg-blue-700 text-white w-auto py-3 mx-3 rounded-2xl mt-3 mb-6 font-semibold uppercase">
                                Add Doctor
                            </button> */}
                        </form>
                    </div>
                </div>
                <div className="sm:w-[100%] lg:w-[45%] bg-white rounded-md pb-5">
                    <div className="mt-4 pl-4 border-b border-gray-400 pb-7 pt-4">
                        <h4 className="text-lg text-slate-800 font-semibold">
                            Doctor's List
                        </h4>
                    </div>
                    <div className="slim-scrollbar overflow-auto h-[700px]  ">
                        {doctorsAvailable.map((doc, index) => {
                            return (
                                <div key={index} className="flex flex-row items-center ml-3 mb-5 mt-2 border rounded-md">
                                    <div className="h-[150px] w-[150px] rounded-lg drop-shadow-sm">
                                        <img
                                            src={doc.image}
                                            alt="doc"
                                            height="100%"
                                            width="100%"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-5 ">
                                        <h5 className="text-lg text-slate-900 font-semibold">
                                            {doc.name}
                                        </h5>
                                        <span className="text-md text-gray-400">
                                            {doc.department}
                                        </span>
                                        <p className="text-md text-gray-400">
                                            {doc.experirnce}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="mt-3 ml-7 mb-3">
                        <Button text="All Doctors" onClick={() => navigate('/doctors/all-doctors')} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;
