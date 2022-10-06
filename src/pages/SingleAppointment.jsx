import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const SingleAppointment = () => {
    const param = useParams();
    const navigate = useNavigate();
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

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    console.log("param", param);

    return (
        <div className="mx-auto ">
            <div className="ml-10">
                <span onClick={() => navigate(-1)}>
                    {" "}
                    <BsArrowLeftCircleFill className="text-blue-600 h-10 w-10 cursor-pointer" />{" "}
                </span>
            </div>
            <div>
                <div>
                    <span>Fullnames: Samuel Kirigha</span>
                    <span>age:87 </span>
                </div>
                <div>
                    <span>Email: dkirigha18@gmail.com</span>
                    <span>Phone: 0707564356</span>
                </div>
                <div>
                    <span>Appointment Date: 12/12/2022</span>
                    <span>Time: 30:40PM</span>
                </div>
                <div>
                    <span>
                        Reasons for Appointment: I need a medical check up
                    </span>
                    <span>Department: Urologist</span>
                </div>
                <div>
                    <span>Doctors Name: John Katua</span>
                    <span>Doctors Phone Number: 00998767583</span>
                </div>
                <div>
                    <span>Appointment Type: Back pain</span>
                    <span>Appointment Charges: 1500</span>
                </div>
        </div>
        <button>Update?</button>
        </div>
    );
};

export default SingleAppointment;
