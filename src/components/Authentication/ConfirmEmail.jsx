import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import InputField from './InputField';
import { Form, Formik } from 'formik';

export const ConfirmEmail = () => {
	const params = useParams();
    const navigate = useNavigate(); 

	 const onSubmit = async (values) => {

        const inputValues = {
            email: values.email,
        };
        
        const details = {
            query: params,
            variables: {
                email: params,
            },
        };

        // let { payload} = await dispatch(forgotPasswordAction(details));
       
        // if (payload.success) {
        //     navigate('/login')
        // }
    };

  return (
	  <div>
		   <div className="flex flex-col mt-[10%] ">
            <div className="mt-5 bg-white border sm:mx-auto md:mx-auto rounded-md p-3  w-[100%] max-w-[600px]">
                <Formik
                    initialValues={{
                        token: "",
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
							 <div className="my-10 w-full flex justify-center ">
                                <h3 className="px-auto text-2xl font-bold">
                                    Send Your Email
                                </h3>
                            </div>
                            <div className="flex flex-col gap-2">
                                <InputField
                                    name="token"
                                    type="text"
                                    label="Enter email:"
                                />
                            </div>
                            <button
                                className={`mt-5 w-full flex justify-center items-center gap-3 bg-blue-500 text-white py-2 px-8 rounded-md ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"} `}
                                disabled={isSubmitting}
                                type="submit"
                            >
                                {isSubmitting && <FaSpinner className='animate-spin' /> } {" "}Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
	</div>
  )
}
