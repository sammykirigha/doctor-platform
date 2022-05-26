import React, { useContext, useState } from "react";
import Appointment from "../components/Appointment";
import Chatt from "../components/Chatt";
import Modal from "../components/common/Modal";
import DashboardCards from "../components/DashboardCards";
import Footer from "../components/Footer";
import ConfirmDeleteModal from "../components/modals/ConfirmDeleteModal";
import SettingsModal from "../components/modals/SettingsModal";
import MyChart from "../components/MyChart";
import Navbar from "../components/Navbar";
import Radial from "../components/Radial";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import { NavigationContext } from "../navigation.context";

const MainPage = () => {
    const { sideBarOpen } = useContext(NavigationContext);

    const [createUserModalOpen, setCreateUserModalOpen] = useState(false);

    return (
        <div className="bg-gray-100 ">
            <Sidebar />
            <div className=" relative  flex flex-col  min-h-screen">
                <Navbar />
                <div
                    className={` pt-6 pb-6 mt-16 ${
                        sideBarOpen ? "pl-[300px]" && "px-4":" px-5"
                    }`}
                >
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
                        <div className="w-[35%] ml-5">
                            <Radial />
                            <Appointment width={100} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default MainPage;
