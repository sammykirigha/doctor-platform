import React, { useContext } from "react";
import flag from "../assets/Flag-Kenya.jpg";
import { FiAlignJustify } from "react-icons/fi";
import { BiSearchAlt2 } from "react-icons/bi";
import { NavigationContext } from "../navigation.context";

export const Styles = {
    height: "27px",
    width: "27px",
    color: "#0081CF",
    cursor: "pointer",
};

const Navbar = () => {
    const { sideBarOpen, toggleSidebar } = useContext(NavigationContext);
    return (
        <div className={`bg-white-900 py-4 flex justify-between border-b border-gray-200 drop-shadow-xl fixed z-10 right-0 top-0 ${sideBarOpen ? "left-[300px]":"left-0"} bg-white`}>
            <div className="flex w-64 justify-between">
                <div onClick={toggleSidebar} className="mx-4 bg-gray-100 items-center p-1 h-9 rounded-full hover:bg-blue-600 drop-shadow-lg">
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
                            marginLeft: "-35px",
                            cursor: "pointer",
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
    );
};

export default Navbar;
