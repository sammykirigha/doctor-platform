import Delete from "../components/emails/Delete";
import Drafts from "../components/emails/Drafts";
import Inbox from "../components/emails/Inbox";
import Notes from "../components/emails/Notes";
import Sent from "../components/emails/Sent";
import Spam from "../components/emails/Spam";
import Starred from "../components/emails/Starred";
import Experience from "../components/others/Experience";
import Overview from "../components/others/Overview";
import Review from "../components/others/Review";
import Settings from "../components/others/Settings";
import TimeTable from "../components/others/TimeTable";
import Appointment from "../pages/Appointment";
import Dashboard from "../pages/Dashboard";
import DoctorAppointment from "../pages/doctors/DoctorAppointment";
import DoctorsProfile from "../pages/doctors/Doctors-Profile";
import AddPatient from "../pages/patients/Add-Patient";
import Patients from "../pages/patients/Patients";
import Profile from "../pages/patients/Profile";
import Calender from "../pages/social/Calendar";
import Chat from "../pages/social/Chat";
import Email from "../pages/social/Email";
import DashboardRoutes from "./DashboardRoutes";

export const doctor_routes = [
    {
        path: "doctor",
        exact: true,
        component: DashboardRoutes,
		children: [
            { path: "", component: Dashboard },
            { path: "dashboard", exact: true, component: Dashboard },
            { path: "doctor-appointment/:id", exact: true, component: DoctorAppointment },
            { path: "patients", exact: true, component: Patients },
            { path: "patients/new/", exact: true, component: AddPatient },
            {
                path: "doctors/:id",
                exact: true,
                component: DoctorsProfile,
                children: [
                    { path: "", component: Profile },
                    { path: "overview", exact: true, component: Overview },
                    { path: "experience", exact: true, component: Experience },
                    { path: "reviews", exact: true, component: Review },
                    { path: "time-table", exact: true, component: TimeTable },
                    { path: "settings", exact: true, component: Settings },
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
            { path: "chat", exact: true, component: Chat },
        ],
    },

];