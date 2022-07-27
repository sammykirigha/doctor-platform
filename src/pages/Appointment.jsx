import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RiArrowRightSLine } from "react-icons/ri";
import Button from "../components/common/Button";
import Select from "react-select";
import AppointmentModal from "../components/modals/AppointmentModal";
import TableComp from "../components/others/TableComp";
import { useEffect } from "react";
import { getDoctorAction } from "../state/actions/doctors.action";
import { GET_DOCTOR_QUERY } from "../queries/doctors";

const Appointment = ({ onClick }) => {
    const params = useLocation();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const [selectedOption, setSelectedOption] = useState(null);
    const [createUserModalOpen, setCreateUserModalOpen] = useState(false);

    const pathname = params.pathname.split("/")[1];

    const options = [
        { value: "Today", label: "Today" },
        { value: "Yesterday", label: "Yesterday" },
        { value: "Tomorrow", label: "Tomorrow" },
    ];

    const handleChange = () => {
        setSelectedOption(selectedOption);
    };

    useEffect(() => {
        if (user?.email) {
            const inputValues = {
                email: user?.email,
            };

            const details = {
                query: GET_DOCTOR_QUERY,
                variables: {
                    input: inputValues,
                },
            };

            const getDoctor = async () => {
                
            const results = await dispatch(getDoctorAction(details));
            console.log('results', results);
            }
            getDoctor()
        }
    }, [user?.email, dispatch]);

    return (
        <div className="flex flex-col mx-3">
            <div className="flex flex-row items-center justify-between mb-6">
                <div className="flex flex-col">
                    <h4 className="text-lg text-slate-800 font-semibold mb-2">
                        {pathname.toUpperCase()}
                    </h4>
                    <div>
                        <p className="paragraph inline-flex items-center justify-between text-md uppercase text-md ">
                            Docris{" "}
                            <RiArrowRightSLine className="flex items-center mx-2 mt-0.5" />{" "}
                            <span className="text-blue-700 text-md">
                                {pathname.toUpperCase()}
                            </span>{" "}
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-3">
                    <Select
                        on
                        options={options}
                        value={selectedOption}
                        onChange={handleChange}
                    />

                    {user?.role === "doctor" ? null : (
                        <Button
                            text="Appointment"
                            onClick={() => {
                                setCreateUserModalOpen(!createUserModalOpen);
                            }}
                        />
                    )}
                </div>
            </div>
            <TableComp data={"data"} />
            <AppointmentModal
                isOpen={createUserModalOpen}
                closeModal={() => {
                    setCreateUserModalOpen(false);
                }}
            />
        </div>
    );
};

export default Appointment;
