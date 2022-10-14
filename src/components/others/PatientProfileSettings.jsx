import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_PATIENT_PASSWORD, UPDATE_PATIENT } from "../../queries/patient";
import { changePateintPasswordAction, updatePatientAction } from "../../state/actions/patient.action";
import fileUploader from "../../utils/file-uploader";
import {
    validateNewPassword,
    validatePassword,
} from "../../utils/validationhelper";
import InputField from "../Authentication/InputField";
import Button from "../common/Button";
import FormSelect from "./Select";
import { FaSpinner } from "react-icons/fa";
import { resetNotifications } from "../../state/reducers/error.reducer";

const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
];

const maritalStatusOptions = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
];

const PatientProfileSettings = () => {
    const { patient } = useSelector((state) => state.patient);
    const [profileImage, setProfileImage] = useState("");
    const [uploading, setUploading] = useState(false);

    const imageUploadRef = useRef(null);
    const dispatch = useDispatch();

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
        }
    };

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
            maritalStatus: values.maritalStatus,
            description: values.description,
            nationality: values.nationality,
            county: values.county,
        };

        const details = {
            query: UPDATE_PATIENT,
            variables: {
                input: inputValues,
            },
        };

        await dispatch(updatePatientAction(details));
    };

        const handlePasswordSubmit = async (values, { resetForm }) => {
        const inputValues = {
            id: patient?.id,
            password: values.password,
            newPassword: values.newPassword,
        };

        const details = {
            query: CHANGE_PATIENT_PASSWORD,
            variables: {
                input: inputValues,
            },
        };

        await dispatch(changePateintPasswordAction(details));

        resetForm({ values: "" });
    };

    useEffect(() => {
        if (patient?.image) setProfileImage(patient?.image);
    }, [patient?.image]);

    useEffect(() => {
        return () => dispatch(resetNotifications());
    }, [dispatch]);

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
                                        <button
                                            className={`mt-5 w-fit flex justify-center items-center gap-3 bg-blue-500 text-white py-2 px-8 rounded-md ${
                                                isSubmitting
                                                    ? "cursor-not-allowed"
                                                    : "cursor-pointer"
                                            } `}
                                            disabled={isSubmitting}
                                            type="submit"
                                        >
                                            {isSubmitting && (
                                                <FaSpinner className="animate-spin" />
                                            )}{" "}
                                            Save Changes
                                        </button>
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
                            onSubmit={handlePasswordSubmit}
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

                                    <div>
                                        <button
                                            className={`mt-5 w-fit flex justify-center items-center gap-3 bg-blue-500 text-white py-2 px-8 rounded-md ${
                                                isSubmitting
                                                    ? "cursor-not-allowed"
                                                    : "cursor-pointer"
                                            } `}
                                            disabled={isSubmitting}
                                            type="submit"
                                        >
                                            {isSubmitting && (
                                                <FaSpinner className="animate-spin" />
                                            )}{" "}
                                            Change Password
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientProfileSettings;
