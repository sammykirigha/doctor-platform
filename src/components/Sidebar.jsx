import React, { useContext } from "react";
import { sidebarOptionRoutes } from "../layout/sidebar-options-routes";
import { NavigationContext } from "../navigation.context";
import Logo from "./common/Logo";
import { BiMessageRounded } from 'react-icons/bi';

const Sidebar = () => {
    const { sideBarOpen } = useContext(NavigationContext);
    return (
        <div className={`fixed w-[300px] bg-white border-r border-gray-200 h-screen top-0 left-0 z-10 ${sideBarOpen?"translate-x-0":"-translate-x-[100%]"}`}>
           <Logo />
            <div className="pt-5 no-scrollbar overflow-y-auto h-[470px]">
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
            <div className="py-4 pl-6 border-t border-gray-200">
               <span className="h-6 w-6 bg-red-400 rounded-full"><BiMessageRounded className="h-6 w-6 text-red-400" /></span> 
            </div>
        </div>
    );
};

export default Sidebar;
