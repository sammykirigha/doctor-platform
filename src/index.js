import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { NavigationProvider } from "./contexts/navigation.context";
import { AddEventProvider } from "./contexts/events.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <NavigationProvider>
                <AddEventProvider>
                    <App />
                </AddEventProvider>
            </NavigationProvider>
        </BrowserRouter>
    </React.StrictMode>
);
