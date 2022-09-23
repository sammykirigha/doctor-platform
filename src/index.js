import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import "./index.css";
import App from "./App";
import { NavigationProvider } from "./contexts/navigation.context";
import { AddEventProvider } from "./contexts/events.context";
import { Provider } from "react-redux";
import store from "./state/store";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <NavigationProvider>
                <AddEventProvider>
                    <App />
                </AddEventProvider>
            </NavigationProvider>
        </Provider>
    </BrowserRouter>
);
