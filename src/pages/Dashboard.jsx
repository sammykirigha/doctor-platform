import React, { useContext } from "react";
import Appointment from "../components/common/Appointment";
import DashboardCards from "../components/DashboardCards";
import MyChart from "../components/charts/MyChart";
import Radial from "../components/charts/Radial";
import Title from "../components/Title";
import Chatt from "../components/Chatt";
import { NavigationContext } from "../contexts/navigation.context";

const Dashboard = () => {
    const { sideBarOpen } = useContext(NavigationContext);
    return (
        <div className="mx-5">
            <Title className="mt-8 ml-5" title={"Dashbord"} />
            <DashboardCards />
            <div className="flex flex-row mt-6">
                <div className="flex flex-col w-[65%]">
                    <div className="flex flex-col">
                        <MyChart />
                        <div className=" flex flex-row">
                            <Appointment width={50} />
                            <Chatt />
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
