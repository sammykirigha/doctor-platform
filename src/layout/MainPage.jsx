import React, { useContext } from "react";
import DashboardCards from "../components/DashboardCards";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import { NavigationContext } from "../navigation.context";

const MainPage = () => {
	const { sideBarOpen } = useContext(NavigationContext);

    return (
        <div className="">
            <Sidebar />
            <div className="w-full relative">
                <Navbar />
                <div className={`bg-gray-100 h-screen pt-6 px-5 mt-16 ${sideBarOpen && "ml-[300px]"}`}>
                    <Title className="mt-8 ml-5" title={"Dashbord"} />
                    <DashboardCards />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
