import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Notifications = () => {
    const { error, message } = useSelector((state) => state.notifications);
    

    return (
        <div className="mt-16">
            {/* {error && (
				<div className="bg-red-200 z-50 py-7 text-center">{error}
			</div>
            )}

            {message && (
                <div className="bg-green-400 bg-opacity-50 py-7 text-center">
                    {message}
            </div>
            )} */}
        </div>
    );
};

export default Notifications;
