import React, { useContext } from "react";
import DashboardCards from "../components/others/DashboardCards";
import MyChart from "../components/charts/MyChart";
import Radial from "../components/charts/Radial";
import Title from "../components/others/Title";
import { NavigationContext } from "../contexts/navigation.context";
import ChatMessages from "../components/others/ChatMessages";

const Dashboard = () => {
    const { sideBarOpen } = useContext(NavigationContext);
    return (
        <div className="mx-5 sm:px-3 sm:pt-3 md:pt-0 lg:pb-3">
            <Title title={"Dashbord"} />
            <DashboardCards />
            <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:mt-3  md:w-[100%] lg:w-[100%]">
                <MyChart />
                <Radial />
            </div>
            <div className="w-[100%] gap-5 sm:ml-0 sm:mt-5 sm:mx-2 lg:ml-3 lg:mt-3 ">
                <ChatMessages />
            </div>
        </div>
    );
};

export default Dashboard;
