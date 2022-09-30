import { useQuery } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";
import { FETCH_CHATS, FETCH_MESSAGES } from "../../queries/chats";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [chats, setChats] = useState([]);
    const [messages, setMessages] = useState([]);
    const [selectedChat, setSelectedChat] = useState({});

    const {
        data,
        loading: loadingChats,
        error: chatsError,
    } = useQuery(FETCH_CHATS);
    const {
        data: messagesData,
        loading: loadingMessages,
        error: messagesError,
    } = useQuery(FETCH_MESSAGES, {
        variables: { chat_id: selectedChat?.id ?? "iuyytretertyt6544" },
        fetchPolicy: "no-cache"
    });

    useEffect(() => {
        if (data?.fetchChats) {
            setChats(
                data?.fetchChats?.map((chat) => ({
                    ...chat,
                    last: chat?.last[0],
                }))
            );
        }
    }, [data?.fetchChats]);
    useEffect(() => {
        console.log(messagesData?.fetchMessages);
        if (messagesData?.fetchMessages) {
            setMessages(messagesData?.fetchMessages);
        }
    }, [messagesData?.fetchMessages]);

    return (
        <ChatContext.Provider
            value={{
                selectedChat,
                setSelectedChat,
                chats,
                loadingChats,
                chatsError,
                messages,
                loadingMessages,
                messagesError,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);
export default ChatProvider;
