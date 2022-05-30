import React, { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { NavigationContext } from "../context/navigation.context";

const Layout = ({children}) => {
    const { sideBarOpen } = useContext(NavigationContext);

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
                   {children}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
