import React from "react";
import logo from "../assets/logo3.jpg";
import { iconStyles, sidebarOptionRoutes } from "./sidebar-options-routes";
import { FiAlignJustify } from "react-icons/fi";
import { BiSearchAlt2 } from "react-icons/bi";

export const Styles = {
    height: "35px",
    width: "35px",
    color: "gray",
    cursor: "pointer",
};

const MainPage = () => {
    return (
        <div className="grid grid-cols-5 grid-flow-row-dense ">
            <div className="bg-white-500 h-screen w-75 flex-shrink-0 border-r border-gray-100">
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
            <div className=" col-span-4 w-full">
                <div className=" bg-white-900 py-2 flex justify-between">
                    <div className="flex w-64 justify-between">
                        <div className="mx-3 bg-gray-100 rounded-xlg h-9 w-9">
                            <FiAlignJustify style={Styles} />
                        </div>
                        <div className="flex bg-white-800  items-center border border-gray-600 rounded-xl">
                            <input
                                placeholder="Search Keywords..."
                                style={{width: '300px', height: '35px', borderRadius: '50px', paddingLeft: '15px'}}
                            />
                            <BiSearchAlt2
                                style={{
                                    color: "black",
                                    height: "25px",
									width: "25px",
									marginLeft: '-35px'
                                }}
                            />
                        </div>
                    </div>

                    <div className="ml-auto">
                        <span>country</span>
                        <span>country</span>
                        <span>country</span>
                        <span>country</span>
                    </div>
                </div>
                <div>main</div>
            </div>
        </div>
    );
};

export default MainPage;
