import { ErrorMessage, Field, useField } from 'formik';
import React from 'react';

const InputField = ({ label, ...props }) => {

	const [field, meta] = useField(props)

  return (
	  <div className="flex flex-col gap-2">
		  <label className='text-lg font-medium' htmlFor={props.id || props.name}>{label}</label>
		  <Field {...field} {...props} onChange={props.onChange}  className="outline px-2 outline-gray-200 h-[40px] rounded-md placeholder:pl-3 "  />

		  {meta.touched && meta.error && (
			  <ErrorMessage>{ meta.error}</ErrorMessage>
		  )}
	</div>
  )
}

export default InputField