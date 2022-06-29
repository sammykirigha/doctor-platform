import React, { useContext, useState } from "react";
import flag from "../data/images/Flag-Kenya.jpg";
import tanz from "../data/images/Tanzania.png";
import ug from "../data/images/Uganda.png";
import rwad from "../data/images/Rwanda.png";
import setting from "../data/images/lg2.png";
import email from "../data/images/email.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { NavigationContext } from "../contexts/navigation.context";
import { FiAlignJustify } from "react-icons/fi";
import { MdAvTimer } from "react-icons/md";
import { RiSettings5Line } from "react-icons/ri";
import {BiLogInCircle} from 'react-icons/bi'
import Dropdown from "./common/Dropdown";
import { MenuItem } from "./common/MenuItem";
import SettingsModal from "./modals/SettingsModal";
import image1 from "../data/images/01.jpg";
import image2 from "../data/images/02.jpg";
import image3 from "../data/images/03.jpg";

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
                sideBarOpen ? "left-[250px]" : "left-0"
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
                    width={200}
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
                    width={400}
                    scrollHeight={200}
                    activator={() => (
                        <div className="bg-gray-300 w hover:bg-blue-600 cursor-pointer w-9 h-9 rounded-full items-center ml-2">
                            <img
                                src={email}
                                alt="logo"
                                className="m-2 relative w-5 h-5 rounded-full cursor-pointer"
                            />
                            <div className="-top-3 ml-6 absolute h-[20px] w-[25px] rounded-full bg-red-400 ">
                                <span className="text-gray-900 ml-0">4</span>
                            </div>
                        </div>
                    )}
                    items={[
                        () => (
                            <MenuItem image={image1}>
                                <div className="flex flex-col my-3 ">
                                    <h5>You have received a new email from</h5>
                                    <div className="flex items-center justify-start">
                                        <span className="text-lg text-gray-800 font-bold">
                                            Kenya
                                        </span>
                                        <span className="text-gray-500 ml-1 mt-1">
                                            1 hour ago
                                        </span>
                                    </div>
                                </div>
                            </MenuItem>
                        ),
                        () => (
                            <MenuItem image={image2}>
                                <div className="flex flex-col mb-3">
                                    <h5>You have received a new email from</h5>
                                    <div className="flex items-center justify-start">
                                        <span className="text-lg text-gray-800 font-bold">
                                            Kenya
                                        </span>
                                        <span className="text-gray-500 ml-1 mt-1">
                                            1 hour ago
                                        </span>
                                    </div>
                                </div>
                            </MenuItem>
                        ),
                        () => (
                            <MenuItem image={image3}>
                                <div className="flex flex-col mb-3">
                                    <h5>You have received a new email from</h5>
                                    <div className="flex items-center justify-start">
                                        <span className="text-lg text-gray-800 font-bold">
                                            Kenya
                                        </span>
                                        <span className="text-gray-500 ml-1 mt-1">
                                            1 hour ago
                                        </span>
                                    </div>
                                </div>
                            </MenuItem>
                        ),
                        () => (
                            <MenuItem image={image3}>
                                <div className="flex flex-col mb-3">
                                    <h5>You have received a new email from</h5>
                                    <div className="flex items-center justify-start">
                                        <span className="text-lg text-gray-800 font-bold">
                                            Kenya
                                        </span>
                                        <span className="text-gray-500 ml-1 mt-1">
                                            1 hour ago
                                        </span>
                                    </div>
                                </div>
                            </MenuItem>
                        ),
                        () => (
                            <MenuItem image={image3}>
                                <div className="flex flex-col mb-3">
                                    <h5>You have received a new email from</h5>
                                    <div className="flex items-center justify-start">
                                        <span className="text-lg text-gray-800 font-bold">
                                            Kenya
                                        </span>
                                        <span className="text-gray-500 ml-1 mt-1">
                                            1 hour ago
                                        </span>
                                    </div>
                                </div>
                            </MenuItem>
                        ),
                        () => (
                            <MenuItem image={image3}>
                                <div className="flex flex-col mb-3">
                                    <h5>You have received a new email from</h5>
                                    <div className="flex items-center justify-start">
                                        <span className="text-lg text-gray-800 font-bold">
                                            Kenya
                                        </span>
                                        <span className="text-gray-500 ml-1 mt-1">
                                            1 hour ago
                                        </span>
                                    </div>
                                </div>
                            </MenuItem>
                        ),
                        () => (
                            <MenuItem image={image3}>
                                <div className="flex flex-col mb-3">
                                    <h5>You have received a new email from</h5>
                                    <div className="flex items-center justify-start">
                                        <span className="text-lg text-gray-800 font-bold">
                                            Kenya
                                        </span>
                                        <span className="text-gray-500 ml-1 mt-1">
                                            1 hour ago
                                        </span>
                                    </div>
                                </div>
                            </MenuItem>
                        ),
                    ]}
                />
                <Dropdown
                    width={200}
                    activator={() => (
                        <div className="bg-gray-300  cursor-pointer w-9 h-9 rounded-full items-center ml-2">
                            <img
                                src={image1}
                                alt="logo"
                                className=" w-9 h-9 rounded-full cursor-pointer hover:border-blue-600"
                            />
                        </div>
                    )}
                    items={[
                        () => (
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center ml-4 mt-5 cursor-pointer">
                                    <img
                                        src={image1}
                                        className="h-9 w-9 bg-gray-300 rounded-full"
                                        alt="imagegtfhf"
                                    />
                                    <div className=" ml-2">
                                        <div className="text-sm text-gray-700 uppercase">
                                            Calvin Carlo
                                        </div>
                                        <div className="text-sm text-gray-400 uppercase tracking-tighter">
                                            orthopedic
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center ml-4 mt-5 group cursor-pointer">
                                    <MdAvTimer className="text-md h-5 w-5 text-gray-500 group-hover:text-blue-600 " />
                                    <span className="text-gray-500  text-md uppercase ml-3 group-hover:text-blue-600">
                                        dashboard
                                    </span>
                                </div>
                                <div className="flex items-center ml-4 mb-3 mt-3 group cursor-pointer">
                                    <RiSettings5Line className="text-md h-5 w-5 text-gray-500 group-hover:text-blue-600 " />
                                    <span className="text-gray-500  text-sm uppercase tracking-tighter ml-3 group-hover:text-blue-600">
                                        profile settings
                                    </span>
                                </div>
                                <div className="flex items-center ml-4 mb-6  group border-t pt-3 cursor-pointer">
                                    <BiLogInCircle className="text-md h-5 w-5 text-gray-500 group-hover:text-blue-600 " />
                                    <span className="text-gray-500  text-sm uppercase tracking-tighter ml-3 group-hover:text-blue-600">
                                        log out
                                    </span>
                                </div>
                            </div>
                        ),
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
