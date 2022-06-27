import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import Button from "../components/Button";
import Select from "react-select";
import AppointmentModal from "../components/modals/AppointmentModal";

const Appointment = ({onClick}) => {
    const params = useLocation();
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

    return (
        <div className="flex flex-col mx-3">
            <div className="flex flex-row items-center justify-between">
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
                        options={options}
                        value={selectedOption}
                        onChange={handleChange}
                    />
                    <Button
                        text="Appointment"
                        onClick={() => {
                            setCreateUserModalOpen(!createUserModalOpen);
                        }}
                    />
                </div>
            </div>
            <div className="flex">
                <table className="table w-full">
                    <thead className="mx-2 bg-blue-300 w-full ">
                        <tr className="text-left px-2">
                            <th className="px-2">#</th>
                            <th className="px-2">Name</th>
                            <th className="px-2">Email</th>
                            <th className="px-2">Age</th>
                            <th className="px-2">Gender</th>
                            <th className="px-2">Date</th>
                            <th className="px-2">Time</th>
                            <th className="px-2">Department</th>
                            <th className="px-2">Doctor</th>
                            <th className="px-2">Fees</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td className="px-2 py-2">1</td>
                            <td className="px-2 py-2">Doe</td>
                            <td className="px-2 py-2">doe@gmail.com</td>
                            <td className="px-2 py-2">23</td>
                            <td className="px-2 py-2">Male</td>
                            <td className="px-2 py-2">20-06-2022</td>
                            <td className="px-2 py-2">08:30am</td>
                            <td className="px-2 py-2">Cardiology</td>
                            <td className="px-2 py-2">Dr. Calvin Carno</td>
                            <td className="px-2 py-2">$ 200</td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
