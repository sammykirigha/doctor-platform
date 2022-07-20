import React, { useState } from "react";

import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../../queries/auth";
import InputField from "../../components/Authentication/InputField";

const ResetPassword = () => {
    let navigate = useNavigate();
    const [setRespondError] = useState(null);

    const onSubmit = async (values) => {
        const inputValues = {
            email: values.email,
            password: values.password,
        };

      
    };

    const OldPasswordSchema = Yup.object().shape({
        oldPassword: Yup.string()
            .required("Password cant be empty")
            .test("len", "Very weak", (val) => val.length > 5)
            .test("len", "Weak", (val) => val.length > 8),
    });

    const NewPasswordSchema = Yup.object().shape({
        newPassword: Yup.string()
            .required("new Password cant be empty")
            .test("len", "Very weak", (val) => val.length > 5)
            .test("len", "Weak", (val) => val.length > 8),
    });

    const ConfirmNewPasswordSchema = Yup.object().shape({
        confirmNewPassword: Yup.string()
            .required("confirm password cant be empty")
            .test("len", "Very weak", (val) => val.length > 5)
            .test("len", "Weak", (val) => val.length > 8),
    });

    const validatOlePassword = (value) => {
        let error = undefined;
        try {
            OldPasswordSchema.validateSync({
                password: value,
            });
        } catch (validationError) {
            error = validationError.errors[0];
        }

        return error;
    };

    const validateNewPassword = (value) => {
        let error = undefined;
        try {
            NewPasswordSchema.validateSync({
                password: value,
            });
        } catch (validationError) {
            error = validationError.errors[0];
        }

        return error;
	};
	
	 const validateConfirmPassword = (value) => {
        let error = undefined;
        try {
            ConfirmNewPasswordSchema.validateSync({
                password: value,
            });
        } catch (validationError) {
            error = validationError.errors[0];
        }

        return error;
    };

    return (
        <div className="flex flex-col mt-[10%] ">
            <div className="mt-5 bg-white border sm:mx-auto md:mx-auto rounded-md p-3  w-[100%] max-w-[600px]">
                <Formik
                    initialValues={{
                        oldPassword: "",
                        newPassword: "",
                        confirmNewPassword: "",
                    }}
                    onSubmit={onSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <Form className="pb-5 px-10">
                            <div className="my-12 w-full flex justify-center ">
                                <h3 className="px-auto text-2xl font-bold">
                                    Reset Your Password
                                </h3>
                            </div>
                            <div className="flex flex-col gap-2">
                                <InputField
                                    name="oldPassword"
									type="password"
									validate={validatOlePassword}
                                    label="Old Password:"
                                />
                                <ErrorMessage name="oldPassword">
                                    {(error) => (
                                        <p className="text-md text-red-600">
                                            {error}
                                        </p>
                                    )}
                                </ErrorMessage>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <InputField
                                    name="newPassword"
                                    validate={validateNewPassword}
                                    type="password"
                                    label="Enter New Password:"
                                />
                                <ErrorMessage name="newPassword">
                                    {(error) => (
                                        <p className="text-md text-red-600">
                                            {" "}
                                            {error}
                                        </p>
                                    )}
                                </ErrorMessage>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <InputField
                                    name="confirmNewPassword"
                                    validate={validateConfirmPassword}
                                    type="password"
                                    label="Confirm New Password:"
                                />
                                <ErrorMessage name="confirmNewPassword">
                                    {(error) => (
                                        <p className="text-md text-red-600">
                                            {" "}
                                            {error}
                                        </p>
                                    )}
                                </ErrorMessage>
                            </div>

                            <button
                                className="mt-5 w-full bg-blue-500 text-white py-2 px-8 rounded-md cursor-pointer"
                                disabled={isSubmitting}
                                type="submit"
                            >
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default ResetPassword;
