import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Appointments = () => {
    return (
        <div className=" mt-5 bg-white ">
            <div className="h-[4rem] border border-b-gray-400 flex items-center justify-start gap-10 pl-3">
                <NavLink to="upcoming-appointments"  className="text-xl text-gray-700">upcoming appointments</NavLink>
                <NavLink to="past-appointments" className="text-xl text-gray-700">past appointments</NavLink>
            </div>
			<div>
				<Outlet />
			</div>
        </div>
    );
};

export default Appointments;
