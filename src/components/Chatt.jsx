import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import flag from "../assets/Flag-Kenya.jpg";
import Dropdown from "./common/Dropdown";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
// import { IoSendSharp } from "react-icons/io";
import { RiDeleteBin7Line } from "react-icons/ri";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import {  MdAttachFile, MdSend } from "react-icons/md";

const Chatt = () => {
    return (
        <div className="bg-white ml-4 mt-5 rounded-md w-[50%] ">
            <div className="flex flex-row items-center justify-between border-b">
                <div className="flex flex-row items-center my-3 mx-5">
                    <img
                        src={flag}
                        alt="logo"
                        className="m-2 w-10 h-10 rounded-full cursor-pointer"
                    />
                    <div className="flex flex-col">
                        <span className="text-gray-900 font-semibold ml-2">
                            Cristino Murphy
                        </span>
                        <span className="flex flex-row items-center">
                            <GoPrimitiveDot className="text-green-700 h-5 w-5" />{" "}
                            <span className="text-gray-500">Online</span>
                        </span>
                    </div>
                </div>
                <span className="mr-5 text-gray-600 font-semibold">
                    <Dropdown
                        className="w-[250px]!"
                        activator={() => (
                            <HiDotsHorizontal className="h-5 w-5 cursor-pointer text-blue-700" />
                        )}
                        items={[
                            () => (
                                <div className="flex flex-row my-4 mx-4 hover:text-blue-700 cursor-pointer group">
                                    <AiOutlineUser className="text-gray-700 h-5 w-5 group-hover:text-blue-700" />
                                    <span className="text-gray-500 ml-2 group-hover:text-blue-700">
                                        PROFILE
                                    </span>
                                </div>
                            ),
                            () => (
                                <div className="flex flex-row my-4 mx-4 pt-3 group cursor-pointer">
                                    <AiOutlineSetting className="text-gray-700 h-5 w-5 group-hover:text-blue-700" />
                                    <span className="text-gray-500 ml-2 group-hover:text-blue-700">
                                        SETTINGS
                                    </span>
                                </div>
                            ),
                            () => (
                                <div className="flex flex-row my-4 mx-4 pt-3 group cursor-pointer">
                                    <RiDeleteBin7Line className="text-gray-700 h-5 w-5 group-hover:text-blue-700" />
                                    <span className="text-gray-500 ml-2 group-hover:text-blue-700">
                                        DELETE
                                    </span>
                                </div>
                            ),
                        ]}
                    />
                </span>
        </div>
        <div className="flex flex-col">
          <div className=" no-scrollbar overflow-y-auto h-52">
            {[1,2,3,4,5,6,7,8,9,10, 11,12,13,14,15,16,17,18,19].map((item) => {return <h4>sammyyyyyyyyyyy</h4>})}
            
          </div>
          <div className="border-t border-gray-400 flex flex-row items-center justify-between mx-3 py-2">
            <input placeholder="Enter Message..." className="border border-gray-600 w-[340px] h-[35px] rounded-md pl-2" />
            <div className="flex flex-row items-center justify-between ml-2">
              <span className="h-9 w-9 rounded-md bg-blue-700 mr-2  flex items-center justify-center cursor-pointer">
                <MdSend className="text-white h-6 w-6" />
              </span>
              <span  className="h-9 w-9 rounded-md bg-blue-700 mr-2 flex items-center justify-center cursor-pointer
cursor-pointer">
                <BsFillEmojiHeartEyesFill className="text-white h-6 w-6" />
              </span>
              <span  className="h-9 w-9 rounded-md bg-blue-700 flex items-center justify-center cursor-pointer">
                <MdAttachFile className="text-white h-6 w-6" />
              </span>
            </div>
          </div>
        </div>
        
        </div>
    );
};

export default Chatt;
