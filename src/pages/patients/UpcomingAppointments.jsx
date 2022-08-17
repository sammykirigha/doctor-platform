import React from "react";

const UpcomingAppointments = () => {
    return (
        <div className=" mt-5 bg-white ">
            <div className="h-[4rem] border border-b-gray-400 flex items-center justify-start gap-10 pl-3">
                <span className="text-xl text-gray-700">upcoming appointments</span>
                <span className="text-xl text-gray-700">past appointments</span>
            </div>
			<div>
				my appointment
			</div>
        </div>
    );
};

export default UpcomingAppointments;
