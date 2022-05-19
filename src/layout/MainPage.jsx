import React from "react";
import logo from "../assets/logo3.jpg";
import flag from "../assets/Flag-Kenya.jpg";
import { iconStyles, sidebarOptionRoutes } from "./sidebar-options-routes";
import { FiAlignJustify } from "react-icons/fi";
import { BiSearchAlt2 } from "react-icons/bi";

export const Styles = {
    height: "27px",
    width: "27px",
    color: "#0081CF",
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
                <div className=" bg-white-900 py-4 flex justify-between border-b border-gray-200 drop-shadow-xl">
                    <div className="flex w-64 justify-between">
                        <div className="mx-4 bg-gray-100 items-center p-1 h-9 rounded-full hover:bg-blue-600 drop-shadow-lg">
							<FiAlignJustify style={Styles} />
                        </div>
                        <div className="flex bg-white-800 items-center">
                            <input
								placeholder="Search Keywords..."
								className="h-9 w-64 border border-gray-600 rounded-full pl-8 focus:border-0"
                                // style={{width: '300px', height: '35px', borderRadius: '50px',border: '1px solid gray', paddingLeft: '15px'}}
                            />
                            <BiSearchAlt2
                                style={{
                                    color: "black",
                                    height: "25px",
									width: "25px",
									marginLeft: '-35px',
									cursor: 'pointer'
                                }}
                            />
                        </div>
                    </div>

                    <div className="ml-auto flex mr-3">
						<div className="bg-gray-300 hover:bg-blue-600 cursor-pointer w-9 h-9 rounded-full items-center ml-2">
							<img
								src={flag}
								alt="logo"
								className="m-2 w-5 h-5 rounded-full cursor-pointer"
							/>
						</div>
                        <div className="bg-gray-300 hover:bg-blue-600 cursor-pointer w-9 h-9 rounded-full items-center ml-2">
							<img
								src={flag}
								alt="logo"
								className="m-2 w-5 h-5 rounded-full cursor-pointer"
							/>
						</div>
                        <div className="bg-gray-300 hover:bg-blue-600 cursor-pointer w-9 h-9 rounded-full items-center ml-2">
							<img
								src={flag}
								alt="logo"
								className="m-2 w-5 h-5 rounded-full cursor-pointer"
							/>
						</div>
                        <div className="bg-gray-300 hover:bg-blue-600 cursor-pointer w-9 h-9 rounded-full items-center ml-2">
							<img
								src={flag}
								alt="logo"
								className="m-2 w-5 h-5 rounded-full cursor-pointer"
							/>
						</div>
                    </div>
                </div>
                <div>main</div>
            </div>
        </div>
    );
};

export default MainPage;
