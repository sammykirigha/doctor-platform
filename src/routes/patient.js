import Delete from "../components/emails/Delete";
import Drafts from "../components/emails/Drafts";
import Inbox from "../components/emails/Inbox";
import Notes from "../components/emails/Notes";
import Sent from "../components/emails/Sent";
import Spam from "../components/emails/Spam";
import Starred from "../components/emails/Starred";
import Experience from "../components/others/Experience";
import Overview from "../components/others/Overview";
import Profile from "../components/others/Profile";
import { ProfileSettings } from "../components/others/ProfileSettings";
import Review from "../components/others/Review";
import Settings from "../components/others/Settings";
import TimeTable from "../components/others/TimeTable";
import Appointment from "../pages/Appointment";
import Dashboard from "../pages/Dashboard";
import Doctors from "../pages/doctors/Doctors";
import DoctorsProfile from "../pages/doctors/Doctors-Profile";
import AddPatient from "../pages/patients/Add-Patient";
import PatientAppointments from "../pages/patients/PatientAppointments";
import PatientDashboard from "../pages/patients/PatientDashboard";
import Patients from "../pages/patients/Patients";
import PatientsProfile from "../pages/patients/Patients-Profile";
import Calender from "../pages/social/Calendar";
import Chat from "../pages/social/Chat";
import Email from "../pages/social/Email";
import DashboardRoutes from "./DashboardRoutes";

export const patient_routes = [
    {
        path: "patient",
        exact: true,
        component: DashboardRoutes,
		children: [
            { path: "", component: PatientDashboard },
            { path: "dashboard", exact: true, component: PatientDashboard },
            { path: "appointment", exact: true, component: PatientAppointments },
            { path: "doctors", exact: true, component: Doctors },
            {
                path: "patients/:id",
                exact: true,
                component: PatientsProfile,
                children: [
                    { path: "profile", exact: true, component: Profile },
                    { path: "settings", exact: true, component: ProfileSettings },
                ],
            },
            {
                path: "email/:id",
                exact: true,
                component: Email,
                children: [
                    { path: "", component: Inbox },
                    { path: "inbox", exact: true, component: Inbox },
                    { path: "spam", exact: true, component: Spam },
                    { path: "sent", exact: true, component: Sent },
                    { path: "starred", exact: true, component: Starred },
                    { path: "drafts", exact: true, component: Drafts },
                    { path: "delete", exact: true, component: Delete },
                    { path: "notes", exact: true, component: Notes },
                ],
            },
            { path: "calender", exact: true, component: Calender },
            { path: "chatt", exact: true, component: Chat },
        ],
    },

];