import React from "react";
import image1 from "../../data//images/01.jpg";
import Button from "../common/Button";

const Settings = () => {
    return (
        <div className="mb-3">
            <h4 className="text-lg text-slate-900 font-semibold mt-5">
                Settings
            </h4>
            <div className="flex flex-col sm:flex-col  lg:flex-row justify-between w-full mt-7">
                <div className="sm:w-[100%] rounded-md bg-white mr-2">
                    <div className="border border-gray-300 rounded-md">
                        <div className="border-b border-gray-100 pl-5 py-3">
                            <span className="text-lg text-slate-900 font-semibold">
                                Personal Information :
                            </span>
                        </div>
                        <div className="mt-5 pl-4">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-start md:flox-row lg:flex-row pr-2">
                                <div className="flex ">
                                    <img
                                        src={image1}
                                        alt="pic"
                                        className="h-20 w-20 rounded-full"
                                    />

                                    <div className="flex flex-col mr-auto ">
                                        <h2 className="text-lg text-slate-900 font-semibold mb-2">
                                            Upload Your Picture
                                        </h2>
                                        <p className="text-md text-gray-500">
                                            For best results, use an image at
                                            least 600px by 600px in either .jpg
                                            or .png format
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 sm:mt-5 md:ml-3 ">
                                    <button className="mr-2 sm:mb-3 border border-gray-400 py-1 px-2 text-white bg-blue-400 cursor-pointer hover:bg-blue-600 rounded-md">
                                        Upload
                                    </button>
                                    <button className="button border border-gray-400 py-1 px-2 text-white bg-blue-400 cursor-pointer hover:bg-blue-600 rounded-md">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <form className="flex flex-col mt-7 pl-2 pr-7">
                                <div className="flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2">
                                    <div className="flex flex-col sm:w-[100%] ">
                                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="First Name:"
                                            className="sm:w-[100%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:w-[100%]  ">
                                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Last Name:"
                                            className="sm:w-[100%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5 gap-2">
                                    <div className="flex flex-col sm:w-[100%] ">
                                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                            Your Email:
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your Email:"
                                            className="sm:w-[100%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:w-[100%] ">
                                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                            Phone no
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Phone no:"
                                            className="sm:w-[100%] h-10 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
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
                                <div className="mb-4 mt-3">
                                    <Button text="Save changes" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-col border border-gray-300 rounded-md mt-6">
                        <div className="border-b border-gray-200 pl-5 py-3 ">
                            <span className="text-lg text-slate-900 font-semibold pb-5">
                                Account Notifications :
                            </span>
                        </div>
                        <div>
                            <form className="flex flex-col mt-7 pl-2 pr-7">
                                <div className="ml-2 mt-3">
                                    <div className="w-full flex flex-col ">
                                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                            Old password :
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Old password:"
                                            className="w-full h-10 mt-1 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                        />
                                    </div>

                                    <div className=" w-full flex flex-col mt-5">
                                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                            New password:
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="New password:"
                                            className="w-full h-10 mt-1 placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                        />
                                    </div>
                                    <div className="w-full mb-3 pr-3 flex flex-col mt-5 ">
                                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500">
                                            Re-type New password
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your Bio:"
                                            className="w-full mr-3 h-[100px] mt-1  placeholder:italic pl-2 placeholder:text-slate-300 bg-white border border-slate-300 rounded-md focus:border-0 focus:outline focus:outline-blue-600"
                                        />
                                    </div>
                                    <div className="mb-4 mt-3">
                                        <Button text="Save password" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className=" sm:w-[100%] sm:mt-10 md:w-[100%] bg-white rounded-md flex flex-col ">
                    <div className="border  border-gray-300 rounded-md">
                        <div className="border-b border-gray-100 pl-5 py-3 ">
                            <span className="text-lg text-slate-900 font-semibold pb-5">
                                General Notifications :
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center justify-between sm:px-5 px-0 py-6 border-b border-gray-200 mx-4">
                                <span>When someone mentions me</span>
                                <input
                                    type="checkbox"
                                    className="default:ring-2"
                                />
                            </div>
                            <div className="flex flex-row items-center justify-between sm:px-5 px-0 py-6 border-b border-gray-200 mx-4">
                                <span>When someone follows me</span>
                                <input
                                    type="checkbox"
                                    className="default:ring-2"
                                />
                            </div>
                            <div className="flex flex-row items-center justify-between sm:px-5 px-0 py-6 border-b border-gray-200 mx-4">
                                <span className="">When someone shares my activity</span>
                                <input
                                    type="checkbox"
                                    className="default:ring-2"
                                />
                            </div>
                            <div className="flex flex-row items-center justify-between sm:px-5 px-0 py-6 mx-4">
                                <span>When someone messages me</span>
                                <input
                                    type="checkbox"
                                    className="default:ring-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 rounded-md mt-10">
                        <div className="border-b border-gray-100 pl-5 py-3 ">
                            <span className="text-lg text-slate-900 font-semibold pb-5">
                                Marketing Notifications :
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center justify-between px-5 py-6 border-b border-gray-200 mx-4">
                                <span>There is a sale or promotion</span>
                                <input
                                    type="checkbox"
                                    className="default:ring-2"
                                />
                            </div>
                            <div className="flex flex-row items-center justify-between px-5 py-6 border-b border-gray-200 mx-4">
                                <span>Company news</span>
                                <input
                                    type="checkbox"
                                    className="default:ring-2"
                                />
                            </div>
                            <div className="flex flex-row items-center justify-between px-5 py-6 border-b border-gray-200 mx-4">
                                <span>Weekly jobs</span>
                                <input
                                    type="checkbox"
                                    className="default:ring-2"
                                />
                            </div>
                            <div className="flex flex-row items-center justify-between px-5 py-6 mx-4">
                                <span>Unsubscribe News</span>
                                <input
                                    type="checkbox"
                                    className="default:ring-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 rounded-md mt-10">
                        <div className="border-b border-gray-100 pl-5 py-5 ">
                            <span className="text-lg text-slate-900 font-semibold pb-5">
                                General Notifications :
                            </span>
                        </div>
                        <div className="flex flex-row items-center justify-between px-5 py-6 border-b border-gray-200 mx-4">
                            <span className="text-xl text-red-500 font-bold">
                                Delete Account :
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col items-start justify-between px-2 py-6 mx-4">
                                <span className="text-md text-slate-900">
                                    Do you want to delete the account? Please
                                    press below "Delete" button
                                </span>
                                <button className="w-auto py-2 px-3 text-lg text-white font-bold bg-red-400 rounded-md mt-5 ">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
