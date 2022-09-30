import { useQuery } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";
import { FETCH_CHATS } from "../../queries/chats";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [chats, setChats] = useState([]);

    const { data, loading, error } = useQuery(FETCH_CHATS);

    useEffect(() => {
        if (data?.fetchChats) {
            setChats(data?.fetchChats?.map((chat) => ({...chat, last: chat?.last[0]})))
        }
    },[data?.fetchChats])

    return (
        <ChatContext.Provider value={{name:"helooo", chats}}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext)
export default ChatProvider;
