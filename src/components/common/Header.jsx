import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Header = ({ pathname }) => {
    return (
        <div>
            <div className="flex flex-row items-center justify-between">
                <h4 className="text-lg text-slate-800 font-semibold mb-2">
                    {pathname.toUpperCase()}
                </h4>
                <div>
                    <p className="paragraph inline-flex items-center justify-between text-md uppercase text-md ">
                        Docris{" "}
                        <RiArrowRightSLine className="flex items-center mx-2" />{" "}
                        <span className="text-blue-700 text-md">
                            {pathname.toUpperCase()}
                        </span>{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
