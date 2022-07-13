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
        <div className="mx-5  sm:px-3 sm:pt-3 lg:pb-3">
            <Title className="mt-8 ml-5" title={"Dashbord"} />
            <DashboardCards />
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:mr-3 bg-gray-50 ">
                    <div className="flex flex-col sm:w-[100%] sm:mt-3  md:w-[100%] lg:w-[100%]">
                        <MyChart />
                        <div className=" grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mt-5 sm:gap-5">
                            <Appointment />
                            <ChatMessages  height={"200px"} />
                        </div>
                    </div>
                <div className="w-[100%] gap-5 sm:ml-0 sm:mt-5 sm:mx-2 lg:ml-3 lg:mt-3 ">
                    <Radial />
                    <Appointment width={100} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
