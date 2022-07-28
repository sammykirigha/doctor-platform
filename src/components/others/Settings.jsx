import { Form, Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_DOCTOR } from "../../queries/doctors";
import { resetNotifications } from "../../state/reducers/error.reducer";
import Button from "../common/Button";
import createDoctorSchema from "../../pages/doctors/createDoctorValidation";
import InputField from "../Authentication/InputField";
import fileUploader from "../../utils/file-uploader";
import { useRef } from "react";

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

const Settings = () => {
    const { doctor } = useSelector((state) => state.doctor);
    const dispatch = useDispatch();
    const imageUploadRef = useRef(null);

    const [profileImage, setProfileImage] = useState("");

    const [uploading, setUploading] = useState(false);

    const handleImageChange = async (e) => {
        console.log(e.target.files);
        if (e.target.files?.length === 0) return;

        const file = e.target.files[0];

        try {
            setUploading(true);

            const url = await fileUploader(file);
            setUploading(false);
            setProfileImage(url);
        } catch (error) {
            setUploading(false);
            console.log(error);
        }

        //url
    };

    const onSubmit = async (values) => {
        // event.preventDefault();
        const inputValues = {
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            phone: values.phone,
            address: values.address,
            specialization: values.specialization,
            department: values.department,
            twitterlLink: values.twitterlLink,
            facebooklLink: values.facebooklLink,
            linkedinlLink: values.linkedinlLink,
            instagramlLink: values.instagramlLink,
            experience: values.experience,
        };

        const details = {
            query: CREATE_DOCTOR,
            variables: {
                input: inputValues,
            },
        };
    };

    console.log(doctor);

    useEffect(() => {
        return () => dispatch(resetNotifications());
    }, [dispatch]);

    useEffect(() => {
        if (doctor?.image) setProfileImage(doctor?.image);
    }, [doctor?.image]);

    return (
        <div className="mb-3">
            <h4 className="text-lg text-slate-900 font-semibold mt-5">
                Settings
            </h4>
            <div className=" mt-7">
                <div className=" flex flex-col sm:flex-col md:flex-col lg:justify-between  lg:flex-row rounded-md bg-white mr-2">
                    <div className="border border-gray-300 rounded-md">
                        <div className="border-b border-gray-100 pl-5 py-3">
                            <span className="text-lg text-slate-900 font-semibold">
                                Personal Information :
                            </span>
                        </div>
                        {doctor?.id && (
                            <Formik
                                initialValues={doctor}
                                // onSubmit={onSubmit}
                                validationSchema={createDoctorSchema}
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
                                    <Form className="flex flex-col">
                                        <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between sm:ml-5 md:ml-9 mr-3 mt-7 ">
                                            <div className="flex flex-row items-center ">
                                                <span className="rounded-full sm:h-12 sm:w-12 md:h-20 md:w-20 flex items-center border border-gray-300 ">
                                                    <img
                                                        src={profileImage}
                                                        alt="doc"
                                                        className=" sm:h-12 md:h-12 sm:w-10 md:w-16 rounded-2xl ml-2"
                                                    />
                                                </span>
                                                <div className="flex flex-col ml-5">
                                                    <h2 className="text-lg text-slate-900 font-semibold mb-2">
                                                        Upload Your Picture
                                                    </h2>
                                                    <p className="text-md text-gray-500 w-auto md:w-80">
                                                        Use an image at least
                                                        600px by 600px in either
                                                        .jpg or .png format
                                                    </p>
                                                </div>
                                            </div>
                                            <div className=" mb-3 flex mt-5 sm:flex-row sm:mt-4 md:flex-col lg:flex-col gap-3 items-center">
                                                <Button
                                                    onClick={() =>
                                                        imageUploadRef?.current?.click()
                                                    }
                                                    text="Upload"
                                                    loading={uploading}
                                                />
                                                <input
                                                    ref={imageUploadRef}
                                                    onChange={handleImageChange}
                                                    className="hidden"
                                                    type="file"
                                                    name=""
                                                    id=""
                                                />
                                            </div>
                                        </div>
                                        <div className="pb-6 px-6">
                                            <div className="gap-x-5 flex flex-col sm:flex-col  md:flex-row sm:items-start md:items-center justify-between mb-5 gap-2 ">
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
                                            <div className="gap-x-5 flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-5 gap-2">
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
                                            <div className="gap-x-5 flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-5 gap-2">
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
                                            <div className=" gap-x-5 flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-5 gap-2">
                                                <div className="flex flex-col sm:w-full ">
                                                    <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                                        Departments
                                                    </label>
                                                    <Select
                                                        name="department"
                                                        closeMenuOnSelect={
                                                            false
                                                        }
                                                        components={
                                                            animatedComponents
                                                        }
                                                        className="sm:w-[100%] md:w-[100%]"
                                                        defaultValue={
                                                            departmentsOptions[2]
                                                        }
                                                        options={
                                                            departmentsOptions
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="gap-x-5 flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-5 gap-2">
                                                <div className="flex flex-col sm:w-full ">
                                                    <InputField
                                                        name="twitterlLink"
                                                        validate=""
                                                        type="text"
                                                        label="Twitter:"
                                                        placeholder="userName:"
                                                    />
                                                </div>
                                                <div className="flex flex-col sm:w-full">
                                                    <InputField
                                                        name="facebooklLink"
                                                        validate=""
                                                        type="text"
                                                        label="Facebook:"
                                                        placeholder="Facebook:"
                                                    />
                                                </div>
                                            </div>
                                            <div className=" gap-x-5 flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-5 gap-2">
                                                <div className="flex flex-col sm:w-full  ">
                                                    <InputField
                                                        name="linkedinlLink"
                                                        validate=""
                                                        type="text"
                                                        label="Linkedin:"
                                                        placeholder="Linkedin:"
                                                    />
                                                </div>
                                                <div className="flex flex-col sm:w-full ">
                                                    <InputField
                                                        name="instagramlLink"
                                                        validate=""
                                                        type="text"
                                                        label="Instagram:"
                                                        placeholder="Instagram:"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full mb-3 flex flex-col ">
                                                <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                                    Your Experience
                                                </label>
                                                <Field
                                                    name="experience"
                                                    type="text"
                                                    placeholder="Your Experience:"
                                                    className="w-full mr-3 h-[100px]  placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                                />
                                            </div>
                                            <div className="  ">
                                                <button
                                                    className={`mt-5 w-[200px] bg-blue-500 text-white py-2 px-8 rounded-md cursor-pointer`}
                                                    disabled={isSubmitting}
                                                    type="submit"
                                                >
                                                    Save Changes
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                    // </div>
                                )}
                            </Formik>
                        )}
                    </div>
                    <div className="flex flex-col sm:mt-8 md:mt-0 lg:mt-8 border border-gray-300 rounded-md h-[500px]">
                        <div className="border-b border-gray-200 pl-5 py-3 ">
                            <span className="text-lg text-slate-900 font-semibold pb-5">
                                Account Notifications :
                            </span>
                        </div>
                        <div>
                            <form className="flex flex-col mt-7 pl-2 pr-7">
                                <div className="ml-2 mt-3">
                                    <div className="w-full flex flex-col ">
                                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                            Old password :
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Old password:"
                                            className="w-full h-10 mt-1 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                        />
                                    </div>

                                    <div className=" w-full flex flex-col mt-5">
                                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                            New password:
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="New password:"
                                            className="w-full h-10 mt-1 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                        />
                                    </div>
                                    <div className="w-full mb-3 pr-3 flex flex-col mt-5 ">
                                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                            Re-type New password
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your Bio:"
                                            className="w-full mr-3 h-[100px] mt-1  placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                        />
                                    </div>
                                    <div className="mb-4 mt-3">
                                        <Button text="Save password" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;

{
    /* <div className=" sm:w-[100%] sm:mt-10 md:w-[100%] bg-white rounded-md  ">
                    <div className="border border-gray-300 rounded-md mt-10">
                        <div className="border-b border-gray-100 pl-5 py-5 ">
                            <span className="text-lg text-slate-900 font-semibold pb-5">
                                General Notifications :
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-between px-5 py-6 border-b border-gray-200 mx-4">
                            <span className="text-xl text-red-500 font-bold">
                                Delete Account :
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col items-start justify-between px-2 py-6 mx-4">
                                <span className="text-md text-slate-900">
                                    Do you want to delete the account? Please
                                    press below "Delete" button
                                </span>
                                <button className="w-auto py-2 px-3 text-lg text-white font-bold bg-red-400 rounded-md mt-5 ">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */
}
