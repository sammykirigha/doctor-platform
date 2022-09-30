import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import App from "./App";
import { NavigationProvider } from "./contexts/navigation.context";
import { AddEventProvider } from "./contexts/events.context";
import { Provider } from "react-redux";
import store from "./state/store";
import client from "./apollo";
import ChatProvider from "./modules/chat/chat-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <NavigationProvider>
                    <AddEventProvider>
                        <ChatProvider>
                            <App />
                        </ChatProvider>
                    </AddEventProvider>
                </NavigationProvider>
            </Provider>
        </ApolloProvider>
    </BrowserRouter>
);
