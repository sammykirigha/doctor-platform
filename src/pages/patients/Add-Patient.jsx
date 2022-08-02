import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import InputField from "../../components/Authentication/InputField";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import useFetchDoctor from "../../hooks/useFetchDoctor";
import useFetchAllDoctor from "../../hooks/useFetchAllDoctors";

const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
];

const maritalStatusOptions = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
];

const AddPatient = () => {
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");

    const { user } = useSelector((status) => status.auth);
    const { doctor, doctors } = useSelector((status) => status.doctor);

    const params = useLocation();
    const navigate = useNavigate();

    const firstName = params.pathname.split("/")[1];
    const secondName = params.pathname.split("/")[2];

    const handleGender = (event) => {
        setGender(event.target.value);
    };

    const handleStatus = (event) => {
        setStatus(event.target.value);
    };

    useFetchAllDoctor()

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
                <div className="sm:w-[100%] md:w-[100%] lg:w-[60%] bg-white rounded-md sm:h-auto">
                    <div className="mx-3 mt-5 mb-5">
                        <Formik
                            initialValues={{
                                firstname: "",
                                lastname: "",
                                email: "",
                                phone: "",
                                address: "",
                                specialization: "",
                                department: "",
                                gender: "",
                                twitterlLink: "",
                                facebooklLink: "",
                                linkedinlLink: "",
                                instagramlLink: "",
                                experience: "",
                            }}
                            // onSubmit={onSubmit}
                            // validationSchema={createDoctorSchema}
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
                                // <div className="mx-3 mt-5 mb-5">
                                <Form className="flex flex-col">
                                    <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between sm:ml-5 md:ml-9 mr-3 mt-7 ">
                                        <div className="flex flex-row items-center ">
                                            <span className="rounded-full sm:h-12 sm:w-12 md:h-20 md:w-20 flex items-center border border-gray-300 ">
                                                <img
                                                    src="https://nellions.co.ug/wp-content/uploads/2018/06/male-placeholder-image.jpeg"
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
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                                Gender
                                            </label>
                                            <select
                                                className="outline px-2 placeholder:italic pl-2 placeholder:text-slate-300 outline-gray-200 h-[40px] rounded-md placeholder:pl-3  focus:border-0 focus:outline focus:outline-blue-600"
                                                value={gender}
                                                onChange={handleGender}
                                            >
                                                {genderOptions?.map(
                                                    (depart) => (
                                                        <option
                                                            value={depart.value}
                                                        >
                                                            {depart.label}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2 lg:gap-5">
                                        <div className="flex flex-col sm:w-full ">
                                            <InputField
                                                name="dateOfBirth"
                                                validate=""
                                                type="date"
                                                label="DOB:"
                                                placeholder="date of birth:"
                                            />
                                        </div>
                                        <div className="flex flex-col sm:w-full">
                                            <InputField
                                                name="disabled"
                                                validate=""
                                                type="text"
                                                label="Disability:"
                                                placeholder="Facebook:"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2 lg:gap-5">
                                        <div className="flex flex-col sm:w-full  ">
                                            <InputField
                                                name="nationality"
                                                validate=""
                                                type="text"
                                                label="Nationality:"
                                                placeholder="Nationality:"
                                            />
                                        </div>
                                        <div className="flex flex-col sm:w-full ">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                                Marital Status
                                            </label>
                                            <select
                                                className="outline px-2 placeholder:italic pl-2 placeholder:text-slate-300 outline-gray-200 h-[40px] rounded-md placeholder:pl-3  focus:border-0 focus:outline focus:outline-blue-600"
                                                value={status}
                                                onChange={handleStatus}
                                            >
                                                {maritalStatusOptions?.map(
                                                    (depart) => (
                                                        <option
                                                            value={depart.value}
                                                        >
                                                            {depart.label}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className=" ml-3 ">
                                        <button
                                            className={`mt-5 w-[200px] bg-blue-500 text-white py-2 px-8 rounded-md cursor-pointer`}
                                            disabled={isSubmitting}
                                            type="submit"
                                        >
                                            Create Account
                                        </button>
                                    </div>
                                </Form>
                                // </div>
                            )}
                        </Formik>
                    </div>
                </div>
                {user?.role === "doctor" ? null : (
                    <div className="sm:w-[100%] md:w-[100%] lg:w-[40%] bg-white rounded-md pb-5">
                        <div className="mt-4 pl-4 border-b border-gray-400 pb-7 pt-4">
                            <h4 className="text-lg text-slate-800 font-semibold">
                                Doctor's List
                            </h4>
                        </div>
                        <div className="slim-scrollbar overflow-auto h-[700px]  ">
                            {doctors && doctors?.map((doc, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-row  pl-3 mb-5 mt-2 mx-2 rounded-md border"
                                    >
                                        <div className="h-[100px] w-[100px] border my-3 rounded-lg drop-shadow-sm">
                                            <img
                                                src={doc?.image}
                                                alt="doc"
                                                height="100%"
                                                width="100%"
                                            />
                                        </div>
                                        <div className="flex flex-col ml-5 mt-3">
                                            <h5 className="text-lg text-slate-900 font-semibold">
                                                {doc.firstname} {doc.lastname}
                                            </h5>
                                            <span className="text-md text-gray-400">
                                                {doc.specialization}
                                            </span>
                                            <p className="text-md text-gray-400">
                                                {/* //TODO:show rating */}
                                                {/* {doc.experirnce} */}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                            <div className="mt-3 ml-7 mb-3">
                                <Button
                                    text="All Doctors"
                                    // to="/"
                                />
                            </div>
                        </div>
                    </div>
                    
                )
                }
            </div>
        </div>
    );
};

export default AddPatient;
