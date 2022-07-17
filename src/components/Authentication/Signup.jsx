import { ErrorMessage, Field, Formik, Form } from "formik";
import React, { createRef, useRef, useState } from "react";
import * as Yup from "yup";
import InputField from "./InputField";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import logo from "../../data/images/logo3.jpg";
import { signinUserAction } from "../../state/actions/auth.action";
import { signupQuery } from "../../queries/auth";

const SignupForm = () => {
    const [signupData, setSignupData] = useState({
        username: "",
        email: "",
        password: "",
    });

   

    const onSubmit = async (values) => {
         const details = {
        signupQuery: signupQuery,
        input: {values}
    }
        await signinUserAction(details)
        console.log("==============");
        console.log(values);
        console.log("==============");
    };

    const handleValidation = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = "Email can't be empty";
        }

          if (!values.username) {
            errors.username = "username can't be empty";
        }

        return errors;
    };

    const SignUpSchema = Yup.object().shape({
        username: Yup.string().required("username cant be empty"),
        email: Yup.string()
            .email("invalid email")
            .required("Email cant be empty"),
    });

    const PasswordSchema = Yup.object().shape({
        password: Yup.string()
            .required("Password cant be empty")
            .test("len", "Very weak", (val) => val.length > 5)
            .test("len", "Weak", (val) => val.length > 8),
    });

    const validatePassword = (value) => {
        let error = undefined;
        try {
            PasswordSchema.validateSync({ password: value });
        } catch (validationError) {
            error = validationError.errors[0];
        }

        return error;
    };

    return (
        <div className="flex flex-col mt-[10%] ">
            <div className="mx-auto flex">
                <img
                    src={logo}
                    alt="logo"
                    height="54"
                    width="64"
                    className="ml-2 cursor-pointer rounded-full"
                />
                <h3 className="text-2xl text-gray-800 font-bold pt-3 pl-1 cursor-pointer ml-3">
                    Doctris
                </h3>
            </div>
            <div className="mt-5 bg-white border mx-auto rounded-md p-3 w-[600px]">
                <Formik
                    initialValues={{
                        username: "",
                        email: "",
                        password: "",
                        rememberMe: false,
                    }}
                    onSubmit={onSubmit}
                    validationSchema={SignUpSchema}
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
                                    Sign Up
                                </h3>
                            </div>
                            <div className="flex flex-col gap-2">
                                <InputField
                                    name="username"
                                    type="name"
                                    label="Your Username:"
                                />
                                <ErrorMessage name="username">
                                    {(error) => (
                                        <p className="text-md text-red-600">
                                            {error}
                                        </p>
                                    )}
                                </ErrorMessage>
                            </div>
                            <div className="flex flex-col gap-2">
                                <InputField
                                    name="email"
                                    type="email"
                                    label="Enter email:"
                                />
                                <ErrorMessage name="email">
                                    {(error) => (
                                        <p className="text-md text-red-600">
                                            {error}
                                        </p>
                                    )}
                                </ErrorMessage>
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <InputField
                                    name="password"
                                    validate={validatePassword}
                                    type="password"
                                    label="Password:"
                                />
                                <ErrorMessage name="password">
                                    {(error) => (
                                        <p className="text-md text-red-600">
                                            {" "}
                                            {error}
                                        </p>
                                    )}
                                </ErrorMessage>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-row gap-3 items-center mt-5">
                                    <Field
                                        name="rememberMe"
                                        type="checkbox"
                                        className="h-10"
                                    />
                                    <span className="text-lg text-slate-900">
                                        I Accept{" "}
                                        <strong className="text-blue-400 cursor-pointer">
                                            Terms & Condition
                                        </strong>
                                    </span>
                                </div>
                            </div>

                            <button
                                className="mt-5 w-full bg-blue-500 text-white py-2 px-8 rounded-md cursor-pointer"
                                disabled={isSubmitting}
                                type="submit"
                            >
                                Register
                            </button>
                            <div className=" flex justify-center mt-2">
                                <span className="mx-auto text-lg font-semibold">
                                    or
                                </span>
                            </div>
                            <div className="flex justify-between mt-4 w-full gap-x-5">
                                <div className="border bg-blue-100 rounded-md flex items-center justify-center w-[50%] h-[50px] cursor-pointer">
                                    <FaFacebook className="h-6 w-6" />
                                    <span className="ml-5">Facebook</span>
                                </div>
                                <div className="border bg-blue-100 rounded-md flex items-center justify-center w-[50%] h-[50px] cursor-pointer">
                                    <FcGoogle className="h-6 w-6" />
                                    <span className="ml-5">Google</span>
                                </div>
                            </div>

                            <div className="mt-5 flex justify-center">
                                <h3 className="text-md">
                                    Already have an account?{" "}
                                    <strong className="cursor-pointer">
                                        Sign In
                                    </strong>
                                </h3>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SignupForm;
