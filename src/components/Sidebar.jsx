import React, { useContext } from "react";
import { sidebarOptionRoutes } from "../layout/sidebar-options-routes";
import logo from "../assets/logo3.jpg";
import { NavigationContext } from "../navigation.context";

const Sidebar = () => {
    const { sideBarOpen } = useContext(NavigationContext);
    return (
        <div className={`fixed w-[300px] bg-white h-screen top-0 left-0 z-10 ${sideBarOpen?"translate-x-0":"-translate-x-[100%]"}`}>
            <div className="bg-white-900 flex  my-1 border-b border-gray-200 h-35">
                <img
                    src={logo}
                    alt="logo"
                    height="54"
                    width="64"
                    className="ml-2 cursor-pointer"
                />
                <h3 className="text-2xl text-gray-800 font-bold pt-3 pl-1 cursor-pointer">
                    Doctris
                </h3>
            </div>
            <div className="pt-5">
                {sidebarOptionRoutes?.map((option, index) => {
                    return (
                        <div
                            key={index}
                            className="ml-5 p-1.5 flex hover:text-blue-600 "
                        >
                            <span className="h-8 justify-center rounded bg-gray-100 cursor-pointer">
                                {option.icon}
                            </span>
                            <h4 className="cursor-pointer ml-2 text-l font-normal">
                                {option.text}
                            </h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
