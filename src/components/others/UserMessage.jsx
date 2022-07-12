import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { MdOutlineAvTimer } from "react-icons/md";
import image1 from "../../data/images/01.jpg"

const UserMessage = ({index}) => {
    return (
        <div className={`flex flex-row ml-3 ${index % 2 === 0 && 'justify-start flex-row-reverse mr-2 gap-2'}`}>
            <div className=" mt-6 relative h-12 w-12 bg-blue-100 flex items-center justify-center rounded-full ">
                <img
                    src={image1}
                    alt="logo"
                    className="m-2 w-12 h-12 rounded-full cursor-pointer "
                />
                
                <span className="absolute -top-2 right-7">
                    <GoPrimitiveDot className="text-green-700 h-6 w-6 " />{" "}
                </span>
            </div>
            <div className="max-w-[60%] bg-white flex flex-col mt-5 ml-2 ">
                <h6 className="text-gray-400 border border-gray-300 mt-3 h-[35px] pt-1 pl-1 rounded-md px-2">
                    Nice to meet you
                </h6>
                <div className="flex flex-row items-center">
                    <MdOutlineAvTimer className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-500">42 min ago</span>
                </div>
            </div>
        </div>
    );
};

export default UserMessage;
