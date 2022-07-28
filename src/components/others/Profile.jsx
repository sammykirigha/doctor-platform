import React from "react";
import { BsHeart } from "react-icons/bs";

const Profile = ({ experience, appointments }) => {
    return (
        <div className="mx-4">
            <div className="flex flex-col mt-7 ">
                <div className="text-slate-900 text-lg font-semibold ">
                    Introduction:
                </div>
                <p className="pt-8 text-gray-500  font-medium">{experience}</p>
            </div>

            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between gap-x-20 mt-5">
                <div className=" w-full">
                    <div className="text-lg text-slate-800 font-bold my-3">
                        Appointment List
                    </div>
                    {appointments?.length > 0 ? (
                        appointments?.map((appnt) => {
                            return (
                                <div className="gap-6 cursor-pointer">
                                    <div className="flex flex-row mb-3 items-center justify-between px-4 py-2 border drop-shadow-md bg-white w-full">
                                        <div className="flex flex-col mx-2 py-3">
                                            <span className="text-lg text-slate-900 font-bold">
                                                Patient Name
                                            </span>
                                            <span className="text-md text-slate-500">
                                                Calvin Carlo
                                            </span>
                                        </div>
                                        <div className="flex flex-col mx-2 py-3">
                                            <span className="text-lg text-slate-900 font-bold">
                                                Department
                                            </span>
                                            <span className="text-md text-slate-500">
                                                Cardiogram
                                            </span>
                                        </div>
                                        <div className="flex flex-col mx-2 py-3">
                                            <span className="text-lg text-slate-900 font-bold">
                                                Date
                                            </span>
                                            <span className="text-md text-slate-500">
                                                10 Dec
                                            </span>
                                        </div>
                                        <div className="flex flex-col mx-2 py-3">
                                            <span className="text-lg text-slate-900 font-bold">
                                                Status
                                            </span>
                                            <span className="text-md text-slate-500">
                                                complete
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="flex items-center justify-center mb-10">
                            <div className="bg-white border h-auto  rounded-md flex items-center justify-center w-auto py-3 sm:w-auto sm:py-auto md:w-[500px] lg:w-[500px] mx-autho">
                                <h1 className="text-xl text-gray-700 px-10">
                                    You do not have any appointments for now
                                </h1>
                            </div>
                        </div>
                    )}
                </div>

                {/* payment */}
                {/* <div className="w-full">
                    <div className="text-lg text-slate-800 font-bold my-3">
                        Payment List
                    </div>
                    {[1, 2, 3, 4, 5, 6].map((x) => {
                        return (
                            <div className="flex gap-10">
                                <div className="flex flex-row mb-3 items-center justify-evenly px-4 py-2 border drop-shadow-md bg-white w-full">
                                    <BsHeart className="h-7 w-7 text-blue-600" />
                                    <div className="flex flex-col mx-2 py-3">
                                        <span className="text-lg text-slate-900 font-bold">
                                            Cardiogram
                                        </span>
                                        <span className="text-md text-slate-500">
                                            Dr.Calvin Carlo
                                        </span>
                                    </div>
                                    <span className="text-md text-slate-900">
                                        10 Dec
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div> */}
            </div>
        </div>
    );
};

export default Profile;
