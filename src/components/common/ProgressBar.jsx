import React from "react";

const ProgressBar = ({ bgcolor, progress, height }) => {
    const Parentdiv = {
        height: height,
        width: "100%",
        backgroundColor: "gray",
        borderRadius: 40,
    };

    const Childdiv = {
        height: "100%",
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: "right",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
    };
    const progresstext = {
        color: "white",
        fontWeight: 400,
        textAlign: "center",
    };
    return (
        <div>
            <div className="mb-6">
                <span className=" text-md text-slate-900">
                    {`Complete your profile ${progress}%`}
                </span>
            </div>
            <div style={Parentdiv}>
                <div style={Childdiv}>
                    <span style={progresstext}></span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
