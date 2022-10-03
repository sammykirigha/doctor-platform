import { useField, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";

const FormSelect = ({ name, options }) => {
    const [field, meta, helpers] = useField(name);

    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: "white", height: '40px', outline: '1px solid lightgray', marginTop: '8px'}),
    };

    return (
        <>
            <Select
                name={name}
                value={field.value}
                onChange={({ value }) => helpers.setValue(value)}
                options={options}
                styles={colourStyles}
            />
            <ErrorMessage name={name} />
        </>
    );
};

export default FormSelect;
