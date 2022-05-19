import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";

const MainPage = () => {
    return (
        <div className="grid grid-cols-5 grid-flow-row-dense ">
            <Sidebar />
            <div className=" col-span-4 w-full">
                <Navbar />
				<div className="bg-gray-100 h-screen pt-6 pl-5">
					<Title className='mt-8 ml-5' title={"Dashbord"} />
				</div>
            </div>
        </div>
    );
};

export default MainPage;
