import React from "react";
import image1 from "../data/images/01.jpg";
import Button from "./Button";

const Settings = () => {
    return (
        <div className="mb-3">
            <h4 className="text-lg text-slate-900 font-semibold mt-5">
                Settings
            </h4>
            <div className="flex flex-row justify-between w-full mt-7">
                <div className="rounded-md w-[50%] bg-white border border-gray-100">
                    <div>
                        <div className="border-b border-gray-100 pl-5 py-3">
                            <span className="text-lg text-slate-900 font-semibold">
                                Personal Information :
                            </span>
                        </div>
                        <div className="mt-5 pl-4">
                            <div className="flex flex-row items-center pr-2">
                                <span className="rounded-full h-24 w-24  flex items-center border border-gray-300 ">
                                    <img
                                        src={image1}
                                        alt="pic"
                                        className="h-16 w-16  rounded-2xl ml-2"
                                    />
                                </span>

                                <div className="flex flex-col md:w-56 ml-3 mr-auto ">
                                    <h2 className="text-lg text-slate-900 font-semibold mb-2">
                                        Upload Your Picture
                                    </h2>
                                    <p className="text-md text-gray-500">
                                        For best results, use an image at least
                                        600px by 600px in either .jpg or .png
                                        format
                                    </p>
                                </div>
                                <div className=" sm:flex-col sm:mr-0 lg:flex-row sm:ml-auto">
                                    <button className="mr-2 sm:mb-3 border border-gray-400 py-1 px-2 text-white bg-blue-400 cursor-pointer hover:bg-blue-600 rounded-md">Upload</button>
                                    <button className="button border border-gray-400 py-1 px-2 text-white bg-blue-400 cursor-pointer hover:bg-blue-600 rounded-md">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>lower</div>
                </div>
                <div className="rounded-md w-[50%] bg-blue-100">
                    notifications
                </div>
            </div>
        </div>
    );
};

export default Settings;
