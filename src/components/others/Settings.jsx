import { Form, Field, Formik, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    CHANGE_DOCTOR_PASSWORD_QUERY,
    UPDATE_DOCTOR,
} from "../../queries/doctors";
import { resetNotifications } from "../../state/reducers/error.reducer";
import Button from "../common/Button";
import InputField from "../Authentication/InputField";
import fileUploader from "../../utils/file-uploader";
import { useRef } from "react";
import {
    changePasswordAction,
    updateDoctorAction,
} from "../../state/actions/doctors.action";
import { FaArrowUp, FaRegEyeSlash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {
    NewPasswordSchema,
    validateConfirmPassword,
    validateNewPassword,
    validatePassword,
} from "../../utils/validationhelper";

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
    const [profileImage, setProfileImage] = useState("");
    const [experience, setExperience] = useState("");
    const [department, setDepartment] = useState("");
    const [uploading, setUploading] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);

    const dispatch = useDispatch();
    const imageUploadRef = useRef(null);
    const params = useParams();
    
    const handleScrollHandleBar = () => {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            setShowScrollButton(true);
        }
    };

    const topScrollHandler = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const handleExperience = (event) => {
        setExperience(event.target.value);
    };

    const handleDepartment = (event) => {
        setDepartment(event.target.value);
    };

    const handleImageChange = async (e) => {
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
        const inputValues = {
            id: doctor?.id,
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            image: profileImage,
            phone: values.phone,
            address: values.address,
            specialization: values.specialization,
            department: department,
            twitterlLink: values.twitterlLink,
            facebooklLink: values.facebooklLink,
            linkedinlLink: values.linkedinlLink,
            instagramlLink: values.instagramlLink,
            experience: experience,
        };

        const details = {
            query: UPDATE_DOCTOR,
            variables: {
                input: inputValues,
            },
        };
        await dispatch(updateDoctorAction(details));
        topScrollHandler();
    };

    const handlePasswordSubmit = async (values, { resetForm }) => {
        const inputValues = {
            id: doctor?.id,
            password: values.password,
            newPassword: values.newPassword,
        };

        const details = {
            query: CHANGE_DOCTOR_PASSWORD_QUERY,
            variables: {
                input: inputValues,
            },
        };

        await dispatch(changePasswordAction(details));
        topScrollHandler();

        resetForm({ values: "" });
    };

    useEffect(() => {
        return () => dispatch(resetNotifications());
    }, [dispatch]);

    useEffect(() => {
        if (doctor?.image) setProfileImage(doctor?.image);
    }, [doctor?.image]);

    useEffect(() => {
        return () => dispatch(resetNotifications());
    }, [dispatch]);

    useEffect(() => {
        window.onscroll = function () {
            handleScrollHandleBar();
        };
    }, []);

    return (
        <div className="mb-3">
            <h4 className="text-lg text-slate-900 font-semibold mt-5">
                Settings
            </h4>
            <div className="mt-7 flex sm:flex-col md:flex-col lg:flex-row justify-between gap-x-10 w-full">
                <div className="border border-gray-300 rounded-md w-full">
                    <div className="border-b border-gray-100 pl-5 py-3">
                        <span className="text-lg text-slate-900 font-semibold">
                            Personal Information :
                        </span>
                    </div>
                    {doctor?.id && (
                        <Formik
                            initialValues={doctor}
                            onSubmit={onSubmit}
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
                                <Form className="flex flex-col">
                                    <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between sm:ml-5 md:ml-9 mr-3 mt-7 ">
                                        <div className="flex flex-row items-center ">
                                            <span className="rounded-full sm:h-12 sm:w-10 md:h-20 md:w-20 flex items-center border border-gray-300 ">
                                                <img
                                                    src={profileImage}
                                                    alt="doc"
                                                    className=" sm:h-12 sm:w-10 md:h-20  md:w-20 rounded-full"
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
                                                <select
                                                    className="outline px-2 placeholder:italic pl-2 placeholder:text-slate-300 outline-gray-200 h-[40px] rounded-md placeholder:pl-3  focus:border-0 focus:outline focus:outline-blue-600"
                                                    value={department}
                                                    onChange={handleDepartment}
                                                >
                                                    {departmentsOptions?.map(
                                                        (depart) => (
                                                            <option
                                                                value={
                                                                    depart.value
                                                                }
                                                            >
                                                                {depart.label}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
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
                                            <InputField
                                                label=" Your Experience"
                                                name="experience"
                                                type="textarea"
                                                row={3}
                                                placeholder="Your Experience:"
                                            />
                                        </div>
                                        <div className="">
                                            <Button
                                                type="submit"
                                                loading={isSubmitting}
                                                text="Save Changes"
                                            />
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    )}
                </div>

                {/* account notification */}
                <div className="border h-[500px] w-full rounded-md">
                    <div className="border-b border-gray-200 pl-5 py-3 ">
                        <span className="text-lg text-slate-900 font-semibold pb-5">
                            Change your password:
                        </span>
                    </div>
                    <Formik
                        initialValues={{
                            password: "",
                            newPassword: "",
                        }}
                        onSubmit={handlePasswordSubmit}
                        // validationSchema={NewPasswordSchema}
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
                            <Form className="flex flex-col mt-7 px-5">
                                <div className="flex flex-col gap-2 mt-4">
                                    <InputField
                                        name="password"
                                        validate={validatePassword}
                                        type="password"
                                        label="Enter Old Password:"
                                    />
                                    <ErrorMessage name="password">
                                        {(error) => (
                                            <p className="text-md text-red-600">
                                                {" "}
                                                {error}
                                            </p>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div className="flex flex-col gap-2 mt-4 w-full mb-5 relative">
                                    <InputField
                                        name="newPassword"
                                        validate={validateNewPassword}
                                        type="password"
                                        label=" New Password:"
                                    />

                                    <ErrorMessage name="confirmnewPassword">
                                        {(error) => (
                                            <p className="text-md text-red-600">
                                                {" "}
                                                {error}
                                            </p>
                                        )}
                                    </ErrorMessage>
                                </div>

                                <div className="flex flex-col gap-2 mt-4 w-full mb-5 relative">
                                    <InputField
                                        name="confirmnewPassword"
                                        validate={validateNewPassword}
                                        type="password"
                                        label="Confirm New Password:"
                                    />

                                    <ErrorMessage name="confirmnewPassword">
                                        {(error) => (
                                            <p className="text-md text-red-600">
                                                {" "}
                                                {error}
                                            </p>
                                        )}
                                    </ErrorMessage>
                                </div>


                                <Button
                                    type="submit"
                                    text="Save Changes"
                                    loading={isSubmitting}
                                />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

            <div className=" flex items-center justify-end mr-5 mt-5">
                {showScrollButton && (
                    <button
                        onClick={topScrollHandler}
                        className="bg-blue-700 h-12 w-12 rounded-full flex items-center justify-center"
                        text="Top"
                    >
                        <FaArrowUp className="text-white h-5 w-5" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Settings;
