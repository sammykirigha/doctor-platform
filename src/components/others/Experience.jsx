import React from "react";
import { useSelector } from "react-redux";

const Experience = () => {
    const { doctor } = useSelector((state) => state.doctor);

    return (
        <div className="flex flex-col">
            <h5 className="text-md text-slate-900 font-semibold mt-5">Experience: </h5>
            <p className="text-md text-slate-400 mt-8 font-normal">
                {doctor?.experience}
            </p>
        </div>
    );
};

export default Experience;
