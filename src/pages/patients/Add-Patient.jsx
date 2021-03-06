import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import image1 from "../../data/images/01.jpg";
import image2 from "../../data/images/02.jpg";
import image3 from "../../data/images/03.jpg";
import image4 from "../../data/images/04.jpg";
import image5 from "../../data/images/05.jpg";
import { AvailableDoctors } from "../doctors/DoctorsList";

const animatedComponents = makeAnimated();


const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
];

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

const AddPatient = () => {
    const params = useLocation();
    const navigate = useNavigate();
    const firstName = params.pathname.split("/")[1];
    const secondName = params.pathname.split("/")[2];

    return (
        <div className="mx-4 min-h-screen">
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-between mt-3">
                <h3 className="text-lg text-slate-900 font-bold">
                    Add New Patient
                </h3>
                <div>
                    <p className="paragraph inline-flex items-center justify-between uppercase text-sm sm:text-sm md:text-md lg:text-md ">
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
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row mt-3 w-full gap-3 rounded-md">
                <div className="sm:w-[100%] md:w-[100%] lg:w-[60%] bg-white rounded-md sm:h-auto md:h-[500px]">
                    <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between ml-9 mr-3 mt-7 ">
                        <div className="flex flex-row items-center ">
                                <img
                                    src={image5}
                                    alt="doc"
                                    className="h-20 w-20  ml-2 rounded-full"
                                />

                            <div className="flex flex-col ml-5">
                                <h2 className=" text-lg text-slate-900 font-semibold mb-2">
                                    Upload Your Picture
                                </h2>
                                <p className=" text-md text-gray-500 sm:w-auto">
                                    For best results, use an image at least
                                    600px by 600px in either .jpg or .png format
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row sm:flex-row md:flex-row mt-5 sm:mt-5 md:mt-0  lg:flex-col gap-3 items-center">
                            <Button text="Upload" />
                            <Button text="Remove" />
                        </div>
                    </div>
                    <div className="mx-3 mt-5 mb-5">
                        <form className="flex flex-col">
                            <div className="flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between sm:ml-0 md:ml-3 mb-5 gap-2 w-full">
                                <div className="flex flex-col sm:w-[100%] ">
                                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="First Name:"
                                        className="sm:w-[100%] md:w-[300px] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                    />
                                </div>
                                <div className="flex flex-col sm:w-[100%] ">
                                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Last Name:"
                                        className="sm:w-[100%] md:w-[300px] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between sm:ml-0 md:ml-3 mb-5 gap-2 w-full">
                                <div className="flex flex-col sm:w-[100%] ">
                                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email address:"
                                        className="sm:w-[100%] md:w-[300px] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                    />
                                </div>
                                <div className="flex flex-col sm:w-[100%]">
                                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                        Phone no.
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Phone no:"
                                        className="sm:w-[100%] md:w-[300px] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between sm:ml-0 md:ml-3 mb-5 gap-2 w-full">
                                <div className="flex flex-col sm:w-[100%]">
                                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                        Dtate
                                    </label>
                                    <input
                                        type="date"
                                        // placeholder="Phone no:"
                                        className="sm:w-[100%] md:w-[300px] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                    />
                                </div>
                                <div className="flex flex-col sm:w-[100%]">
                                    <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                        Departments
                                    </label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        className="sm:w-[100%] md:w-[300px]"
                                        defaultValue={departmentsOptions[2]}
                                        options={departmentsOptions}
                                    />
                                </div>
                            </div>
                            <div className="w-[140px]">
                                <Button text="Add Patient" />
                            </div>

                            {/* <button className="bg-blue-700 text-white w-auto py-3 mx-3 rounded-2xl mt-3 mb-6 font-semibold uppercase">
                                Add Doctor
                            </button> */}
                        </form>
                    </div>
                </div>
                <div className="sm:w-[100%] md:w-[100%] lg:w-[40%] bg-white rounded-md pb-5">
                    <div className="mt-4 pl-4 border-b border-gray-400 pb-7 pt-4">
                        <h4 className="text-lg text-slate-800 font-semibold">
                            Doctor's List
                        </h4>
                    </div>
                    <div className="slim-scrollbar overflow-auto h-[700px]  ">
                        {AvailableDoctors?.map((doc, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-row items-center pl-3 mb-5 mt-2 mx-2 rounded-md border"
                                >
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
                            <Button
                                text="All Doctors"
                                onClick={() => navigate("/doctors/all-doctors")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPatient;
