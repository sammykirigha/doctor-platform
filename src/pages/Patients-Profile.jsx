import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ProgressBar from "../components/common/ProgressBar";
import image1 from "../data/images/01.jpg";

const PatientsProfile = () => {
    const params = useLocation();
    const navigate = useNavigate();
    const firstName = params.pathname.split("/")[1];
    const secondName = params.pathname.split("/")[2];
    return (
        <div className="mx-4 min-h-screen">
            <div className="flex flex-row items-center justify-between mt-3">
                <h3 className="text-lg text-slate-900 font-bold">
                    Patient Profile
                </h3>
                <div>
                    <p className="paragraph inline-flex items-center justify-between text-md uppercase text-md ">
                        Docris{" "}
                        <RiArrowRightSLine className="flex items-center mx-2 mt-0.5" />{" "}
                        <span className="text-blue-700 text-md">
                            {firstName.toUpperCase()}
                        </span>{" "}
                        <RiArrowRightSLine className="flex items-center mx-2 mt-0.5" />{" "}
                        <span className="text-blue-700 text-md">
                            {secondName.toUpperCase()}
                        </span>{" "}
                    </p>
                </div>
            </div>
            <div className="flex flex-row w-full items-center justify-between">
                <div className="w-[20%] bg-white">
                    <div className="border-b">
                        <div className="bg-hero-pattern h-[80px] relative"></div>
                        <div className="ml-16 flex flex-row bt-white absolute top-32">
                            <img
                                src={image1}
                                height="100px"
                                width="100px"
                                className="rounded-full drop-shadow-lg"
                                alt="doc"
                            />
                        </div>
                        <div className="flex flex-col mt-10 ml-16">
                            <h3 className="text-lg text-slate-900 font-semibold">
                                Dr. Calvin Carlo
                            </h3>
                            <apn className="text-md text-gray-500">
                                25 Years
                            </apn>
                        </div>
                    </div>
                    <div className="my-8 mx-2">
                        <ProgressBar bgcolor={'blue'} progress={85} height={15} />
                    </div>
                </div>
                <div className="w-[50%] bg-blue-500">center</div>
                <div className="bg-red-500 w-[30%]">right</div>
            </div>
        </div>
    );
};

export default PatientsProfile;
