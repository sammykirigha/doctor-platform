import React from "react";
import Logo from "../common/Logo";
import Modal from "../common/Modal";
import image1 from "../../data/images/settingImage.png";
import image2 from "../../data/images/settingImage2.png";
import image3 from "../../data/images/settingImage3.png";
import { FaTimes } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiGlobe } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";

const SettingsModal = ({ isOpen, closeModal, message }) => {
    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            positionY="right"
            positionX="end"
            width={448}
        >
            <div className="sm:h-[665px] lg:h-[865px] w-[400px ">
                <div className="flex items-center justify-between w-[300px">
                    <Logo />
                    <div className="mt-2">
                        <span
                            className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                        >
                            <FaTimes />
                        </span>
                    </div>
                </div>
                <div className="mt-9! z-10 flex flex-col items-center justify-center">
                    <div className="mt-3 ">
                        <div className="cursor-pointer">
                            <img
                                src={image1}
                                alt="setting"
                                className="h-[220px] w-[330px] rounded-md drop-shadow-md mb-2"
                            />
                        </div>
                        <div className="cursor-pointer">
                            <img
                                src={image2}
                                alt="setting"
                                className="h-[220px] w-[330px] rounded-md mb-2"
                            />
                        </div>
                        <div className="cursor-pointer">
                            <img
                                src={image3}
                                alt="setting"
                                className="h-[220px] w-[330px] rounded-md mb-2"
                            />
                        </div>
                    </div>
                    <div className="pt-2 flex items-center justify-center">
                        <h5 className="text-gray-500 font-semibold cursor-pointer">
                            Landing Demos
                        </h5>
                    </div>

                    <div className="flex items-center justify-center mt-8">
                        <span className="h-[38px] cursor-pointer w-[38px] bg-gray-100 rounded-md flex items-center justify-center mr-3">
                            <HiOutlineShoppingCart className="h-[25px] w-[25px]" />
                        </span>
                        <span className="h-[38px] cursor-pointer w-[38px] bg-gray-100 rounded-md flex items-center justify-center mr-3">
                            <BiGlobe className="h-[25px] w-[25px]" />
                        </span>
                        <span className="h-[38px] cursor-pointer w-[38px] bg-gray-100 rounded-md flex items-center justify-center mr-3">
                            <GrFacebookOption className="h-[25px] w-[25px]" />
                        </span>
                        <span className="h-[38px] cursor-pointer w-[38px] bg-gray-100 rounded-md flex items-center justify-center mr-3">
                            <AiOutlineInstagram className="h-[25px] w-[25px]" />
                        </span>
                        <span className="h-[38px] cursor-pointer w-[38px] bg-gray-100 rounded-md flex items-center justify-center mr-3">
                            <AiOutlineTwitter className="h-[25px] w-[25px]" />
                        </span>
                        <span className="h-[38px] cursor-pointer w-[38px] bg-gray-100 rounded-md flex items-center justify-center mr-3">
                            <AiOutlineMail className="h-[25px] w-[25px]" />
                        </span>
                        <span className="h-[38px] cursor-pointer w-[38px] bg-gray-100 rounded-md flex items-center justify-center mr-3">
                            <AiOutlineGlobal className="h-[25px] w-[25px]" />
                        </span>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SettingsModal;
