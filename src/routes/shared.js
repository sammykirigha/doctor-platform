import ForgotPassword from "../components/Authentication/ForgotPassword";
import ResetPassword from "../components/Authentication/ResetPassword";
import Appointment from "../pages/Appointment";
import SignupForm from "../pages/auth/Signup";
import LandingPage from "../pages/LandingPage";
import DashboardRoutes from "./DashboardRoutes";

export const shared_routes = [
    { path: "signup", component: SignupForm },
    { path: "reset-password", component: ResetPassword },
    { path: "forgot-password", component: ForgotPassword },
    { path: "landing-page", component: LandingPage },
];
