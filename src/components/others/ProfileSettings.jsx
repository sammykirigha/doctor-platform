import { ErrorMessage, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import fileUploader from "../../utils/file-uploader";
import { validateNewPassword, validatePassword } from "../../utils/validationhelper";
import InputField from "../Authentication/InputField";
import Button from "../common/Button";
import FormSelect from "./Select";

const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
];

const maritalStatusOptions = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
];

export const ProfileSettings = () => {
    const { patient } = useSelector((state) => state.patient);
    const [profileImage, setProfileImage] = useState("");
    const [uploading, setUploading] = useState(false);

    const imageUploadRef = useRef(null);
    
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

    console.log("<<<<<patient>>>>>>", patient);

    const onSubmit = async (values) => {
        const inputValues = {
            id: patient?.id,
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            image: profileImage,
            phone: values.phone,
            address: values.address,
            // age: values.age,
            gender: values.gender,
            maritalStatus: values.maritalStatus,
            description: values.description
        }
    }
    return (
        <div className="mx-5">
            <div className="flex flex-col mt-5">
                <div className="text-slate-900 text-lg">
                    Personal Information:
                </div>

                <div className="mt-5 mb-5">
                    {patient?.id && (
                        <Formik
                            initialValues={patient}
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
                                    <div className="flex my-3">
                                        <div className=" flex flex-row ">
                                            <img
                                                src={profileImage}
                                                height="100px"
                                                width="100px"
                                                className="rounded-full drop-shadow-lg"
                                                alt="doc"
                                            />
                                            <div className=" w-[300px] ml-4">
                                                <h5 className="text-md">
                                                    Change your picture{" "}
                                                </h5>
                                                <p className="text-gray-500">
                                                    use an image at least 256px
                                                    by 256px in either .jpg or
                                                    .png format
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
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
                                    <div className="flex flex-row items-center justify-between mt-3  mb-5 gap-16">
                                        <div className="flex flex-col  w-full ">
                                            <InputField
                                                name="firstname"
                                                validate=""
                                                type="text"
                                                label="First Name"
                                                placeholder="First Name:"
                                            />
                                        </div>
                                        <div className="flex flex-col  w-full ">
                                            <InputField
                                                name="lastname"
                                                validate=""
                                                type="text"
                                                label="Last Name"
                                                placeholder="Last Name:"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-between  mb-5 gap-16">
                                        <div className="flex flex-col w-full">
                                            <InputField
                                                name="email"
                                                validate=""
                                                type="text"
                                                label="Email"
                                                placeholder="Email:"
                                            />
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <InputField
                                                name="phone"
                                                validate=""
                                                type="text"
                                                label="Phone Num"
                                                placeholder="Phone:"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-between  mb-5 gap-16">
                                        <div className="flex flex-col w-full">
                                            <InputField
                                                name="address"
                                                validate=""
                                                type="text"
                                                label="Address"
                                                placeholder="Address:"
                                            />
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <InputField
                                                name="county"
                                                validate=""
                                                type="text"
                                                label="County"
                                                placeholder="County:"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-between  mb-5 gap-16">
                                        <div className="flex flex-col w-full">
                                            <InputField
                                                name="nationality"
                                                validate=""
                                                type="text"
                                                label="Nationality"
                                                placeholder="Nationality:"
                                            />
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                                Marital Status
                                            </label>
                                            <FormSelect
                                                name="maritalStatus"
                                                options={maritalStatusOptions}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center justify-between  mb-5 gap-16">
                                        <div className="flex flex-col w-full">
                                             <InputField
                                                name="description"
                                                validate=""
                                                type="text"
                                                label="Description"
                                                placeholder="Description:"
                                            />
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                                Gender
                                            </label>
                                            <FormSelect
                                                name="gender"
                                                options={genderOptions}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Button text="Save Changes" />
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    )}
                    <div className="flex flex-col mt-7">
                        <Formik
                            initialValues={{
                                password: "",
                                newPassword: "",
                            }}
                            // onSubmit={}
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
                                <Form>
                                    <h4 className="text-slate-900 text-lg font-bold">
                                        Change Password:
                                    </h4>
                                    <div className="flex flex-col mt-5 ">
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
                                    <div className="flex flex-col my-5 ">
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
                                    {/* <div className="flex flex-col mt-5 ">
                                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold">
                                            Re-type New Password
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Re-type New password"
                                            className="w-full h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                        />
                                    </div> */}
                                    
                                <Button
                                    type="submit"
                                    text="Change Password"
                                    loading={isSubmitting}
                                />
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};
