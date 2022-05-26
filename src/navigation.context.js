import { createContext, useState } from "react";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const [sideBarOpen, setSideBarOpen] = useState(true);

    const toggleSidebar = () => {
        setSideBarOpen(!sideBarOpen);
    };

    //
    return (
        <NavigationContext.Provider value={{ sideBarOpen, toggleSidebar }}>
            {children}
        </NavigationContext.Provider>
    );
};
