import React, { Fragment, useContext, useState } from "react";
import flag from "../assets/Flag-Kenya.jpg";
import tanz from "../assets/Tanzania.png";
import ug from "../assets/Uganda.png";
import rwad from "../assets/Rwanda.png";
import setting from "../assets/lg2.png";
import email from "../assets/email.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { NavigationContext } from "../navigation.context";
import { FiAlignJustify } from "react-icons/fi";
import { Menu, Transition } from "@headlessui/react";
import Dropdown from "./common/Dropdown";
import { MenuItem } from "./common/MenuItem";
import SettingsModal from "./modals/SettingsModal";

export const Styles = {
    height: "27px",
    width: "27px",
    color: "#0081CF",
    cursor: "pointer",
};

const Navbar = ({ onClick }) => {
    const { sideBarOpen, toggleSidebar } = useContext(NavigationContext);
    const [createUserModalOpen, setCreateUserModalOpen] = useState(false);
    return (
        <div
            className={`bg-white-900 py-[13px] flex justify-between border-b border-gray-200 border-l  fixed z-10 right-0 top-0 ${
                sideBarOpen ? "left-[300px]" : "left-0"
            } bg-white`}
        >
            <div className="flex w-64 justify-between ml-3">
                <div
                    onClick={toggleSidebar}
                    className="mx-4 bg-gray-100 items-center p-1 h-9 rounded-full hover:bg-blue-600 drop-shadow-lg"
                >
                    <FiAlignJustify style={Styles} />
                </div>
                <div className="flex bg-white-800 items-center">
                    <input
                        placeholder="Search Keywords..."
                        className="h-9 w-64 border border-gray-600 rounded-full pl-8 focus:border-0"
                    />
                    <BiSearchAlt2 className="text-[black] h-[25px] w-[25px] -ml-[35px] cursor-pointer" />
                </div>
            </div>

            <div className="ml-auto flex mr-3">
                <Dropdown
                    activator={() => (
                        <div className="bg-gray-300 hover:bg-blue-600 cursor-pointer w-9 h-9 rounded-full items-center ml-2">
                            <img
                                src={flag}
                                alt="logo"
                                className="m-2 w-5 h-5 rounded-full cursor-pointer"
                            />
                        </div>
                    )}
                    items={[
                        () => (
                            <MenuItem image={flag}>
                                <span>Kenya</span>
                            </MenuItem>
                        ),
                        () => (
                            <MenuItem image={tanz}>
                                <span>Tanzania</span>
                            </MenuItem>
                        ),
                        () => (
                            <MenuItem image={ug}>
                                <span>Uganda</span>
                            </MenuItem>
                        ),
                        () => (
                            <MenuItem image={rwad}>
                                <span>Rwanda</span>
                            </MenuItem>
                        ),
                    ]}
                />
                <div
                    onClick={() => {
                        setCreateUserModalOpen(!createUserModalOpen);
                    }}
                    className="bg-gray-300 hover:bg-blue-600 cursor-pointer w-9 h-9 rounded-full items-center ml-2"
                >
                    <img
                        src={setting}
                        alt="logo"
                        className="m-2 w-5 h-5 text-blue-700 rounded-full cursor-pointer"
                    />
                </div>

                <Dropdown
                    activator={() => (
                        <div className="bg-gray-300 hover:bg-blue-600 cursor-pointer w-9 h-9 rounded-full items-center ml-2">
                            <img
                                src={email}
                                alt="logo"
                                className="m-2 relative w-5 h-5 rounded-full cursor-pointer"
                            />
                            <div className="top-1 ml-6 absolute h-[20px] w-[20px] rounded-full bg-red-400 ">
                                <span className="text-gray-900 ml-1">4</span>
                            </div>
                        </div>
                    )}
                    items={[
                        () => (
                            <MenuItem image={flag}>
                                <div className="flex flex-col">
                                    <h5>You have received a new email from</h5>
                                    <div className="flex items-center justify-start">
                                        <span className="text-lg text-gray-800 font-bold" >Kenya</span>
                                        <span className="text-gray-500 ml-1 mt-1">1 hour ago</span>
                                    </div>
                                </div>
                            </MenuItem>
                        ),
                        () => (
                            <MenuItem image={flag}>
                                <div className="flex flex-col">
                                    <h5>You have received a new email from</h5>
                                    <div className="flex items-center justify-start">
                                        <span className="text-lg text-gray-800 font-bold" >Kenya</span>
                                        <span className="text-gray-500 ml-1 mt-1">1 hour ago</span>
                                    </div>
                                </div>
                            </MenuItem>
                        ),
                        () => (
                            <MenuItem image={flag}>
                                <div className="flex flex-col">
                                    <h5>You have received a new email from</h5>
                                    <div className="flex items-center justify-start">
                                        <span className="text-lg text-gray-800 font-bold" >Kenya</span>
                                        <span className="text-gray-500 ml-1 mt-1">1 hour ago</span>
                                    </div>
                                </div>
                            </MenuItem>
                        ),
                        () => (
                            <MenuItem image={flag}>
                                <div className="flex flex-col">
                                    <h5>You have received a new email from</h5>
                                    <div className="flex items-center justify-start">
                                        <span className="text-lg text-gray-800 font-bold" >Kenya</span>
                                        <span className="text-gray-500 ml-1 mt-1">1 hour ago</span>
                                    </div>
                                </div>
                            </MenuItem>
                        ),
                    ]}
                />
                <Dropdown
                    activator={() => (
                        <div className="bg-gray-300 hover:bg-blue-600 cursor-pointer w-9 h-9 rounded-full items-center ml-2">
                            <img
                                src={flag}
                                alt="logo"
                                className="m-2 w-5 h-5 rounded-full cursor-pointer"
                            />
                        </div>
                    )}
                    // items={[
                    //     () => <MenuItem icon={FiAlignJustify} text="Profile" />,
                    //     () => (
                    //         <MenuItem icon={FiAlignJustify} text="Settingd" />
                    //     ),
                    //     () => <MenuItem icon={FiAlignJustify} text="Edit" />,
                    // ]}
                />
            </div>
            <SettingsModal
                isOpen={createUserModalOpen}
                closeModal={() => {
                    setCreateUserModalOpen(false);
                }}
            />
        </div>
    );
};

export default Navbar;
