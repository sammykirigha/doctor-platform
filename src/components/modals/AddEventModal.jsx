import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AddEventContext } from "../../contexts/events.context";
import Modal from "../common/Modal";
import { IoMdClose } from "react-icons/io";

const AddEventModal = ({ closeModal, isOpen, message }) => {
	const { allEvents, addEventModalOpen, newEvent, setAllEvents,  setAddEventModalOpen, setNewEvent } =
		useContext(AddEventContext);
	
	const handleAddEvent = () => {
		setAllEvents([...allEvents, newEvent]);
        setAddEventModalOpen(!addEventModalOpen);
        setNewEvent({})
	} 
	
    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            positionY="top"
            positionX="start"
            width={448}
        >
            <div className="rounded-md bg-white flex flex-col w-[400px] h-[450px]">
                <div className="flex flex-row pb-5 items-center justify-between border-b border-gray-300 w-full">
                    <h2 className="text-lg font-semibold text-gray-600 uppercase tracking-wider">
                        Add New Event
                    </h2>
                    <span onClick={closeModal}>
                        {" "}
                        <IoMdClose className="h-6 w-6 cursor-pointer" />{" "}
                    </span>
                </div>
                <div className="flex flex-col mt-5">
                    <input
                        type="text"
                        placeholder="Add Title"
                        className="w-full h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                        value={newEvent.title}
                        onChange={(e) =>
                            setNewEvent({ ...newEvent, title: e.target.value })
                        }
                    />
                    <DatePicker
                        placeholderText="Start Date"
                        className="w-full h-10 mt-4 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                        selected={newEvent.start}
                        onChange={(start) =>
                            setNewEvent({ ...newEvent, start })
                        }
                    />
                    <DatePicker
						placeholderText="End Date"
						className="w-full h-10 mt-4 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                        selected={newEvent.end}
                        onChange={(end) => setNewEvent({ ...newEvent, end })}
                    />
                    <button
                        className="bg-blue-700 text-white px-2 py-2 max-w-[140px] mt-12 ml-28 rounded-md"
                        onClick={handleAddEvent}
                    >
                        Add Event
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default AddEventModal;
