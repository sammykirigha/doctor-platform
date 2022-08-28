import React from "react";
import { RiScissorsFill } from "react-icons/ri";
import { FaInternetExplorer } from "react-icons/fa";
import { BsFillPersonFill, BsFillFileEarmarkDiffFill } from "react-icons/bs";

const iconStyles = {
    height: "30px",
    width: "30px",
    color: "white",
};

const cardsInfo = [
    {
        icon: <BsFillPersonFill style={iconStyles} />,
        number: "558",
        category: "Todays Patients",
        percentageIncrease: "18% Higher Then Last Month",
    },
    {
        icon: <BsFillFileEarmarkDiffFill style={iconStyles} />,
        number: "164",
        category: "Appointments",
        percentageIncrease: "21% Higher Then Last Month",
    },
    {
        icon: <RiScissorsFill style={iconStyles} />,
        number: "112",
        category: "Today's Operations",
        percentageIncrease: "37% Higher Then Last Month",
    },
    {
        icon: <FaInternetExplorer style={iconStyles} />,
        number: "16",
        category: "Online Appointment",
        percentageIncrease: "10% Higher Then Last Month",
    },
];

const DashboardCards = () => {
    return (
        <div className="bg-gray-50 grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 mt-5 rounded-md">
            <div className="drop-shadow-md rounded-md bg-gradient-to-r from-blue-500 to-cyan-500  flex py-5 overflow-hidden shadow-lg">
                <div className="my-1 mx-3 w-full">
                    <h4 className="text-white text-xl tracking-wide mb-2 font-semibold">
                        Todays Patients
                    </h4>
                    <div className="flex flex-row items-center justify-between mb-2">
                        <BsFillPersonFill style={iconStyles} />
                        <span className="text-white text-lg tracking-wide font-semibold">558</span>
                    </div>
                    <span className="text-white text-lg">
                        18% Higher Then Last Month
                    </span>
                </div>
            </div>
            <div className="drop-shadow-md rounded-md bg-gradient-to-r from-[#bb3767] to-[#222670]  flex py-5 overflow-hidden shadow-lg">
                <div className="my-1 mx-3 w-full">
                    <h4 className="text-white text-xl tracking-wide mb-2 font-semibold">
                        Appointments
                    </h4>
                    <div className="flex flex-row items-center justify-between mb-2">
                        <BsFillFileEarmarkDiffFill style={iconStyles} />
                         <span className="text-white text-lg tracking-wide font-semibold">164</span>
                    </div>
                    <span className="text-white text-lg">
                        18% Higher Then Last Month
                    </span>
                </div>
            </div>
            <div className="drop-shadow-md rounded-md bg-gradient-to-r from-[#6eaf7f] to-[#144f5e]  flex py-5 overflow-hidden shadow-lg">
                <div className="my-1 mx-3 w-full">
                    <h4 className="text-white text-xl tracking-wide mb-2 font-semibold">
                       Today's Operations
                    </h4>
                    <div className="flex flex-row items-center justify-between mb-2">
                        <RiScissorsFill style={iconStyles} />
                        <span className="text-white text-lg tracking-wide font-semibold">112</span>
                    </div>
                    <span className="text-white text-lg">
                        18% Higher Then Last Month
                    </span>
                </div>
            </div>
            <div className="drop-shadow-md rounded-md bg-gradient-to-r from-[#ad3c6c] to-[#d28017]  flex py-5 overflow-hidden shadow-lg">
                <div className="my-1 mx-3 w-full">
                    <h4 className="text-white text-xl tracking-wide mb-2 font-semibold">
                        Online Appointment
                    </h4>
                    <div className="flex flex-row items-center justify-between mb-2">
                        <FaInternetExplorer style={iconStyles} />
                        <span className="text-white text-lg tracking-wide font-semibold">558</span>
                    </div>
                    <span className="text-white text-lg">
                        10% Higher Then Last Month
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DashboardCards;
