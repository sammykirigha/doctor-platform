import React from "react";
import { ImSpinner10 } from "react-icons/im";
import { useNavigate } from "react-router-dom";


const Button = ({ text, type, to = "", onClick = () => { }, loading = false, isSubmitting}) => {
	const navigate = useNavigate();
    return (
        <button
            type={type}
			onClick={to ===""?onClick: navigate(to)}
            disabled={loading}
            className={`button  mt-3 flex justify-center items-center gap-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md py-3 px-6  ${isSubmitting ? ' bg-opacity-75 hover:bg-opacity-75 cursor-not-allowed' : 'cursor-pointer'}`}
		>
			 {isSubmitting && <ImSpinner10 className='animate-spin' /> } {" "}<span>{text}</span>
            
        </button>
    );
};

export default Button;
