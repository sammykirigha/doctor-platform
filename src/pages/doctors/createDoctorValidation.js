import * as Yup from "yup";

const createDoctorSchema = Yup.object().shape({
    firstname: Yup.string().required("firstname cant be empty"),
    lastname: Yup.string().required("lastname cant be empty"),
    email: Yup.string().email("invalid email").required("Email cant be empty"),
    phone: Yup.string().required("phone cant be empty"),
    address: Yup.string().required("address cant be empty"),
    specialization: Yup.string().required("specialization cant be empty"),
    department: Yup.string().required("department cant be empty"),
    gender: Yup.string().required("gender cant be empty"),
    twitterlLink: Yup.string().required("twitterlLink cant be empty"),
    facebooklLink: Yup.string().required("facebooklLink cant be empty"),
    linkedinlLink: Yup.string().required("linkedinlLink cant be empty"),
    instagramlLink: Yup.string().required("instagramlLink cant be empty"),
    experience: Yup.string().required("experience cant be empty"),
});

export default createDoctorSchema;
