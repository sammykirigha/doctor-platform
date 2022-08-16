import React from "react";
import { AiOutlineStar } from "react-icons/ai";
const Emails = () => {
    return (
        <div className="flex flex-row overflow-x-auto border-b pl-4 pb-3 pt-3 items-center">
            <input type="checkbox" className="default:ring-2 " />
            <div className="ml-4 flex flex-col sm:flex-col md:flex-row items-start py-2 px-2">
                <div className="flex flex-row">
                    <AiOutlineStar className="text-2xl text-gray-500" />
                    <span className="text-md text-slate-900 ml-4 mr-2">
                        Samuel Kirigha
                    </span>
                </div>

                <p className="max-w-[100%] mx-1 text-md text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores aliquid adipisci corporis mollitia veniam! Accusamus
                </p>
                <span className="ml-3">17 Jan 2022</span>
            </div>
        </div>
    );
};

export default Emails;
