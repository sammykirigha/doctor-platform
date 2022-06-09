import React from "react";
import { useLocation } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import Button from "../components/Button";

const Doctors = () => {
    const params = useLocation();
    const pathname = params.pathname.split("/")[2];
    return (
        <div>
            <div className="flex flex-row items-center justify-between mx-4">
                <div>
                    <h4 className="text-lg text-slate-900 font-bold">Doctors</h4>
                    <p className="paragraph inline-flex items-center justify-between text-md uppercase text-md ">
                        Docris{" "}
                        <RiArrowRightSLine className="flex items-center mx-2 mt-0.5" />{" "}
                        <span className="text-blue-700 text-md">
                            {pathname.toUpperCase()}
                        </span>{" "}
                    </p>
                </div>
                <Button text="Add A New Doctor" />
            </div>
        </div>
    );
};

export default Doctors;
