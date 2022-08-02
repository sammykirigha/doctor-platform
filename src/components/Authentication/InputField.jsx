import { type } from "@testing-library/user-event/dist/type";
import { ErrorMessage, Field, useField } from "formik";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const InputField = ({ label, type = "text", ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const [field, meta, onChange, value] = useField(props);

    return (
        <div className="flex flex-col gap-2">
            <label
                className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor={props.id || props.name}
            >
                {label}
            </label>
            <div className="relative flex-1">
                <Field
                    {...field}
                    {...props}
                    {...onChange}
                    {...value}
                    type={
                        type === "password"
                            ? showPassword
                                ? "text"
                                : "password"
                            : "text"
                    }
                    className="outline px-2 w-full placeholder:italic pl-2 placeholder:text-slate-300 outline-gray-200 h-[40px] rounded-md placeholder:pl-3  focus:border-0 focus:outline focus:outline-blue-600"
                />
                {type === "password" && (
                    <>
                        {!showPassword ? (
                            <FaRegEye
                                onClick={() => setShowPassword(true)}
                                className="mt-8 absolute right-2 -top-1/2 cursor-pointer text-gray-700 h-5 w-5"
                            />
                        ) : (
                            <FaRegEyeSlash
                                onClick={() => setShowPassword(false)}
                                className="mt-8 absolute right-2 -top-1/2 cursor-pointer text-gray-700 h-5 w-5"
                            />
                        )}
                    </>
                )}
            </div>

            {meta.touched && meta.error && (
                <ErrorMessage>{meta.error}</ErrorMessage>
            )}
        </div>
    );
};

export default InputField;
