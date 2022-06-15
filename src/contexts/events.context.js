import { createContext, useState } from "react";

export const AddEventContext = createContext();

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

export const AddEventProvider = ({ children }) => {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);
    const [addEventModalOpen, setAddEventModalOpen] = useState(false);

    //
    return (
        <AddEventContext.Provider
            value={{
                allEvents,
                newEvent,
                setNewEvent,
                setAllEvents,
                addEventModalOpen,
                setAddEventModalOpen,
            }}
        >
            {children}
        </AddEventContext.Provider>
    );
};
