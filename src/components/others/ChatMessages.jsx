import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";
import Dropdown from "../common/Dropdown";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
// import { IoSendSharp } from "react-icons/io";
import { RiDeleteBin7Line } from "react-icons/ri";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { MdAttachFile, MdSend } from "react-icons/md";
import UserMessage from "./UserMessage";
import { useChat } from "../../modules/chat/chat-context";

const ChatMessages = ({ width = "full", height }) => {
    const { selectedChat, setSelectedChat, messages } = useChat();

    return (
        <div
            className={`bg-white sm:w-[100%] sm:ml-0 sm:mt-5 lg:mt-1  rounded-md w-[${width}]`}
        >
            {selectedChat?.id ? (
                <>
                    <div className="flex flex-row items-center h-16 justify-between border-b">
                        
                    </div>

                    <div className="flex flex-col">
                        <div
                            className={`slim-scrollbar overflow-auto h-[${height}]`}
                        >
                            {messages?.map(
                                (message, i) => (
                                    <UserMessage key={message?.id} message={message} index={i} />
                                )
                            )}
                        </div>
                        <div className="border-t border-gray-400 flex flex-row items-center justify-between mx-3 py-5">
                            <input
                                placeholder="Enter Message..."
                                className="border border-gray-600 w-[100%] h-[35px] rounded-md pl-2 focus:outline-none focus:border-blue-500"
                            />
                            <div className="flex flex-row items-center justify-between ml-2">
                                <span className="h-9 w-9 rounded-full bg-blue-700 mr-2  flex items-center justify-center cursor-pointer">
                                    <MdSend className="text-white h-6 w-6" />
                                </span>
                                <span className="h-9 w-9 rounded-full bg-blue-700 mr-2 flex items-center justify-center cursor-pointer">
                                    <BsFillEmojiHeartEyesFill className="text-white h-6 w-6" />
                                </span>
                                <span className="h-9 w-9 rounded-full bg-blue-700 flex items-center justify-center cursor-pointer">
                                    <MdAttachFile className="text-white h-6 w-6" />
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    <h2>No chats selected</h2>
                </div>
            )}
        </div>
    );
};

export default ChatMessages;
