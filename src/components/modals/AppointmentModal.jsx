import React from "react";
import Button from "../common/Button";
import GlobalModal from "./GlobalModal";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFetchAllDoctor from "../../hooks/useFetchAllDoctors";
import { FaSpinner } from "react-icons/fa";
import { CREATE_APPOINTMENT } from "../../queries/appointments";
import { createAppointmentAction } from "../../state/actions/appointments";

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
    return [{ value: value, label: lable }];
};

const AppointmentModal = ({ isOpen, closeModal, id }) => {
    const params = useParams();
    const dispatch = useDispatch();
    const [showOthersInput, setShowOthersInput] = useState(false);
    const { doctors } = useSelector((state) => state.doctor);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        patientId: "",
        patient_firstname: "",
        patient_lastname: "",
        age: 0,
        department: "",
        doctorId: "",
        date: "",
        time: "",
        patient_email: "",
        patient_phone: "",
        description: "",
        appointment_type: "",
        fees: "1500",
        other_type: "",
    });

   

    const availableDoctors = doctors?.map((doctor) => {
        let fullName = `${doctor.firstname} ${doctor.lastname}`;
        return getDoctors(doctor.id, fullName);
    });

    const showInputHandle = (e) => {
        setShowOthersInput(e.target.checked);
    };

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const inputVariables = { ...state, patientId: params.id, age: parseInt(state.age) };
        const details = {
            query: CREATE_APPOINTMENT,
            variables: {
            input: inputVariables
            }
        }
        await dispatch(createAppointmentAction(details))
        console.log({...state, patientId: params.id});
        setLoading(false);
        setState({
            patientId: "",
            patient_firstname: "",
            patient_lastname: "",
            age: 0,
            department: "",
            doctorId: "",
            date: "",
            time: "",
            patient_email: "",
            patient_phone: "",
            description: "",
            appointment_type: "",
            fees: "",
            other_type: "",
        });
    };

    //fetchdoctors
    useFetchAllDoctor();

    return (
        <GlobalModal size="sm" id={id}>
            <div className="rounded-md flex">
                <div className=" bg-white rounded-md sm:h-auto w-full">
                    <div className="mx-3 mt-5 mb-5">
                        <form
                            onSubmit={onSubmit}
                            className="flex flex-col w-[100%]"
                        >
                            <div className="flex flex-col items-center justify-center my-5 ">
                                <h2 className="text-lg font-bold text-gray-600 uppercase">
                                    Book an Appointment
                                </h2>
                                <span className="text-gray-500 text-lg text-center">
                                    To schedule an appointment, please fill out
                                    the information below.
                                </span>
                            </div>
                            <div className="flex w-full flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-2  lg:gap-5">
                                <div className="flex flex-col sm:w-full ">
                                    <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                        First Name
                                    </label>
                                    <input
                                        name="patient_firstname"
                                        value={state.patient_firstname}
                                        onChange={changeHandler}
                                        validate=""
                                        type="text"
                                        className=" w-full placeholder:italic placeholder:text-slate-300 placeholder:pl-3 focus:border-blue-500 focus:ring-blue-500 "
                                        placeholder="First Name:"
                                    />
                                </div>
                                <div className="flex flex-col sm:w-full ">
                                    <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                        Last Name
                                    </label>
                                    <input
                                        name="patient_lastname"
                                        value={state.patient_lastname}
                                        onChange={changeHandler}
                                        validate=""
                                        type="text"
                                        className=" w-full placeholder:italic placeholder:text-slate-300 placeholder:pl-3 focus:border-blue-500 focus:ring-blue-500 "
                                        placeholder="Last Name:"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-5  lg:gap-5">
                                <div className="flex flex-col sm:w-full ">
                                    <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                        Email
                                    </label>
                                    <input
                                        name="patient_email"
                                        value={state.patient_email}
                                        onChange={changeHandler}
                                        validate=""
                                        type="text"
                                        className=" w-full placeholder:italic placeholder:text-slate-300 placeholder:pl-3 focus:border-blue-500 focus:ring-blue-500 "
                                        placeholder="Email address:"
                                    />
                                </div>
                                <div className="flex flex-col sm:w-full">
                                    <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                        Phone
                                    </label>
                                    <input
                                        name="patient_phone"
                                        value={state.patient_phone}
                                        onChange={changeHandler}
                                        validate=""
                                        type="text"
                                        className=" w-full placeholder:italic placeholder:text-slate-300 placeholder:pl-3 focus:border-blue-500 focus:ring-blue-500 "
                                        placeholder="Phone Num:"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-5  lg:gap-5">
                                <div className="flex flex-col sm:w-full ">
                                    <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500 mb-2">
                                        Date
                                    </label>
                                    <input
                                        name="date"
                                        min={
                                            new Date()
                                                .toISOString()
                                                .split("T")[0]
                                        }
                                        value={state.date}
                                        onChange={changeHandler}
                                        validate=""
                                        type="date"
                                        className=" w-full placeholder:italic placeholder:text-slate-300 placeholder:pl-3 focus:border-blue-500 focus:ring-blue-500 "
                                        placeholder="Date:"
                                    />
                                </div>

                                <div className="flex flex-col sm:w-full ">
                                    <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                        Time
                                    </label>
                                    <input
                                        name="time"
                                        value={state.time}
                                        onChange={changeHandler}
                                        validate=""
                                        type="time"
                                        className=" w-full placeholder:italic placeholder:text-slate-300 placeholder:pl-3 focus:border-blue-500 focus:ring-blue-500 "
                                        placeholder="Time:"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-5  lg:gap-5">
                                <div className="flex flex-col sm:w-full ">
                                    <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                        Age
                                    </label>
                                    <input
                                        name="age"
                                        value={state.age}
                                        onChange={changeHandler}
                                        validate=""
                                        type="number"
                                        className=" w-full placeholder:italic placeholder:text-slate-300 placeholder:pl-3 focus:border-blue-500 focus:ring-blue-500 "
                                        placeholder="Age:"
                                    />
                                </div>
                                <div className="flex flex-col sm:w-full ">
                                    <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500 mb-2">
                                        Practitioner/Doctor
                                    </label>
                                    <select
                                        value={state.doctorId}
                                        name="doctorId"
                                        onChange={changeHandler}
                                    >
                                        <option value="">Select Doc</option>
                                        {availableDoctors[0]?.map(
                                            (item, index) => {
                                                return (
                                                    <option
                                                        key={index}
                                                        value={item.value}
                                                    >
                                                        {item.label}
                                                    </option>
                                                );
                                            }
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-5  lg:gap-5">
                                <div className="flex flex-col sm:w-full ">
                                    <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500 mb-2">
                                        Department
                                    </label>
                                    <select
                                        value={state.department}
                                        name="department"
                                        onChange={changeHandler}
                                    >
                                        <option value="">
                                            Select Department
                                        </option>
                                        {departmentsOptions?.map(
                                            (item, index) => {
                                                return (
                                                    <option
                                                        key={index}
                                                        value={item.value}
                                                    >
                                                        {item.label}
                                                    </option>
                                                );
                                            }
                                        )}
                                    </select>
                                </div>
                                <div className="flex flex-col sm:w-full ">
                                    <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500 mb-2">
                                        Appointment Type
                                    </label>
                                    <select
                                        value={state.appointment_type}
                                        name="appointment_type"
                                        onChange={changeHandler}
                                    >
                                        <option value="">Select type</option>
                                        {appointmentTypeOptions?.map(
                                            (item, index) => {
                                                return (
                                                    <option
                                                        key={index}
                                                        value={item.value}
                                                    >
                                                        {item.label}
                                                    </option>
                                                );
                                            }
                                        )}
                                    </select>
                                </div>
                            </div>

                            <div className="flex w-full flex-row gap-10 items-start md:items-center mb-5 ">
                                <div className="flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-5 ">
                                    <div className="flex flex-col sm:w-full ">
                                        <div className="flex flex-row gap-3 items-center mt-3">
                                            <input
                                                onChange={showInputHandle}
                                                checked={showOthersInput}
                                                type="checkbox"
                                            />
                                            <span className="text-lg text-slate-900">
                                                Other Appointment Type
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {showOthersInput ? (
                                    <div className="flex flex-1 flex-col ml-5 gap-10 sm:flex-col md:flex-row sm:items-start md:items-center ">
                                        <div className="flex flex-col w-full">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                                Other Type
                                            </label>
                                            <input
                                                name="other_type"
                                                value={state.other_type}
                                                onChange={changeHandler}
                                                validate=""
                                                type="text"
                                                className="  w-full placeholder:italic placeholder:text-slate-300 placeholder:pl-3 focus:border-blue-500 focus:ring-blue-500 "
                                                placeholder="Other Type:"
                                            />
                                        </div>
                                    </div>
                                ) : null}
                            </div>

                            <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between  mb-5  lg:gap-5">
                                <div className="flex flex-col sm:w-full ">
                                    <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                        Other Type
                                    </label>
                                    <input
                                        name="description"
                                        value={state.description}
                                        onChange={changeHandler}
                                        validate=""
                                        type="text"
                                        className="  w-full placeholder:italic placeholder:text-slate-300 placeholder:pl-3 focus:border-blue-500 focus:ring-blue-500 "
                                        placeholder="Other Type:"
                                    />
                                </div>
                            </div>

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

                            <div className="  ">
                                <button
                                    className={`mt-5 w-full flex justify-center items-center gap-3 bg-blue-500 text-white py-2 px-8 rounded-md ${
                                        loading
                                            ? "cursor-not-allowed"
                                            : "cursor-pointer"
                                    } `}
                                    disabled={loading}
                                    type="submit"
                                >
                                    {loading && (
                                        <FaSpinner className="animate-spin" />
                                    )}{" "}
                                    Book An Appointment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </GlobalModal>
    );
};

export default AppointmentModal;
