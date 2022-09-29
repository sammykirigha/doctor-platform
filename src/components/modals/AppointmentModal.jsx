import React from "react";
import { IoMdClose } from "react-icons/io";
import DatePickerField from "../others/DatePicker";
import InputField from "../Authentication/InputField";
import { Formik, Form, Field } from "formik";
import Button from "../common/Button";
import FormSelect from "../others/Select";
import GlobalModal from "./GlobalModal";
import { useState } from "react";
import { useSelector } from "react-redux";
import useFetchAllDoctor from "../../hooks/useFetchAllDoctors";

    const appointmentTypeOptions = [
    { value: "Diabetes", label: "Diabetes" },
    { value: "Back pain", label: "Back pain" },
    { value: "Coronavirus", label: "Coronavirus" },
    { value: "Coughing", label: "Coughing" },
    { value: "Dentist", label: "Dentist" },
    { value: "Highblood pressure", label: "Highblood pressure" },
    { value: "Follow up", label: "Urologist" },
    { value: "Body pain", label: "Neurologist" },
    
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
    { value: "others", label: "others" },
];
    
const getDoctors = (value, lable) => {
    return [
        {value: value, label: lable}
    ]
} 

const AppointmentModal = ({ isOpen, closeModal, id }) => {
    const { doctors } = useSelector(state => state.doctor)
    
    const availableDoctors = doctors?.map(doctor => {
        let fullName = `${doctor.firstname} ${doctor.lastname}`
        return getDoctors(doctor.id, fullName)
    })
    
    const [showOthersInput, setShowOthersInput] = useState(false);
    const [time, setTime] = useState("false");

    const showInputHandle = (e) => {
        console.log(e.target.checked);
        setShowOthersInput(e.target.checked);
    };

    const timeHandler = (e) => {
        console.log(e.target.value);
        setTime(e.target.value)
    }

    const onSubmit = async (values) => {
        console.log(values);
    };

    
    //fetchdoctors
    useFetchAllDoctor();


    return (
        <GlobalModal size="sm" id={id}>
            <div className="rounded-md flex">
                <div className=" bg-white rounded-md sm:h-auto w-full">
                    <div className="mx-3 mt-5 mb-5">
                        <Formik
                            initialValues={{
                                firstname: "",
                                lastname: "",
                                email: "",
                                phone: "",
                                date: "",
                                others: "",
                                serviceFee: "Ksh1500",
                                practitioner: "",
                                picked: "",
                                time: "",
                                otherType: "",
                                description: "",
                                department: ""
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
                                isValid,
                                setFieldValue,
                            }) => (
                                <Form className="flex flex-col w-[100%]">
                                    <div className="flex flex-col items-center justify-center my-5 ">
                                        <h2 className="text-lg font-bold text-gray-600 uppercase">
                                            Book an Appointment
                                        </h2>
                                        <span className="text-gray-500 text-lg text-center">
                                            To schedule an appointment, please
                                            fill out the information below.
                                        </span>
                                    </div>
                                    <div className="flex w-full flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-2  lg:gap-5">
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
                                    <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-5  lg:gap-5">
                                        <div className="flex flex-col sm:w-full ">
                                            <InputField
                                                name="email"
                                                value={values.email}
                                                validate=""
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
                                    <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-5  lg:gap-5">
                                        <div className="flex flex-col sm:w-full ">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500 mb-2">
                                                Date
                                            </label>
                                            <DatePickerField name="dateOfBirth" />
                                        </div>

                                        <div className="flex flex-col sm:w-full ">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                                Time
                                            </label>
                                            <input
                                                name="time"
                                                value={time}
                                                onChange={timeHandler}
                                                validate=""
                                                type="time"
                                                className=" w-full placeholder:italic placeholder:text-slate-300 placeholder:pl-3 focus:border-blue-500 focus:ring-blue-500 "
                                                placeholder="Time:"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-5  lg:gap-5">
                                        <div className="flex flex-col sm:w-full ">
                                            <InputField
                                                name="age"
                                                value={values.age}
                                                validate=""
                                                type="number"
                                                label="Age:"
                                                placeholder="age:"
                                            />
                                        </div>
                                        <div className="flex flex-col sm:w-full ">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500 mb-2">
                                                Practitioner/Doctor
                                            </label>
                                            <FormSelect
                                                name="practitioner"
                                                options={availableDoctors[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-5  lg:gap-5">
                                        <div className="flex flex-col sm:w-full ">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500 mb-2">
                                                Departments
                                            </label>
                                            <FormSelect
                                                name="department"
                                                options={departmentsOptions}
                                            />
                                            
                                        </div>
                                        <div className="flex flex-col sm:w-full ">
                                             <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500 mb-2">
                                                Appointment Type
                                            </label>
                                            <FormSelect
                                                name="practitioner"
                                                options={appointmentTypeOptions}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex w-full flex-row gap-10 items-start md:items-center mb-5 ">
                                        <div className="flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-5 ">
                                            <div className="flex flex-col sm:w-full ">
                                                <div className="flex flex-row gap-3 items-center mt-3">
                                                    <input
                                                        onChange={
                                                            showInputHandle
                                                        }
                                                        checked={
                                                            showOthersInput
                                                        }
                                                        type="checkbox"
                                                    />
                                                    <span className="text-lg text-slate-900">
                                                        Other Appointment Type
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {showOthersInput ? (
                                            <div className="flex flex-1 flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center ">
                                                <div className="flex flex-col w-full">
                                                    <InputField
                                                        name="otherType"
                                                        value={values.otherType}
                                                        validate=""
                                                        type="text"
                                                        label="Other Type:"
                                                        placeholder="Other Type:"
                                                    />
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-5  lg:gap-5">
                                        <div className="flex flex-col sm:w-full ">
                                            <InputField
                                                name="description"
                                                value={values.description}
                                                validate=""
                                                type="textarea"
                                                label="Description:"
                                                placeholder="Description:"
                                            />
                                        </div>
                                    </div>

                                    {isValid && (
                                        <div className="flex items-end justify-end gap-10   mb-5">
                                        <div className="flex flex-col items-end justify-end ">
                                            <h1 className="text:lg font-bold">
                                                Service Fees
                                            </h1>
                                            <span className="text:lg font-semibold">
                                                Total: Ksh 1500
                                            </span>
                                        </div>
                                    </div>
                                    )}
                                    

                                    <div className="  ">
                                        <Button
                                            className={`mt-5 w-[200px] bg-blue-500 text-white py-2 px-8 rounded-md cursor-pointer`}
                                            disabled={isSubmitting}
                                            type="submit"
                                            text="BOOK AN APPOINTMENT"
                                        />
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </GlobalModal>
    );
};

export default AppointmentModal;
