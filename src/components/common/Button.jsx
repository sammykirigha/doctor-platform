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
            className={`btn  ${isSubmitting ? ' bg-opacity-75 hover:bg-opacity-75 cursor-not-allowed' : 'cursor-pointer'}`}
		>
			 {isSubmitting && <ImSpinner10 className='animate-spin' /> } {" "}<span>{text}</span>
            
        </button>
    );
};

export default Button;
