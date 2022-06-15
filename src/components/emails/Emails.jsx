import React from "react";
import { AiOutlineStar } from "react-icons/ai";
const Emails = () => {
    return (
        <div className="flex flex-row overflow-x-auto border-b pl-4 pb-3 pt-3 items-center">
            <input type="checkbox" className="default:ring-2 " />
            <AiOutlineStar className="text-lg ml-7 text-gray-500"/>
            <span className="text-md text-slate-900 ml-4 mr-2">Samuel Kirigha</span>
            <p className="max-w-[65%] mx-1 text-md text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                aliquid adipisci corporis mollitia veniam! Accusamus 
			</p>
			<span className="ml-3">17 Jan 2022</span>
        </div>
    );
};

export default Emails;
