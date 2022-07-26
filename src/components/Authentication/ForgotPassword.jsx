import React, { useState } from 'react';
import { ErrorMessage, Formik, Form } from "formik";
import InputField from './InputField';
import * as Yup from "yup";
import { FORGET_PASSWORD } from '../../queries/auth';
import { useDispatch, useSelector} from 'react-redux';
import { forgotPasswordAction } from '../../state/actions/auth.action';

const ForgotPassword = () => {
	
    const {message, loading} = useSelector((state) => state.forgotPassword)
    const [respondError, setRespondError] = useState(null);

    const dispatch = useDispatch()

    const onSubmit = async (values) => {

        const inputValues = {
            email: values.email,
        };
        
        const details = {
            query: FORGET_PASSWORD,
            variables: {
                email: inputValues,
            },
        };

         await dispatch(forgotPasswordAction(details));
       
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
                                className={`mt-5 w-full bg-blue-500 text-white py-2 px-8 rounded-md ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"} `}
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

export default ForgotPassword