import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Appointment from "../pages/Appointment";
import Blogs from "../pages/Blogs";
import Components from "../pages/Components";
import Dashboard from "../pages/Dashboard";
import Doctors from "../pages/doctors/Doctors";
import Pages from "../pages/Pages";
import Pharmacy from "../pages/Pharmacy";
import AddDoctor from "../pages/doctors/Add-Doctor";
import DoctorsProfile from "../pages/doctors/Doctors-Profile";
import Overview from "../components/others/Overview";
import Experience from "../components/others/Experience";
import Review from "../components/others/Review";
import TimeTable from "../components/others/TimeTable";
import Settings from "../components/others/Settings";
import Chat from "../pages/social/Chat";
import Email from "../pages/social/Email";
import Calendar from "../pages/social/Calendar";
import Inbox from "../components/emails/Inbox";
import Starred from "../components/emails/Starred";
import Spam from "../components/emails/Spam";
import Sent from "../components/emails/Sent";
import Drafts from "../components/emails/Drafts";
import Delete from "../components/emails/Delete";
import Notes from "../components/emails/Notes";
import Patients from "../pages/patients/Patients";
import AddPatient from "../pages/patients/Patients";
import PatientsProfile from "../pages/patients/Patients";
import Profile from "../components/others/Profile";
import { ProfileSettings } from "../components/others/ProfileSettings";


const DashboardRoutes = () => {
    return (
        <Layout>
            <Outlet />        
        </Layout>
    );
};

export default DashboardRoutes;
