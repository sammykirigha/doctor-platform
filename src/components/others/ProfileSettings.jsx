import { Form, Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import InputField from "../Authentication/InputField";
import Button from "../common/Button";
import DatePickerField from "./DatePicker";
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

    console.log("<<<<<patient>>>>>>", patient);
    return (
        <div className="mx-5">
            <div className="flex flex-col mt-5">
                <div className="text-slate-900 text-lg">
                    Personal Information:
                </div>

                <div className="mt-5 mb-5">
                    {patient.id && (
                        <Formik
                            initialValues={patient}
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
                                setFieldValue,
                            }) => (
                                <Form className="flex flex-col">
                                    <div className="flex my-3">
                                        <div className=" flex flex-row ">
                                            <img
                                                src="https://nellions.co.ug/wp-content/uploads/2018/06/male-placeholder-image.jpeg"
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
                                            <button className="bg-blue-600 text-white py-2 px-3 rounded-md cursor-pointer">
                                                Upload
                                            </button>
                                            <button className="bg-blue-100 text-blue-600 py-2 px-3 rounded-md cursor-pointer">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-between mt-3  mb-5 gap-16">
                                        <div className="flex flex-col  w-full ">
                                            <InputField
                                                name="firstname"
                                                value={values.firstname}
                                                validate=""
                                                type="text"
                                                label="First Name"
                                                placeholder="First Name:"
                                            />
                                        </div>
                                        <div className="flex flex-col  w-full ">
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
                                    <div className="flex flex-row items-center justify-between  mb-5 gap-16">
                                        <div className="flex flex-col w-full">
                                            <InputField
                                                name="email"
                                                value={values.email}
                                                validate=""
                                                type="text"
                                                label="Email"
                                                placeholder="Email:"
                                            />
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <InputField
                                                name="phone"
                                                value={values.phone}
                                                validate=""
                                                type="text"
                                                label="Phone"
                                                placeholder="Phone:"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-between  mb-5 gap-16">
                                        <div className="flex flex-col w-full">
                                            <InputField
                                                name="address"
                                                value={values.address}
                                                validate=""
                                                type="text"
                                                label="Address"
                                                placeholder="Address:"
                                            />
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <InputField
                                                name="county"
                                                value={values.county}
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
                                                value={values.nationality}
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
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500 mb-2">
                                                Age
                                            </label>
                                            <input type="number" />
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
                        <h4 className="text-slate-900 text-lg font-bold">
                            Change Password:
                        </h4>
                        <div className="flex flex-col mt-5 ">
                            <label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold">
                                Old Password:
                            </label>
                            <input
                                type="text"
                                placeholder="Old password"
                                className="w-full h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                            />
                        </div>
                        <div className="flex flex-col mt-5 ">
                            <label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold">
                                New Password
                            </label>
                            <input
                                type="text"
                                placeholder="New password"
                                className="w-full h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                            />
                        </div>
                        <div className="flex flex-col mt-5 ">
                            <label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold">
                                Re-type New Password
                            </label>
                            <input
                                type="text"
                                placeholder="Re-type New password"
                                className="w-full h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                            />
                        </div>
                        <button className="px-3 py-2 bg-blue-600 text-white w-[200px] mt-10 rounded-md">
                            Save password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
