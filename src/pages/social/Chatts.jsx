import React, { useMemo } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { useSelector } from "react-redux";
import { useChat } from "../../modules/chat/chat-context";

const Chatts = () => {
    const { chats  } = useChat();
	
    return (
        <div>
            {chats?.map((chat) => (
                <ChatItem key={chat?.id} chat={chat} />
            ))}
        </div>
    );
};

function ChatItem({ chat }) {
	const { user } = useSelector(state => state.auth)
	const {  selectedChat, setSelectedChat } = useChat();

	const name = useMemo(() => {
		if (chat?.last?.receiver_?.id === user?.id)
			return chat?.last?.sender_?.username
		
		return chat?.last?.receiver_?.username
	}, [chat, user?.id])
	
    return (
		<div onClick={() => setSelectedChat(chat)}
			className={`flex flex-row items-center w-full border mb-3 mt-3 rounded-md ${selectedChat?.id === chat?.id ? 'bg-blue-100' : "bg-blue-50"} pb-3 cursor-pointer`}
		
		>
            <div className=" mt-3 ml-4 relative h-12 w-12 bg-blue-100 flex items-center justify-center rounded-full ">
                <img
                    src="http://res.cloudinary.com/dkirigha18/image/upload/v1663954584/hhtgacbulprqat1x71xe.jpg"
                    alt="logo"
                    className="m-2 w-12 h-12 rounded-full cursor-pointer "
                />
                <span className="absolute -top-2 right-7">
                    <GoPrimitiveDot className="text-green-700 h-6 w-6 " />{" "}
                </span>
            </div>
            <div className="flex flex-row items-center ml-3 mt-5 mb-2">
                <div className="mr-auto">
                    <span className="text-sm text-slate-900 font-bold">
                        {name}
                    </span>
                    <p className="text-sm text-gray-500">{chat?.last?.message}</p>
                </div>
                <span className="ml-24 text-gray-400">10 Min</span>
            </div>
        </div>
    );
}

export default Chatts;
