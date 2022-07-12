import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useContext, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { AddEventContext } from "../../contexts/events.context";
import { MdAdd } from "react-icons/md";
import AddEventModal from "../modals/AddEventModal";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

function CalendarComp() {
    const { allEvents, addEventModalOpen, setAddEventModalOpen, setNewEvent } =
        useContext(AddEventContext);

    return (
        <div className="flex flex-row w-full gap-2 mt-5">
            <div className="w-[25%] bg-white border rounded-md pt-3 pl-4">
                <div className="flex flex-row items-center justify-between">
                    <h4 className="text-lg text-slate-900 font-semibold">
                        All Events
                    </h4>
                    <button
                        onClick={() => {
                            setAddEventModalOpen(!addEventModalOpen);
                        }}
                        className="bg-blue-700 text-white max-w-[150px] mr-3 py-2 px-2 rounded-md cursor-pointer  flex items-center"
                    >
                        <MdAdd className="mr-4" />
                        Add Event
                    </button>
                </div>
                <div className="flex flex-col gap-3 mt-6">
                    <span className="bg-blue-700 text-white max-w-[170px] py-2 pl-2 rounded-md cursor-pointer">
                        Meetings
                    </span>
                    <span className="bg-blue-700 text-white max-w-[170px] py-2 pl-2 rounded-md cursor-pointer">
                        Operations
                    </span>
                    <span className="bg-blue-700 text-white max-w-[170px] py-2 pl-2 rounded-md cursor-pointer">
                        Lunch
                    </span>
                    <span className="bg-blue-700 text-white max-w-[170px] py-2 pl-2 rounded-md cursor-pointer">
                        Conference
                    </span>
                    <span className="bg-blue-700 text-white max-w-[170px] py-2 pl-2 rounded-md cursor-pointer">
                        Business Meetings
                    </span>
                </div>
                <div className="flex flex-row items-center mt-4">
                    <input type="checkbox" className="default:ring-2" />
                    <span className="text-sm text-slate-700 ml-3">
                        Remove after drop
                    </span>
                </div>
            </div>
            <div className="w-[75%] bg-white border rounded-md">
                <Calendar
                    localizer={localizer}
                    events={allEvents}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500, margin: "50px" }}
                />
            </div>
            <AddEventModal
                isOpen={addEventModalOpen}
                closeModal={() => {
                    setAddEventModalOpen(false);
                }}
            />
        </div>
    );
}

export default CalendarComp;
