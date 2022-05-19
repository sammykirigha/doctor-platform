import React, { Fragment, useContext, useState } from "react";
import flag from "../assets/Flag-Kenya.jpg";
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

const Navbar = ({onClick}) => {
    const { sideBarOpen, toggleSidebar } = useContext(NavigationContext);
    const [createUserModalOpen, setCreateUserModalOpen] = useState(false);
    return (
        <div
            className={`bg-white-900 py-4 flex justify-between border-b border-gray-200 drop-shadow-xl fixed z-10 right-0 top-0 ${
                sideBarOpen ? "left-[300px]" : "left-0"
            } bg-white`}
        >
            <div className="flex w-64 justify-between">
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
                    <BiSearchAlt2
                        className="text-[black] h-[25px] w-[25px] -ml-[35px] cursor-pointer"
                    />
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
                        () => <MenuItem icon={FiAlignJustify} text="Kenya" />,
                        () => <MenuItem icon={FiAlignJustify} text="Uganda" />,
                        () => <MenuItem icon={FiAlignJustify} text="Tanzania" />,
                        () => <MenuItem icon={FiAlignJustify} text="Ethiopia" />,
                        () => <MenuItem icon={FiAlignJustify} text="Rwanda" />,
                        
                    ]}
                />
                <div onClick={() => {
                    setCreateUserModalOpen(!createUserModalOpen)
                }} className="bg-gray-300 hover:bg-blue-600 cursor-pointer w-9 h-9 rounded-full items-center ml-2">
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
                        () => <MenuItem icon={FiAlignJustify} text="Notifications" />,
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
                    items={[
                        () => <MenuItem icon={FiAlignJustify} text="Profile" />,
                        () => <MenuItem icon={FiAlignJustify} text="Settingd" />,
                        () => <MenuItem icon={FiAlignJustify} text="Edit" />,
                    ]}
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
