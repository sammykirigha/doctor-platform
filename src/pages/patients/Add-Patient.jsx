import React, { useEffect, useRef, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import InputField from "../../components/Authentication/InputField";
import { Field, Form, Formik, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import useFetchDoctor from "../../hooks/useFetchDoctor";
import useFetchAllDoctor from "../../hooks/useFetchAllDoctors";
import fileUploader from "../../utils/file-uploader";
import FormSelect from "../../components/others/Select";
import DatePickerField from "../../components/others/DatePicker";
import { resetNotifications } from "../../state/reducers/error.reducer";
import { CREATE_PATIENT_QUERY } from "../../queries/patient";
import { createNewPatientAccountAction } from "../../state/actions/patient.action";

const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
];

const maritalStatusOptions = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
];

const AddPatient = () => {
    const [uploading, setUploading] = useState(false);
    const [profileImage, setProfileImage] = useState("");

    const { user } = useSelector((state) => state.auth);
    const { doctor, doctors } = useSelector((state) => state.doctor);

    const params = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const imageUploadRef = useRef(null);

    const firstName = params.pathname.split("/")[1];
    const secondName = params.pathname.split("/")[2];



    const onSubmit = async (values) => {
        let myValues = JSON.parse(JSON.stringify(values))

        const inputValues = {
            firstname: myValues.firstname,
            lastname: myValues.lastname,
            email: myValues.email,
            phone: myValues.phone,
            address: myValues.address,
            dateOfBirth: myValues.dateOfBirth,
            gender: myValues.gender,
            bloodGroup: myValues.bloodGroup,
            county: myValues.county,
            nationality: myValues.nationality,
            maritalStatus: myValues.maritalStatus,
            image: myValues.image,
            disability: myValues.disability
        }

        const details = {
            query: CREATE_PATIENT_QUERY,
            variables: {
                input: inputValues
            }
        }

        console.log('details',details);

        const res = await dispatch(createNewPatientAccountAction(details))
        if (res.payload.success) {
            navigate("/patient", { replace: true });
        } 
    }


    // useFetchAllDoctor();

     useEffect(() => {
        return ()=>dispatch(resetNotifications())
     }, [dispatch])
    
    return (
        <div className="mx-4 min-h-screen bg-gray-100 pb-8">
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-between pb-8 border">
                <h3 className="text-lg text-slate-900 font-bold">
                    Create A New Patient Account
                </h3>
                <div>
                    <p className="paragraph inline-flex items-center justify-between uppercase text-sm sm:text-sm md:text-md lg:text-md ">
                        Docris{" "}
                        <RiArrowRightSLine className="flex items-center mx-2 mt-0.5" />{" "}
                        <span className="text-blue-700 text-md">
                            {firstName.toUpperCase()}
                        </span>{" "}
                        <RiArrowRightSLine className="flex items-center mx-2 mt-0.5" />{" "}
                        <span className="text-blue-700 text-md">
                            {secondName.toUpperCase()}
                        </span>{" "}
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center sm:flex-col md:flex-col lg:flex-row mt-3 w-full gap-3 rounded-md">
                <div className="sm:w-[100%] md:w-[100%] lg:w-[60%] bg-white rounded-md sm:h-auto">
                    <div className="mx-3 mt-5 mb-5">
                        <Formik
                            initialValues={{
                                firstname: "",
                                lastname: "",
                                email: "",
                                phone: "",
                                image: "",
                                address: "",
                                county: "",
                                bloodGroup: "",
                                nationality: "",
                                gender: "",
                                dateOfBirth: "",
                                maritalStatus: "",
                                disability: false
                            }}
                            onSubmit={onSubmit}
                            // validationSchema={createDoctorSchema}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                setFieldValue
                            }) => (
                                // <div className="mx-3 mt-5 mb-5">
                                <Form className="flex flex-col">
                                    <div className="flex flex-col  sm:flex-col md:flex-row items-center justify-between sm:ml-5 md:ml-9 mr-3 mt-7 ">
                                        <div className="flex flex-col justify-center sm:flex-col md:flex-row lg:flex-row items-center ">
                                                <img
                                                    src={
                                                        profileImage === ""
                                                            ? "https://nellions.co.ug/wp-content/uploads/2018/06/male-placeholder-image.jpeg"
                                                            : profileImage
                                                    }
                                                    value={values.image}
                                                    name="image"
                                                    alt="doc"
                                                    className=" h-[4.5rem] w-[4.5rem] sm:h-[4.5rem] sm:w-[4.5rem] md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full ml-2"
                                                />
                                            <div className="flex flex-col ml-5">
                                                <h2 className="text-lg text-slate-900 font-semibold mb-2">
                                                    Upload Your Picture
                                                </h2>
                                                <p className="text-md text-gray-500 w-auto md:w-80">
                                                    Use an image at least 600px
                                                    by 600px in either .jpg or
                                                    .png format
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" mb-3 flex mt-5 sm:flex-row sm:mt-4 md:flex-col lg:flex-col gap-3 items-center">
                                            <Button
                                                onClick={() =>
                                                    imageUploadRef?.current?.click()
                                                }
                                                type="button"
                                                text="Upload"
                                                loading={uploading}
                                            />
                                            
                                            <input
                                                ref={imageUploadRef}
                                                onChange={
                                                   async (e) => {
                                                        if (e.target.files?.length === 0) return;

                                                        const file = e.target.files[0];

                                                        try {
                                                            setUploading(true);
                                                            const url = await fileUploader(file);
                                                            setUploading(false);
                                                            setProfileImage(url);
                                                            setFieldValue("image", url)
                                                        } catch (error) {
                                                            setUploading(false);
                                                            console.log(error);
                                                        }
                                                    }
                                                    }
                                                className="hidden"
                                                type="file"
                                                id=""
                                            />
                                        </div>
                                    </div>
                                    <div className="flex  flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5  lg:gap-5">
                                        <div className="flex flex-col sm:w-full ">
                                            <InputField
                                                name="firstname"
                                                value={values.firstname}
                                                validate=""
                                                type="text"
                                                label="First Name"
                                                placeholder="First Name:"
                                            />
                                        </div>
                                        <div className="flex flex-col sm:w-full ">
                                            <InputField
                                                name="lastname"
                                                value={values.lastname}
                                                validate=""
                                                type="text"
                                                label="Last Name"
                                                placeholder="Last Name:"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5  lg:gap-5">
                                        <div className="flex flex-col sm:w-full ">
                                            <InputField
                                                name="email"
                                                value={values.email}
                                                validate=""
                                                type="email"
                                                label="Email address:"
                                                placeholder="Email address:"
                                            />
                                        </div>
                                        <div className="flex flex-col sm:w-full">
                                            <InputField
                                                name="phone"
                                                value={values.phone}
                                                validate=""
                                                type="text"
                                                label="Phone Num:"
                                                placeholder="Phone Num:"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5  lg:gap-5">
                                        <div className="flex flex-col sm:w-full ">
                                            <InputField
                                                name="address"
                                                value={values.address}
                                                validate=""
                                                type="text"
                                                label="Address:"
                                                placeholder="Address:"
                                            />
                                        </div>
                                        <div className="flex flex-col sm:w-full ">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                                Gender
                                            </label>
                                            <FormSelect name="gender" options={genderOptions} />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5  lg:gap-5">
                                        <div className="flex flex-col sm:w-full ">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500 mb-2">
                                                DOB
                                            </label>
                                            <DatePickerField name="dateOfBirth" />
                                        </div>
                                        <div className="flex flex-col sm:w-full">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500 mb-3 ">
                                                Disability
                                            </label>
                                            <div className="flex justify-between mt-0">
                                                <div className="flex flex-row gap-3 items-center ">
                                                    <input
                                                        name="disability"
                                                        onChange={(event) => {
                                                            const value = event.target.checked ? true : false
                                                            setFieldValue('disability', value)
                                                            }}
                                                        type="checkbox"
                                                        class="w-6 h-6"
                                                    />
                                                    <span className="text-xl text-slate-900">
                                                        Do you have any
                                                        disability?
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5  lg:gap-5">
                                        <div className="flex flex-col sm:w-full ">
                                            <InputField
                                                name="county"
                                                value={values.county}
                                                validate=""
                                                type="text"
                                                label="County:"
                                                placeholder="County of Residence:"
                                            />
                                        </div>
                                        <div className="flex flex-col sm:w-full">
                                            <InputField
                                                name="bloodGroup"
                                                value={values.bloodGroup}
                                                validate=""
                                                type="text"
                                                label="Blood Group:"
                                                placeholder="Blood Group:"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-10 sm:flex-col md:flex-row sm:items-start md:items-center justify-between ml-3 mb-5  lg:gap-5">
                                        <div className="flex flex-col sm:w-full  ">
                                            <InputField
                                                name="nationality"
                                                value={values.nationality}
                                                validate=""
                                                type="text"
                                                label="Nationality:"
                                                placeholder="Nationality:"
                                            />
                                        </div>
                                        <div className="flex flex-col sm:w-full ">
                                            <label className="text-lg font-medium after:content-['*'] after:ml-0.5 after:text-red-500">
                                                Marital Status
                                            </label>
                                             <FormSelect name="maritalStatus" options={maritalStatusOptions} />
                                            
                                        </div>
                                    </div>
                                    <div className=" ml-3 ">
                                        <Button
                                            className={`mt-5 w-[200px] bg-blue-500 text-white py-2 px-8 rounded-md cursor-pointer`}
                                            disabled={isSubmitting}
                                            type="submit"
                                            text="Create Account"
                                        />
                                    </div>
                                </Form>
                                // </div>
                            )}
                        </Formik>
                    </div>
                </div>
                {user?.role === "doctor" || user?.role === "user" ? null : (
                    <div className="sm:w-[100%] md:w-[100%] lg:w-[40%] bg-white rounded-md pb-5">
                        <div className="mt-4 pl-4 border-b border-gray-400 pb-7 pt-4">
                            <h4 className="text-lg text-slate-800 font-semibold">
                                Doctor's List
                            </h4>
                        </div>
                        <div className="slim-scrollbar overflow-auto h-[700px]  ">
                            {doctors &&
                                doctors?.map((doc, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-row  pl-3 mb-5 mt-2 mx-2 rounded-md border"
                                        >
                                            <div className="h-[100px] w-[100px] border my-3 rounded-lg drop-shadow-sm">
                                                <img
                                                    src={doc?.image}
                                                    alt="doc"
                                                    height="100%"
                                                    width="100%"
                                                />
                                            </div>
                                            <div className="flex flex-col ml-5 mt-3">
                                                <h5 className="text-lg text-slate-900 font-semibold">
                                                    {doc.firstname}{" "}
                                                    {doc.lastname}
                                                </h5>
                                                <span className="text-md text-gray-400">
                                                    {doc.specialization}
                                                </span>
                                                <p className="text-md text-gray-400">
                                                    {/* //TODO:show rating */}
                                                    {/* {doc.experirnce} */}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            <div className="mt-3 ml-7 mb-3">
                                <Button
                                    text="All Doctors"
                                    // to="/"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddPatient;
