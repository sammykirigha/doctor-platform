import React from "react";
import { BsHeart } from "react-icons/bs";
import { AiOutlineSend, AiOutlineMail, AiOutlineArrowRight } from 'react-icons/ai';
const Profile = () => {
    return (
        <div className="mx-4">
            <div className="flex flex-col mt-7 ">
                <div className="text-slate-900 text-lg font-semibold ">
                    Introduction:
                </div>
                <p className="pt-8 text-gray-500  font-medium">
                    Web designers to occupy the space which will later be filled
                    with 'real' content. This is required when, for example, the
                    final text is not yet available. Dummy text is also known as
                    'fill text'. Dummy texts have been in use by typesetters
                    since the 16th century.
                </p>
            </div>
            <div className="flex flex-col mt-5">
                <div className="flex flex-row items-center  mb-5 ">
                    <div className="text-lg text-slate-800 font-bold ">
                        Appointment List
                    </div>
                    <div className="text-lg text-slate-800 font-bold ml-64">
                        Payment List
                    </div>
                </div>
                <div className="">
                    {[1, 2, 3, 4, 5, 6].map((x) => {
                        return (
                            <div className="flex flex-row gap-10">
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
                </div>
            </div>
            <div className="flex flex-col mt-8">
                <h5 className="text-xl text-slate-900 font-bold">Contact us</h5>
                <div className="flex flex-row mb-6 w-full gap-10 mt-2">
                    <div className="flex flex-col items-center  bg-white w-[350px] h-[250px] border drop-shadow-md rounded-md">
						<span className="h-16 w-16 bg-blue-50 rounded-full relative mt-12">
							<AiOutlineSend className="h-9 w-9 absolute top-4 left-5 text-blue-600" />
						</span>
                        <p className="text-md text-slate-900 mt-2">New Messages</p>
                        <span className="flex items-center mt-2 text-blue-600 cursor-pointer">
                            Read more <AiOutlineArrowRight className="text-md ml-3  " />
                        </span>
                    </div>
                    <div className="flex flex-col items-center  bg-white w-[350px] h-[250px] border drop-shadow-md rounded-md">
						<span className="h-16 w-16 bg-blue-50 rounded-full relative mt-12 ">
							<AiOutlineMail className="h-9 w-9 absolute top-4 left-4 text-blue-600" />
						</span>
                        <p className="text-md text-slate-900 mt-2">Latest Proposals</p>
                        <span className="flex items-center mt-2 text-blue-600 cursor-pointer ">
                            View more <AiOutlineArrowRight className="text-md ml-3 " />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
