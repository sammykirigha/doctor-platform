import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import InputField from "./InputField";
import { Form, Formik } from "formik";
import { CONFIRM_TOKEN_QUERY } from "../../queries/auth";
import { useDispatch } from "react-redux";
import { confirmEmailrAction } from "../../state/actions/auth.action";
import { useState } from "react";

export const ConfirmEmail = () => {
    const params = useParams();
    const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isSubmitting, setIsSubmittingv] =useState(false)

  

	const onhandleSubmit = async () => {
		const inputValue = {
			token: params.authToken
		}
        const details = {
            query: CONFIRM_TOKEN_QUERY,
            variables: {
                input: inputValue,
            },
        };

		let { payload } = await dispatch(confirmEmailrAction(details));
		
		setIsSubmittingv(true)
		if (payload.success) {
			setIsSubmittingv(false)
            navigate("/login");
		}

		if (!payload.success) {
			setIsSubmittingv(false)
            navigate("/");
		}
		

    };

    return (
        <div className="mt-5 bg-white border mx-5 sm:mx-auto md:mx-auto rounded-md p-3  w-[100%] max-w-[600px]">
            <div className="my-10 w-full flex justify-center ">
                <h3 className="px-auto text-2xl font-bold">
                    Confirm Your Email
                </h3>
            </div>
            <div className="gap-2 hidden">
                <input name="token" type="text" label="Enter token:" />
            </div>
            <button
				className={`mt-5 w-full flex justify-center items-center gap-3 bg-blue-500 text-white py-2 px-8 rounded-md cursor-pointer`}
				onClick={onhandleSubmit}
            >
                {isSubmitting && <FaSpinner className='animate-spin' /> } {" "}Verify
            </button>
        </div>
    );
};
