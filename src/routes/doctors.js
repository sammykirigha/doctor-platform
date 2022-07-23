import Experience from "../components/others/Experience";
import Overview from "../components/others/Overview";
import Profile from "../components/others/Profile";
import Review from "../components/others/Review";
import Settings from "../components/others/Settings";
import TimeTable from "../components/others/TimeTable";
import Appointment from "../pages/Appointment";
import Dashboard from "../pages/Dashboard";
import DoctorsProfile from "../pages/doctors/Doctors-Profile";
import AddPatient from "../pages/patients/Add-Patient";
import Patients from "../pages/patients/Patients";
import DashboardRoutes from "./DashboardRoutes";

export const doctor_routes = [
    {
        path: "doctor",
        exact: true,
        component: DashboardRoutes,
		children: [
            { path: "", component: Dashboard },
            { path: "dashboard", exact: true, component: Dashboard },
            { path: "appointment", exact: true, component: Appointment },
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
        ],
    },

];