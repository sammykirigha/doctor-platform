import React, { useEffect, useRef, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";

import { Field, Form, Formik } from "formik";
import InputField from "../../components/Authentication/InputField";
import { CREATE_DOCTOR } from "../../queries/doctors";
import { useDispatch, useSelector } from "react-redux";
import { createDoctorAction } from "../../state/actions/doctors.action";
import createDoctorSchema from "./createDoctorValidation";
import { resetNotifications } from "../../state/reducers/error.reducer";
import FormSelect from "../../components/others/Select";
import fileUploader from "../../utils/file-uploader";
import { FaSpinner } from "react-icons/fa";

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
    const [profileImage, setProfileImage] = useState("");
    const [uploading, setUploading] = useState(false);

    const params = useLocation();
    const firstPathName = params.pathname.split("/")[1];
    const secondPathName = params.pathname.split("/")[2];

    const dispatch = useDispatch();
    const imageUploadRef = useRef(null);
    const navigate = useNavigate();

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
            gender: values.gender,
            image: values.image,
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

        const res =  await dispatch(createDoctorAction(details));

         if (res.payload.success) {
            navigate("/doctor", { replace: true });
        }
    };

    useEffect(() => {
        return () => dispatch(resetNotifications());
    }, [dispatch]);

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
                            {firstPathName.toUpperCase()}
                        </span>{" "}
                        <RiArrowRightSLine className="flex items-center mx-2 mt-0.5" />{" "}
                        <span className="text-blue-700 text-md">
                            {secondPathName.toUpperCase()}
                        </span>{" "}
                    </p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-col sm:w-[100%] md:flex-col lg:flex-row mt-3  gap-3 rounded-md">
                <div className="sm:w-[100%] bg-white rounded-md">
                    <Formik
                        initialValues={{
                            firstname: "",
                            lastname: "",
                            email: "",
                            phone: "",
                            address: "",
                            specialization: "",
                            department: "",
                            image: "",
                            gender: "",
                            twitterlLink: "",
                            facebooklLink: "",
                            linkedinlLink: "",
                            instagramlLink: "",
                            experience: "",
                        }}
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
                            setFieldValue,
                        }) => (
                            <Form className="flex flex-col">
                                <div className="flex flex-col sm:flex-col md:flex-row items-center justify-between sm:ml-5 md:ml-9 mr-3 mt-7 ">
                                    <div className="flex flex-row items-center ">
                                        <img
                                            src={
                                                profileImage === ""
                                                    ? "https://nellions.co.ug/wp-content/uploads/2018/06/male-placeholder-image.jpeg"
                                                    : profileImage
                                            }
                                            value={values.image}
                                            name="image"
                                            alt="doc"
                                            className=" h-[4.5rem] w-[4.5rem] sm:h-[4.5rem] sm:w-[4.5rem] md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full ml-2"
                                        />
                                        <div className="flex flex-col ml-5">
                                            <h2 className="text-lg text-slate-900 font-semibold mb-2">
                                                Upload Your Picture
                                            </h2>
                                            <p className="text-md text-gray-500 w-auto md:w-80">
                                                Use an image at least 600px by
                                                600px in either .jpg or .png
                                                format
                                            </p>
                                        </div>
                                    </div>
                                    <div className=" mb-3 flex mt-5 sm:flex-row sm:mt-4 md:flex-col lg:flex-col gap-3 items-center">
                                        <Button
                                            onClick={() =>
                                                imageUploadRef?.current?.click()
                                            }
                                            type="button"
                                            text="Upload"
                                            loading={uploading}
                                        />

                                        <input
                                            ref={imageUploadRef}
                                            onChange={async (e) => {
                                                if (
                                                    e.target.files?.length === 0
                                                )
                                                    return;

                                                const file = e.target.files[0];

                                                try {
                                                    setUploading(true);
                                                    const url =
                                                        await fileUploader(
                                                            file
                                                        );
                                                    setUploading(false);
                                                    setProfileImage(url);
                                                    setFieldValue("image", url);
                                                } catch (error) {
                                                    setUploading(false);
                                                    console.log(error);
                                                }
                                            }}
                                            className="hidden"
                                            type="file"
                                            id=""
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mt-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2 lg:gap-5">
                                    <div className="flex flex-col sm:w-full ">
                                        <InputField
                                            name="firstname"
                                            value={values.firstname}
                                            validate=""
                                            type="text"
                                            label="First Name"
                                            placeholder="First Name:"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:w-full ">
                                        <InputField
                                            name="lastname"
                                            value={values.lastname}
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
                                            value={values.email}
                                            type="email"
                                            label="Email address:"
                                            placeholder="Email address:"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:w-full">
                                        <InputField
                                            name="phone"
                                            value={values.phone}
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
                                            value={values.address}
                                            validate=""
                                            type="text"
                                            label="Address:"
                                            placeholder="Address:"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:w-full ">
                                        <InputField
                                            name="specialization"
                                            value={values.specialization}
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
                                        <FormSelect
                                            name="department"
                                            options={departmentsOptions}
                                        />
                                    </div>
                                    <div className="flex flex-col sm:w-full ">
                                        <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                            Gender
                                        </label>
                                        <FormSelect
                                            name="gender"
                                            options={genderOptions}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2 lg:gap-5">
                                    <div className="flex flex-col sm:w-full ">
                                        <InputField
                                            name="twitterlLink"
                                            value={values.twitterlLink}
                                            validate=""
                                            type="text"
                                            label="Twitter:"
                                            placeholder="userName:"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:w-full">
                                        <InputField
                                            name="facebooklLink"
                                            value={values.facebooklLink}
                                            validate=""
                                            type="text"
                                            label="Facebook:"
                                            placeholder="Facebook:"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2 lg:gap-5">
                                    <div className="flex flex-col sm:w-full  ">
                                        <InputField
                                            name="linkedinlLink"
                                            value={values.linkedinlLink}
                                            validate=""
                                            type="text"
                                            label="Linkedin:"
                                            placeholder="Linkedin:"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:w-full ">
                                        <InputField
                                            name="instagramlLink"
                                            value={values.instagramlLink}
                                            validate=""
                                            type="text"
                                            label="Instagram:"
                                            placeholder="Instagram:"
                                        />
                                    </div>
                                </div>
                                <div className="w-full mb-3 ml-3 pr-3 flex flex-col bg- ">
                                    <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                        Your Experience
                                    </label>
                                    <Field
                                        name="experience"
                                        value={values.experience}
                                        type="text"
                                        placeholder="Your Experience:"
                                        className="w-full mr-3 h-[100px]  placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                    />
                                </div>
                                <div className=" ml-3 ">
                                    <Button
                                        isSubmitting={isSubmitting}
                                        text="Create Account"
                                        type="submit"
                                    ></Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;
