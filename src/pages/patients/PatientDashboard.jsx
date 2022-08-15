import React from "react";
import DashboardCards from "../../components/others/DashboardCards";
import Title from "../../components/others/Title";
import welcome from "../../data/images/welcome.png";

const PatientDashboard = () => {
    return (
        <div className="mx-5 sm:px-3 sm:pt-3 md:pt-0 lg:pb-3">
            <Title title={"Dashbord"} />
            <div className="bg-white border shadow-md flex flex-col sm:flex-col md:flex-row items-center py-4 rounded-md ">
                <img src={welcome} alt="" />
                <div className="ml-5 mt-5 sm:mt-5 md:mt-0 lg:mt-0">
                    <span className="text-xl text-slate-900 tracking-wide font-bold">
                        Welcome back
                    </span>
                    <h2 className="text-2xl text-blue-600 tracking-wider font-bold mt-2">
                        Samuel Kirigha
                    </h2>
                    <p className="text-xl mt-3 font-normal text-gray-700 pr-3">
                        We would like to take this opportunity to welcome you to
                        our practice and to thank you for choosing our
                        physicians to participate in your healthcare. We look
                        forward to providing you with personalized,
                        comprehensive health care focusing on wellness and
                        prevention.
                    </p>
                </div>
            </div>
            <DashboardCards />
        </div>
    );
};

export default PatientDashboard;
