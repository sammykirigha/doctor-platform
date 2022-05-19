import React, { useContext, useState } from "react";
import Modal from "../components/common/Modal";
import DashboardCards from "../components/DashboardCards";
import ConfirmDeleteModal from "../components/modals/ConfirmDeleteModal";
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
                    className={`bg-gray-100 h-screen pt-6 px-5 mt-16 ${
                        sideBarOpen && "ml-[300px]"
                    }`}
                >
                    <Title className="mt-8 ml-5" title={"Dashbord"} />
                    <DashboardCards />

                    <button
                        onClick={() => {
                            setCreateUserModalOpen(true);
						}}
						className="bg-slate-900 text-white px-8 py-2 rounded-md cursor-pointer mt-5"
                    >
                        Open Modal
                    </button>
                </div>
            </div>
            <ConfirmDeleteModal
                isOpen={createUserModalOpen}
                closeModal={() => {
                    setCreateUserModalOpen(false);
				}}
				message="center"
            />
        </div>
    );
};

export default MainPage;
