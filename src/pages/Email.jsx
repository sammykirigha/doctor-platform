import React from "react";
import { useLocation } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsInbox } from "react-icons/bs";
import { MdAdd, MdOutlineMail, MdOutlineDrafts, MdOutlineMarkEmailRead, MdOutlineEventNote } from "react-icons/md";
import { AiOutlineDelete } from 'react-icons/ai';
import {GrNotes} from 'react-icons/gr'

const Email = () => {
    const params = useLocation();
    const firstName = params.pathname.split("/")[1];
    const secondName = params.pathname.split("/")[2];
    return (
        <div className="mx-5 min-h-screen">
            <div className="flex flex-row items-center justify-between">
                <h4 className="text-lg text-slate-900 font-semibold">
                    Docto's Profile & Settings
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
            <div className="flex flex-row w-full mt-5">
                <div className="w-[25%] bg-white rounded-md">
                    <div className="bg-white flex flex-col items-center rounded-md border ">
                        <div className="flex flex-col justify-center  mt-6">
                            <button className="text-white text-md bg-blue-600 px-2 py-2 flex items-center justify-center rounded-md mb-6 w-[150px]">
                                <MdAdd className="mr-4" />
                                Compose
                            </button>
                            <button className="text-white text-md bg-blue-600 pl-1 pr-2 py-2 flex items-center justify-center rounded-md mb-4 w-[150px]">
                                <BsInbox className="mr-4 text-md" />
                                Inbox
                            </button>
						</div>
						<div className="flex flex-col mt-4">
						<span className="inline-flex items-center text-lg text-gray-500 mb-2"><MdOutlineMail  className="text-2xl mr-3" />Starred</span>
						<span className="inline-flex items-center text-lg text-gray-500 mb-2"><MdOutlineMail className="text-2xl mr-3" />Spam</span>
						<span className="inline-flex items-center text-lg text-gray-500 mb-2"><MdOutlineMarkEmailRead className="text-2xl mr-3" />Sent</span>
						<span className="inline-flex items-center text-lg text-gray-500 mb-2"><MdOutlineDrafts className="text-2xl mr-3" />Drafts</span>
						<span className="inline-flex items-center text-lg text-gray-500 mb-2"><AiOutlineDelete className="text-2xl mr-3" />Delete</span>
						<span className="inline-flex items-center text-lg text-gray-500 mb-2"><MdOutlineEventNote className="text-2xl mr-3" />Notes</span>
					</div>
					</div>
					
                </div>
                <div>right</div>
            </div>
        </div>
    );
};

export default Email;
