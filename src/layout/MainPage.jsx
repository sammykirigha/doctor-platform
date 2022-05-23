import React, { useContext, useState } from "react";
import Modal from "../components/common/Modal";
import DashboardCards from "../components/DashboardCards";
import ConfirmDeleteModal from "../components/modals/ConfirmDeleteModal";
import SettingsModal from "../components/modals/SettingsModal";
import MyChart from "../components/MyChart";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import { NavigationContext } from "../navigation.context";

const MainPage = () => {
    const { sideBarOpen } = useContext(NavigationContext);

    const [createUserModalOpen, setCreateUserModalOpen] = useState(false);

    return (
        <div className="">
            <Sidebar />
            <div className="w-full relative">
                <Navbar />
                <div
                    className={`bg-gray-200 h-screen pt-6 px-5 mt-16 ${
                        sideBarOpen && "ml-[300px]"
                    }`}
                >
                    <Title className="mt-8 ml-5" title={"Dashbord"} />
                    <DashboardCards />
                    <div className="flex flex-row w-full mt-6">
                        <div className="flex flex-col bg-blue-400 w-[60%]">
                            <div>
                                <MyChart />
                            </div>
                            <div></div>
                        </div>
                        <div className="w-[40%]">
                          <h2>Sammy</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ConfirmDeleteModal
                isOpen={createUserModalOpen}
                closeModal={() => {
                    setCreateUserModalOpen(false);
                }}
                message="center"
            /> */}
        </div>
    );
};

export default MainPage;
