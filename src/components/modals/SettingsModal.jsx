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
            positionY="top"
            positionX="end"
        >
            <div className=" sm:h-[600px] md:h-[600px] lg:h-[800px] 2xl:h-[1000px]  sm:w-[300px] md:w-[400px] ">
                <div className="flex items-center justify-between w-full border-b">
                    <Logo />
                    <div className="mt-2">
                        <span
                            className="inline-flex justify-center rounded-md border border-transparent px-4  font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                        >
                            <FaTimes className="text-3xl text-gray-500 hover:text-gray-700 cursor-pointer" />
                        </span>
                    </div>
                </div>

                <div className=" slim-scrollbar overflow-auto sm:h-[350px] md:h-[450px] lg:h-[600px] xl:h-[700px]   mt-3 flex flex-col items-center justify-center border-b ">
                    <div className="cursor-pointer mt-3">
                        <img
                            src={image1}
                            alt="setting"
                            className="sm:h-[150px] sm:w-[200px] md:h-[200px] md:w-[300px] rounded-md drop-shadow-md"
                        />
                        <div className="mt-1 mb-6 flex items-start justify-center">
                            <h5 className="text-gray-500 font-semibold cursor-pointer text-lg">
                                RTL Version
                            </h5>
                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <img
                            src={image2}
                            alt="setting"
                            className="sm:h-[150px] sm:w-[200px] md:h-[200px] md:w-[300px] rounded-md mb-2"
                        />
                        <div className="mt-1 mb-6 flex items-center justify-center">
                            <h5 className="text-gray-500 font-semibold cursor-pointer text-lg">
                                Dark Version
                            </h5>
                        </div>
                    </div>
                    <div className="cursor-pointer">
                        <img
                            src={image3}
                            alt="setting"
                            className="sm:h-[150px] sm:w-[200px] md:h-[200px] md:w-[300px] rounded-md mb-2"
                        />
                        <div className="mt-1 mb-6 flex items-center justify-center">
                            <h5 className="text-gray-500 font-semibold cursor-pointer text-lg">
                                Landing Demos
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="mt-9! z-10 flex flex-col items-center justify-center sm:mx-3!">
                    <div className="flex flex-row items-center justify-center mt-8">
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
