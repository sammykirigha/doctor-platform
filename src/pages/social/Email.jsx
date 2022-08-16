import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsInbox } from "react-icons/bs";
import {
    MdAdd,
    MdOutlineMail,
    MdOutlineDrafts,
    MdOutlineMarkEmailRead,
    MdOutlineEventNote,
} from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import ComposeEmailModal from "../../components/modals/ComposeEmailModal";

const Email = () => {
    const params = useLocation();
    const firstName = params.pathname.split("/")[1];
    const secondName = params.pathname.split("/")[2];

    const [composeEmailModalOpen, setComposeEmailModalOpen] = useState(false);
    return (
        <div className="mx-5 min-h-screen">
            <div className="flex flex-row items-center justify-between">
                <h4 className="text-lg text-slate-900 font-semibold">
                    Email
                </h4>
                <div>
                    <p className="paragraph inline-flex items-center justify-between text-md uppercase text-md ">
                        Docris{" "}
                        <RiArrowRightSLine className="flex items-center mx-2 mt-0.5" />{" "}
                        <span className="text-blue-700 text-md">
                            {firstName.toUpperCase()}
                        </span>{" "}
                        <RiArrowRightSLine className="flex items-center mx-2 mt-0.5" />{" "}
                        <span className="text-blue-700 text-md">
                            {secondName.toUpperCase()}
                        </span>{" "}
                    </p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-col md:flex-row w-full mt-5 gap-6 sm:gap-6">
                <div className="w-full sm:w-full md:w-[25%] bg-white rounded-md">
                    <div className="bg-white flex flex-col items-center rounded-md border ">
                        <div className="flex flex-col justify-center  mt-6">
                            <button
                                onClick={() => {
                                    setComposeEmailModalOpen(
                                        !composeEmailModalOpen
                                    );
                                }}
                                className="text-white text-md bg-blue-600 px-2 py-2 flex items-center justify-center rounded-md mb-6 w-[150px]"
                            >
                                <MdAdd className="mr-4" />
                                Compose
                            </button>
                        </div>
                        <div className="grid flex-1 w-full  xs:grid-cols-2 md:grid-cols-1  xl:grid-cols-2 2xl:grid-cols-3 mt-4 mb-5 gap-5 px-5">
                            <NavLink
                                to=""
                                className={({ isActive }) =>
                                    `inline-flex items-center text-lg  cursor-pointer w-full ${isActive ? "bg-blue-600 text-white mb-4 py-2 px-2 rounded-md" : "text-gray-500 mb-4"} `
                                }
                            >
                                <BsInbox className="text-2xl mr-3" />
                                Inbox
                            </NavLink>
                            <NavLink
                                to="starred"
                                className={({ isActive }) =>
                                    `inline-flex items-center text-lg  cursor-pointer w-full ${isActive ? "bg-blue-600 text-white mb-4 py-2 px-2 rounded-md" : "text-gray-500 mb-4"} `
                                }
                            >
                                <MdOutlineMail className="text-2xl mr-3" />
                                Starred
                            </NavLink>
                            <NavLink
                                to="spam"
                                className={({ isActive }) =>
                                    `inline-flex items-center text-lg  cursor-pointer w-full ${isActive ? "bg-blue-600 text-white mb-4 py-2 px-2 rounded-md" : "text-gray-500 mb-4"} `
                                }
                            >
                                <MdOutlineMail className="text-2xl mr-3" />
                                Spam
                            </NavLink>
                            <NavLink
                                to="sent"
                                className={({ isActive }) =>
                                    `inline-flex items-center text-lg  cursor-pointer w-full ${isActive ? "bg-blue-600 text-white mb-4 py-2 px-2 rounded-md" : "text-gray-500 mb-4"} `
                                }
                            >
                                <MdOutlineMarkEmailRead className="text-2xl mr-3" />
                                Sent
                            </NavLink>
                            <NavLink
                                to="drafts"
                                className={({ isActive }) =>
                                    `inline-flex items-center text-lg  cursor-pointer w-full ${isActive ? "bg-blue-600 text-white mb-4 py-2 px-2 rounded-md" : "text-gray-500 mb-4"} `
                                }
                            >
                                <MdOutlineDrafts className="text-2xl mr-3" />
                                Drafts
                            </NavLink>
                            <NavLink
                                to="delete"
                                className={({ isActive }) =>
                                    `inline-flex items-center text-lg  cursor-pointer w-full ${isActive ? "bg-blue-600 text-white mb-4 py-2 px-2 rounded-md" : "text-gray-500 mb-4"} `
                                }
                            >
                                <AiOutlineDelete className="text-2xl mr-3" />
                                Delete
                            </NavLink>
                            <NavLink
                                to="notes"
                                className={({ isActive }) =>
                                    `inline-flex items-center text-lg  cursor-pointer w-full ${isActive ? "bg-blue-600 text-white mb-4 py-2 px-2 rounded-md" : "text-gray-500 mb-4"} `
                                }
                            >
                                <MdOutlineEventNote className="text-2xl mr-3" />
                                Notes
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex-1 ml-2 rounded-md ">
                    <Outlet />
                </div>
            </div>
            <ComposeEmailModal
                isOpen={composeEmailModalOpen}
                closeModal={() => {
                    setComposeEmailModalOpen(false);
                }}
            />
        </div>
    );
};

export default Email;
