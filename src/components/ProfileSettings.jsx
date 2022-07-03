import React from "react";
import image1 from "../data/images/01.jpg";
import Button from "./Button";

export const ProfileSettings = () => {
    return (
        <div className="mx-5">
            <div className="flex flex-col mt-5">
                <div className="text-slate-900 text-lg">
                    Personal Information:
                </div>
                <div className="flex mt-3">
                    <div className=" flex flex-row ">
                        <img
                            src={image1}
                            height="100px"
                            width="100px"
                            className="rounded-full drop-shadow-lg"
                            alt="doc"
                        />
                        <div className=" w-[300px] ml-4">
                            <h5 className="text-md">Upload your picture </h5>
                            <p className="text-gray-500">
                                For best results, use an image at least 256px by
                                256px in either .jpg or .png format
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <button className="bg-blue-600 text-white py-2 px-3 rounded-md cursor-pointer">
                            Upload
                        </button>
                        <button className="bg-blue-100 text-blue-600 py-2 px-3 rounded-md cursor-pointer">
                            Remove
                        </button>
                    </div>
                </div>
                <div className="mt-5 mb-5">
                    <form className="flex flex-col">
                        <div className="flex flex-row items-center justify-between  mb-5 gap-2">
                            <div className="flex flex-col ">
                                <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="First Name:"
                                    className="w-[250px] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                />
                            </div>
                            <div className="flex flex-col ">
                                <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Last Name:"
                                    className="w-[250px] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between  mb-5 gap-2">
                            <div className="flex flex-col ">
                                <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email address:"
                                    className="w-[250px] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                />
                            </div>
                            <div className="flex flex-col ">
                                <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                    Phone no.
                                </label>
                                <input
                                    type="text"
                                    placeholder="Phone no:"
                                    className="w-[250px] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                />
                            </div>
                        </div>
                        <div className="w-full mb-3 ml-3 pr-3 flex flex-col ">
                            <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                Your Bio
                            </label>
                            <textarea
                                type="text"
                                placeholder="Your Bio:"
                                className="w-full mr-3 h-[100px]  placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                            />
              </div>
              <Button text="Save changes" />
                    </form>
                </div>
            </div>
        </div>
    );
};
