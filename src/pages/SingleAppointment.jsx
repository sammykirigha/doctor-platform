import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { CREATE_APPOINTMENT, GET_APPOINTMENTS_BY_DATE } from "../queries/appointments";
import { createAppointmentAction, getAppointmentsByDate } from "../state/actions/appointments";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctorsdAction } from "../state/actions/doctors.action";
import useFetchAllDoctor from "../hooks/useFetchAllDoctors";
import { FaSpinner } from "react-icons/fa";
import InputField from "../components/Authentication/InputField";
import { ErrorMessage, Form, Formik } from "formik";
import FormSelect from "../components/others/Select";

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

const SingleAppointment = () => {
    const param = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [appointment, setAppointment] = useState({})

    const params = useParams();
    const [showOthersInput, setShowOthersInput] = useState(false);
    const { doctors } = useSelector((state) => state.doctor);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        patientId: "",
        patient_firstname: appointment.patient_firstname,
        patient_lastname: appointment.patient_lastname,
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
    useEffect(() => {
        const fetchAppointment = async () => {
            const inputValue = {
                id: {
                   eq: param.appointmentId
                },
            };

            const details = {
                query: GET_APPOINTMENTS_BY_DATE,
                variables: {
                    filters: inputValue,
                },
            };
            let res = await dispatch(getAppointmentsByDate(details));
            setAppointment(res?.payload?.appointments[0])
        };

        fetchAppointment();
    }, [dispatch, param.appointmentId]);

    return (
     <div className="rounded-md flex mx-10 ">
                <div className=" bg-white rounded-md sm:h-auto w-full px-20">
                    <div className="mt-5 mb-5">
                    {appointment?.id && (
                        <Formik
                            initialValues={appointment}
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
                                    
                                    <div className="flex flex-row items-center justify-between mt-3  mb-5 gap-16">
                                        <div className="flex flex-col  w-full ">
                                            <InputField
                                                name="patient_firstname"
                                                validate=""
                                                type="text"
                                                label="First Name"
                                                placeholder="First Name:"
                                            />
                                        </div>
                                        <div className="flex flex-col  w-full ">
                                            <InputField
                                                name="patient_lastname"
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
                                                name="patient_email"
                                                validate=""
                                                type="text"
                                                label="Email"
                                                placeholder="Email:"
                                            />
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <InputField
                                                name="patient_phone"
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
                                                name="appointment_type"
                                                validate=""
                                                type="text"
                                                label="Appointment Type"
                                                placeholder="Address:"
                                            />
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <InputField
                                                name="department"
                                                validate=""
                                                type="text"
                                                label="Department"
                                                placeholder="Address:"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-between  mb-5 gap-16">
                                        <div className="flex flex-col w-full">
                                            <InputField
                                                name="time"
                                                validate=""
                                                type="text"
                                                label="Time"
                                                placeholder="Time:"
                                            />
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <InputField
                                                name="date"
                                                validate=""
                                                type="text"
                                                label="Date"
                                                placeholder="Date:"
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
                </div>
                </div>
            </div>
    );
};

export default SingleAppointment;
