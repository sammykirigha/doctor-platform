import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import image1 from "../data/images/01.jpg";
import Select from "react-select";
import makeAnimated from "react-select/animated";
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
    const params = useLocation();
    const firstName = params.pathname.split("/")[1];
    const secondName = params.pathname.split("/")[2];
    return (
        <div className="mx-4">
            <div className="flex flex-row items-center justify-between mt-3">
                <h3 className="text-lg text-slate-900 font-bold">
                    Add New Doctor
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
            <div className="flex flex-row mt-3 w-full gap-3 rounded-md">
                <div className="w-[60%] bg-white">
                    <div className="flex flex-row items-center justify-between ml-9 mr-3 mt-7 ">
                        <div className="flex flex-row items-center ">
                            <span className="rounded-full h-28 w-28 flex items-center border border-gray-300 ">
                                <img
                                    src={image1}
                                    alt="doc"
                                    className="h-20 w-20 rounded-2xl ml-2"
                                />
                            </span>

                            <div className="flex flex-col ml-5">
                                <h2 className="text-lg text-slate-900 font-semibold mb-2">
                                    Upload Your Picture
                                </h2>
                                <p className="text-md text-gray-500 w-80">
                                    For best results, use an image at least
                                    600px by 600px in either .jpg or .png format
                                </p>
                            </div>
                        </div>
                        <div className="flex sm:flex-col md:flex-col lg:flex-col gap-3 items-center">
                            <Button text="Upload" />
                            <Button text="Remove" />
                        </div>
                    </div>
                    <div className="mx-3 mt-5">
                        <form className="flex flex-col">
                            <div className="flex flex-row items-center justify-between ml-3 mb-5 gap-2">
                                <div className="flex flex-col ">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        placeholder="First Name:"
                                        className="w-[300px] h-10 placeholder:italic placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border focus:outline-none"
                                    />
                                </div>
                                <div className="flex flex-col ">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Last Name:"
                                        className="w-[300px] h-10 placeholder:italic placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between ml-3 mb-5 gap-2">
                                <div className="flex flex-col ">
                                    <label>Your Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email address:"
                                        className="w-[300px] h-10 placeholder:italic placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border focus:outline-none"
                                    />
                                </div>
                                <div className="flex flex-col ">
                                    <label>Phone no.</label>
                                    <input
                                        type="text"
                                        placeholder="Phone no:"
                                        className="w-[300px] h-10 placeholder:italic placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between ml-3 mb-5 gap-2">
                                <div className="flex flex-col ">
                                    <label>Departments</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        className="w-[300px]"
                                        isMulti
                                        defaultValue={departmentsOptions[2]}
                                        options={departmentsOptions}
                                    />
                                </div>
                                <div className="flex flex-col ">
                                    <label>Gender</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        className="w-[300px]"
                                        options={genderOptions}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between ml-3 mb-5 gap-2">
                                <div className="flex flex-col ">
                                    <label>Twitter</label>
                                    <input
                                        type="text"
                                        placeholder="userName:"
                                        className="w-[300px] h-10 placeholder:italic placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border focus:outline-none"
                                    />
                                </div>
                                <div className="flex flex-col ">
                                    <label>Facebook</label>
                                    <input
                                        type="text"
                                        placeholder="userName:"
                                        className="w-[300px] h-10 placeholder:italic placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between ml-3 mb-5 gap-2">
                                <div className="flex flex-col ">
                                    <label>Linkedin</label>
                                    <input
                                        type="text"
                                        placeholder="userName:"
                                        className="w-[300px] h-10 placeholder:italic placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border focus:outline-none"
                                    />
                                </div>
                                <div className="flex flex-col ">
                                    <label>Instagram</label>
                                    <input
                                        type="text"
                                        placeholder="userName:"
                                        className="w-[300px] h-10 placeholder:italic placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border focus:outline-none"
                                    />
                                </div>
                            </div>
                                <div className="w-full mb-3 ml-3 pr-3 flex flex-col ">
                                    <label>Your Bio</label>
                                    <textarea
                                        type="text"
                                        placeholder="Your Bio:"
                                        className="w-full mr-3 h-[100px]  placeholder:italic placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border focus:outline-none"
                                    />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-[40%] bg-blue-500">kirigha</div>
            </div>
        </div>
    );
};

export default AddDoctor;
