import ForgotPassword from "../components/Authentication/ForgotPassword";
import ResetPassword from "../components/Authentication/ResetPassword";
import LoginForm from "../pages/auth/Login";
import SignupForm from "../pages/auth/Signup";
import AddDoctor from "../pages/doctors/Add-Doctor";
import LandingPage from "../pages/LandingPage";
import AddPatient from "../pages/patients/Add-Patient";

export const shared_routes = [
    { path: "login", component: LoginForm },
    { path: "/", component: SignupForm },
    { path: "reset-password/:resetToken", component: ResetPassword },
    { path: "forgot-password", component: ForgotPassword },
    { path: "landing-page/add-doctor", component: AddDoctor },
    { path: "landing-page/add-patient", component: AddPatient },
    { path: "landing-page", component: LandingPage },
];
