import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RiArrowRightSLine } from "react-icons/ri";
import Button from "../components/common/Button";
import Select from "react-select";
import AppointmentModal from "../components/modals/AppointmentModal";
import { FaSpinner } from "react-icons/fa";
import useFetchDoctor from "../hooks/useFetchDoctor";
import AppointmentTable from "../components/others/AppointmentTable";
import { resetNotifications } from "../state/reducers/error.reducer";
import useFetchPatient from "../hooks/useFetchPatients";

const Appointment = ({ loading, appointments }) => {
    const params = useLocation();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { doctor } = useSelector((state) => state.doctor);
    const [selectedOption, setSelectedOption] = useState(null);

    const pathname = params.pathname.split("/")[1];

    const options = [
        { value: "Today", label: "Today" },
        { value: "Yesterday", label: "Yesterday" },
        { value: "Tomorrow", label: "Tomorrow" },
    ];

    const handleChange = () => {
        setSelectedOption(selectedOption);
    };

    useFetchDoctor();
    useFetchPatient();

    useEffect(() => {
        return () => dispatch(resetNotifications());
    }, [dispatch]);

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
                        <Button>
                            <label for="new-appointment" class="modal-button">
                                New Appointment
                            </label>
                        </Button>
                    )}
                </div>
            </div>
            {loading ? (
                <div className="flex items-center justify-center mt-5">
                    <FaSpinner className="h-24 w-24 text-blue-600 animate-spin" />
                </div>
            ) : doctor?.appointments.length > 0 ? (
                <AppointmentTable data={doctor?.appointments} />
            ) : (
                <div className="flex items-center justify-center">
                    <div className="bg-white border h-auto  rounded-md flex items-center justify-center w-auto py-3 sm:w-auto sm:py-auto md:w-[500px] lg:w-[500px] mx-autho">
                        <h1 className="text-xl text-gray-700 px-10">
                            You do not have any appointments for now
                        </h1>
                    </div>
                </div>
            )}

            <AppointmentModal id="new-appointment" />
        </div>
    );
};

export default Appointment;
