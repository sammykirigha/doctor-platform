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
                            <div className="flex flex-row">
                                <span className="rounded-full h-24 w-24 flex items-center border border-gray-300 ">
                                    <img
                                        src={image1}
                                        alt="pic"
                                        className="h-16 w-16 rounded-2xl ml-2"
                                    />
                                </span>

                                <div className="flex flex-col ml-5">
                                    <h2 className="text-lg text-slate-900 font-semibold mb-2">
                                        Upload Your Picture
                                    </h2>
                                    <p className="text-md text-gray-500 w-80">
                                        For best results, use an image at least
                                        600px by 600px in either .jpg or .png
                                        format
                                    </p>
                                </div>
                                <div className="flex sm:flex-col md:flex-col lg:flex-col gap-3 items-center">
                                    <Button text="Upload" />
                                    <Button text="Remove" />
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
