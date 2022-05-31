import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavigationContext } from "../contexts/navigation.context";
import Logo from "./common/Logo";
import { BiMessageRounded } from "react-icons/bi";
import { links } from "../data/AllLinks";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";

const Sidebar = () => {
    const { sideBarOpen } = useContext(NavigationContext);
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState("");
    return (
        <div
            className={`fixed w-[250px] bg-white border-r border-gray-200 h-screen top-0 left-0 z-10 ${
                sideBarOpen ? "translate-x-0" : "-translate-x-[100%]"
            }`}
        >
            <Logo />
            <div className="pt-2 overflow-hidden hover:overflow-y-auto h-[470px] bg-white">
                <>
                    {links?.map(({ icon, link, name, childrenLinks }, index) => {
                            if (childrenLinks?.length > 0) {
                                return (
                                    <div className="w-full">
                                        <div className=" flex flex-col items-center pl-3">
                                            <div className="flex justify-between w-full items-center pr-3" >
                                                <div className="flex flex-row items-center cursor-pointer pt-3 justify-between ">
                                                    <div className="w-8 h-8 bg-gray-50 flex items-center rounded-md pl-2 mr-2">{icon}</div>
                                                    <div className="text-md text-gray-500 font-semibold">{name}</div>
                                                </div>

                                                <div className="flex items-center mt-2.5 cursor-pointer"
                                                    onClick={() =>
                                                        setIsActive(isActive === name?"":name)
                                                    }
                                                >
                                                    {isActive === name ? (
                                                        <RiArrowUpSLine className="text-gray-500" />
                                                    ) : (
                                                        <RiArrowDownSLine className="text-gray-500" />
                                                    )}
                                                </div>
                                            </div>

                                            <div className="bg-white w-full pl-5">
                                                {isActive === name &&
                                                    childrenLinks.map(
                                                        (child, index) => {
                                                            return (
                                                                <di>
                                                                    <div key={index} className='' onClick={() =>navigate(`${link}${child.link}`)} >
                                                                        <div className="flex pt-3 mx-3 text-sm text-gray-500 cursor-pointer items-center">
                                                                            <span><IoMdArrowDropright className="text-slate-800" /></span>
                                                                            {child.name }
                                                                        </div>
                                                                    </div>
                                                                </di>
                                                            );
                                                        }
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                             return (
                                    <div key={index} className="ml-3 mt-3" >
                                        <div  onClick={() => navigate(link)} className='flex items-center cursor-pointer' >
                                            <div className="w-7 h-7 bg-gray-50 flex items-center rounded-md pl-2 mr-2">{icon}</div>
                                            <div className="text-md text-gray-500 font-semibold">{name}</div>
                                        </div>
                                    </div>
                                );
                        }    
                        }
                       
                    )}
                </>
            </div>
            {/* <div className="py-4 pl-6 border-t border-gray-200">
                <span className="h-6 w-6 bg-red-400 rounded-full">
                    <BiMessageRounded className="h-6 w-6 text-red-400" />
                </span>
            </div> */}
        </div>
    );
};

export default Sidebar;
