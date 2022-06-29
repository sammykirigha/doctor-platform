import React from "react";
import Modal from "../common/Modal";
import { IoMdClose } from "react-icons/io";
import Editor from "../Editor";

const ComposeEmailModal = ({ closeModal, isOpen, message }) => {
    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            positionY="top"
            positionX="start"
            width={448}
        >
            <div className="rounded-md bg-white flex flex-col w-[900px]">
                <div className="flex flex-row pb-5 items-center justify-between border-b border-gray-300 w-full">
                    <h2 className="text-lg font-bold text-gray-600 uppercase tracking-wider">
                        Compose
                    </h2>
                    <span onClick={closeModal}>
                        {" "}
                        <IoMdClose className="h-8 w-8 cursor-pointer" />{" "}
                    </span>
                </div>
                <form className="flex flex-col mt-5">
                    <div className="flex flex-col w-full">
                        <div>
                            <input
                                type="text"
                                placeholder="To"
                                className="w-full h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                            />
                        </div>
                        <div className="flex flex-row items-center justify-between mb-5 gap-2 mt-5">
                            <input
                                type="text"
                                placeholder="Cc"
                                className="w-[50%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                            />
                            <input
                                type="text"
                                placeholder="Bcc"
                                className="w-[50%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                            />
                        </div>
                        <div className="w-[900px]" >
                            <Editor />
                        </div>
                    </div>
                    <div className="">
                        <button className="bg-blue-600 text-white px-3 py-2 w-[150px] rounded-md mt-4">
                            Send Now
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default ComposeEmailModal;
