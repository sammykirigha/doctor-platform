import React from "react";
import Appointment from "../components/Appointment";
import DashboardCards from "../components/DashboardCards";
import MyChart from "../components/charts/MyChart";
import Radial from "../components/charts/Radial";
import Title from "../components/Title";

const Dashboard = () => {
    return (
        <div>
            <Title className="mt-8 ml-5" title={"Dashbord"} />
            <DashboardCards />
            <div className="flex flex-row mt-6">
                <div className="flex flex-col w-[65%]">
                    <div className="flex flex-col">
                        <MyChart />
                        <div className=" flex flex-row">
                            <Appointment />
                        </div>
                    </div>
                </div>
                <div className="w-[35%] ml-5 ">
                    <Radial />
                    <Appointment width={100} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
