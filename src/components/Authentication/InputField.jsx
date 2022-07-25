import { ErrorMessage, Field, useField } from 'formik';
import React from 'react';

const InputField = ({ label, ...props }) => {

	const [field, meta, onChange, value] = useField(props)

  return (
	  <div className="flex flex-col gap-2">
		  <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor={props.id || props.name}>{label}</label>
		  <Field {...field} {...props} {...onChange} {...value} className="outline px-2 placeholder:italic pl-2 placeholder:text-slate-300 outline-gray-200 h-[40px] rounded-md placeholder:pl-3 "  />

		  {meta.touched && meta.error && (
			  <ErrorMessage>{ meta.error}</ErrorMessage>
		  )}
	</div>
  )
}

export default InputField