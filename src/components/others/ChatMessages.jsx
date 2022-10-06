import React from "react";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { MdAttachFile, MdSend } from "react-icons/md";
import UserMessage from "./UserMessage";
import { useChat } from "../../modules/chat/chat-context";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_MESSAGES } from "../../queries/chats";
import { useSelector } from "react-redux";

const ChatMessages = ({ width = "full", height }) => {
    const { user } = useSelector((state) => state.auth);
    const [messageInput, setMessageInput] = useState("");
    const { selectedChat, setSelectedChat, messages } = useChat();

    const [newMessage, { loading, error }] = useMutation(CREATE_MESSAGES);

    const onSubmit = (e) => {
        e.preventDefault();
        if (messageInput.length < 2) return;

        const receiver = selectedChat?.members?.filter(
            (m) => m !== user?.id
        )[0];

        const message = {
            sender: user?.id,
            receiver,
            message: messageInput,
            chatId: selectedChat?.id,
        };

        newMessage({ variables: { input: message } });
    };

    return (
        <div
            className={`bg-white sm:w-[100%] sm:ml-0 sm:mt-5 lg:mt-1  rounded-md w-[${width}]`}
        >
            {selectedChat?.id ? (
                <>
                    <div className="flex flex-row items-center h-16 justify-between border-b"></div>

                    <div className="flex flex-col">
                        <div
                            className={`slim-scrollbar overflow-auto h-[${height}]`}
                        >
                            {messages?.map((message, i) => (
                                <UserMessage
                                    key={message?.id}
                                    message={message}
                                    index={i}
                                />
                            ))}
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="border-t border-gray-400 flex flex-row items-center justify-between mx-3 py-5">
                                <input
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    placeholder="Enter Message..."
                                    className="border border-gray-600 w-[100%] h-[35px] rounded-md pl-2 focus:outline-none focus:border-blue-500"
                                />

                                <div className="flex flex-row items-center justify-between ml-2">
                                    <button
                                        type="submit"
                                        className="h-9 w-9 rounded-full bg-blue-700 mr-2  flex items-center justify-center cursor-pointer"
                                    >
                                        <MdSend className="text-white h-6 w-6" />
                                    </button>
                                    <span className="h-9 w-9 rounded-full bg-blue-700 mr-2 flex items-center justify-center cursor-pointer">
                                        <BsFillEmojiHeartEyesFill className="text-white h-6 w-6" />
                                    </span>
                                    <span className="h-9 w-9 rounded-full bg-blue-700 flex items-center justify-center cursor-pointer">
                                        <MdAttachFile className="text-white h-6 w-6" />
                                    </span>
                                </div>
                            </div>
                        </form>
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
