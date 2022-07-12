import React, { useContext } from "react";
import Footer from "../components/others/Footer";
import Navbar from "../components/others/Navbar";
import Sidebar from "../components/others/Sidebar";
import { NavigationContext } from "../contexts/navigation.context";

const Layout = ({children}) => {
    const { sideBarOpen } = useContext(NavigationContext);

    return (
        <div className="bg-gray-100 ">
            <Sidebar />
            <div className=" relative  flex flex-col  min-h-screen">
                <Navbar />
                <div  className={` min-h-screen pt-6 pb-6 mt-16 ${
                        sideBarOpen && "ml-[250px]"
                    }`}>
                   {children}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
