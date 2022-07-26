import { ErrorMessage, Field, Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import * as Yup from "yup";
import logo from "../../data/images/logo3.jpg";
import { SIGNUP_USER } from "../../queries/auth";
import InputField from '../../components/Authentication/InputField'
import { Link, useNavigate } from "react-router-dom";
import { signUpUserAction } from "../../state/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { resetNotifications } from "../../state/reducers/error.reducer";

const SignupForm = () => {
    const  {user, loading}  = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.notifications);
    const [error, setError] = useState("")

    const dispatch = useDispatch();
    let navigate = useNavigate();

 const onSubmit = async (values) => {
     const inputValues = {
            username: values.username,
            email: values.email,
            password: values.password,
        };

        const details = {
            query: SIGNUP_USER,
            variables: {
                input: inputValues,
            },
        };

     await dispatch(signUpUserAction(details));
     
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


    useEffect(() => {
        setError(message) 
        setTimeout(() => {
            setError("")
        }, 3000)

        if (user) {
                navigate("/login", { replace: true });
        }
        
    }, [user, navigate, message]);

   
     useEffect(() => {
         return ()=>dispatch(resetNotifications())
    },[dispatch])

    if (loading) {
        return (
            <div className="flex items-center justify-center mt-20">
                <p className="text-2xl text-gray-700">Signing you up...</p>
            </div>
        )
    }

    return (
          <div className="flex flex-col mt-20 ">
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
                <div className="mt-5 bg-white border mx-5 sm:mx-auto md:mx-auto rounded-md p-3  w-[100%] max-w-[600px]">
                    <Formik
                        initialValues={{
                            username: "",
                            email: "",
                            password: "",
                            confirmPassword: "",
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
                                {error && (
                                    <div className="bg-red-300 flex justify-center rounded-md">
                                        <h3 className="py-2">{error}</h3>
                                    </div>
                                )}
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
                                        value={values.username}
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
                                        value={values.email}
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
                                        value={values.password}
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
                                           <Link to="/login">Sign In</Link> 
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
