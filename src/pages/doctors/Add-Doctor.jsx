import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Formik } from "formik";
import InputField from "../../components/Authentication/InputField";

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
            <div className="flex flex-col sm:flex-row items-center justify-between mt-10">
                <h3 className="sm:text-sm text-slate-900 font-bold">
                    Create A New Doctor Account
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
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                            rememberMe: false,
                        }}
                        // onSubmit={onSubmit}
                        // validationSchema={SignUpSchema}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <div className="mx-3 mt-5 mb-5">
                                <form className="flex flex-col">
                                    <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between sm:ml-5 md:ml-9 mr-3 mt-7 ">
                                        <div className="flex flex-row items-center ">
                                            <span className="rounded-full sm:h-12 sm:w-12 md:h-20 md:w-20 flex items-center border border-gray-300 ">
                                                
                                                <img
                                                    src= "https://nellions.co.ug/wp-content/uploads/2018/06/male-placeholder-image.jpeg"
                                                    alt="doc"
                                                    className=" sm:h-12 md:h-12 sm:w-10 md:w-16 rounded-2xl ml-2"
                                                />
                                            </span>
                                            <div className="flex flex-col ml-5">
                                                <h2 className="text-lg text-slate-900 font-semibold mb-2">
                                                    Upload Your Picture
                                                </h2>
                                                <p className="text-md text-gray-500 w-auto md:w-80">
                                                    Use an image at least 600px
                                                    by 600px in either .jpg or
                                                    .png format
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex mt-5 sm:flex-row sm:mt-4 md:flex-col lg:flex-col gap-3 items-center">
                                            <Button text="Upload" />
                                            <Button text="Remove" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2 lg:gap-5">
                                        <div className="flex flex-col sm:w-full ">
                                            <InputField
                                                name="firstname"
                                                validate=""
                                                type="text"
                                                label="First Name"
                                                placeholder="First Name:"
                                            />
                                           
                                        </div>
                                        <div className="flex flex-col sm:w-full ">
                                             <InputField
                                                name="lastname"
                                                validate=""
                                                type="text"
                                                label="Last Name"
                                                placeholder="Last Name:"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2 lg:gap-5">
                                        <div className="flex flex-col sm:w-full ">
                                             <InputField
                                                name="email"
                                                validate=""
                                                type="email"
                                                label="Email address:"
                                                placeholder="Email address:"
                                            />
                                            
                                        </div>
                                        <div className="flex flex-col sm:w-full">
                                             <InputField
                                                name="phone"
                                                validate=""
                                                type="text"
                                                label="Phone Num:"
                                                placeholder="Phone Num:"
                                            />
                                           
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2 lg:gap-5">
                                        <div className="flex flex-col sm:w-full ">
                                             <InputField
                                                name="address"
                                                validate=""
                                                type="text"
                                                label="Address:"
                                                placeholder="Address:"
                                            />
                                            
                                        </div>
                                       <div className="flex flex-col sm:w-full ">
                                            <InputField
                                                name="specialization"
                                                validate=""
                                                type="text"
                                                label="Specialization:"
                                                placeholder="Specialization:"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2 lg:gap-5">
                                        <div className="flex flex-col sm:w-full ">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                                Departments
                                            </label>
                                            <Select
                                                name="department"
                                                closeMenuOnSelect={false}
                                                components={animatedComponents}
                                                className="sm:w-[100%] md:w-[100%]"
                                                defaultValue={
                                                    departmentsOptions[2]
                                                }
                                                options={departmentsOptions}
                                            />
                                        </div>
                                         <div className="flex flex-col sm:w-full">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                                Gender
                                            </label>
                                            <Select
                                                closeMenuOnSelect={false}
                                                components={animatedComponents}
                                                className="sm:w-[100%] md:w-[100%]"
                                                options={genderOptions}
                                            />
                                             
                                           
                                        </div>
                                        
                                    </div>
                                    <div className="flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2 lg:gap-5">
                                        <div className="flex flex-col sm:w-full ">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                                Twitter
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="userName:"
                                                className="sm:w-[100%] md:w-[100%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                            />
                                        </div>
                                        <div className="flex flex-col sm:w-full">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                                Facebook
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="userName:"
                                                className="sm:w-[100%] md:w-[100%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2 lg:gap-5">
                                        <div className="flex flex-col sm:w-full  ">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                                Linkedin
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="userName:"
                                                className="sm:w-[100%] md:w-[100%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                            />
                                        </div>
                                        <div className="flex flex-col sm:w-full ">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                                Instagram
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="userName:"
                                                className="sm:w-[100%] md:w-[100%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full mb-3 ml-3 pr-3 flex flex-col ">
                                        <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                            Your Experience
                                        </label>
                                        <textarea
                                            type="text"
                                            placeholder="Your Experience:"
                                            className="w-full mr-3 h-[100px]  placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                        />
                                    </div>
                                    <div className=" ml-3 ">
                                    <Button type="submit" text="Add Doctor" />
                                    </div>
                                </form>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;
