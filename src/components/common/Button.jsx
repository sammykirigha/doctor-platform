import React from "react";
import { ImSpinner10 } from "react-icons/im";
import { useNavigate } from "react-router-dom";


const Button = ({ text, type, to = "", onClick = () => { }, loading = false }) => {
	const navigate = useNavigate();
    return (
        <button
            type={type}
			onClick={to ===""?onClick: navigate(to)}
			disabled={loading}
            className="button disabled:cursor-not-allowed disabled:bg-opacity-75 disabled:hover:bg-opacity-75 w-[200px] mt-3 flex justify-center items-center gap-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md py-3 px-6 "
		>
			{loading && <ImSpinner10 className="animate-spin" />}
            <span>{text}</span>
        </button>
    );
};

export default Button;
