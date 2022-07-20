import React, { useState } from 'react';
import { ErrorMessage, Field, Formik, Form } from "formik";
import InputField from './InputField';
import * as Yup from "yup";

const ForgotPassword = () => {
	  
    const [respondError, setRespondError] = useState(null);

    const onSubmit = async (values) => {

        const inputValues = {
            email: values.email,
        };
        
       
    };

    const SignUpSchema = Yup.object().shape({
        email: Yup.string()
            .email("invalid email")
            .required("Email cant be empty"),
    });



    return (
        <div className="flex flex-col mt-[10%] ">
            <div className="mt-5 bg-white border sm:mx-auto md:mx-auto rounded-md p-3  w-[100%] max-w-[600px]">
                <Formik
                    initialValues={{
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
							 <div className="my-10 w-full flex justify-center ">
                                <h3 className="px-auto text-2xl font-bold">
                                    Send Your Email
                                </h3>
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
                            <button
                                className="mt-5 w-full bg-blue-500 text-white py-2 px-8 rounded-md cursor-pointer"
                                disabled={isSubmitting}
                                type="submit"
                            >
                                Submit
                            </button>
                            
                            <div className="mt-5 flex justify-center">
                                <h3 className="text-md">Don't have an account? <strong className="cursor-pointer">Send your email</strong></h3>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default ForgotPassword