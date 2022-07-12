import React, { useContext } from "react";
import Appointment from "../components/common/Appointment";
import DashboardCards from "../components/others/DashboardCards";
import MyChart from "../components/charts/MyChart";
import Radial from "../components/charts/Radial";
import Title from "../components/others/Title";
import { NavigationContext } from "../contexts/navigation.context";
import ChatMessages from "../components/others/ChatMessages";

const Dashboard = () => {
    const { sideBarOpen } = useContext(NavigationContext);
    return (
        <div className="mx-5">
            <Title className="mt-8 ml-5" title={"Dashbord"} />
            <DashboardCards />
            <div className="flex flex-row sm:flex-col md:flex-row lg:flex-row mt-6">
                <div className=" w-[65%]">
                    <div className="flex flex-col">
                        <MyChart />
                        <div className=" flex flex-row mt-5">
                            <Appointment width={50} />
                            <ChatMessages width={'50%'}  height={"200px"} />
                        </div>
                    </div>
                </div>
                <div className="w-[35%] ml-5 gap-5 ">
                    <Radial />
                    <Appointment width={100} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
