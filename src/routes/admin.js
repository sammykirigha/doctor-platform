import Appointment from "../pages/Appointment";
import Doctors from "../pages/doctors/Doctors";
import Patients from "../pages/patients/Patients";
import DashboardRoutes from "./DashboardRoutes";
import DoctorsProfile from "../pages/doctors/Doctors-Profile";
import AddPatient from "../pages/patients/Add-Patient";
import PatientsProfile from "../pages/patients/Patients-Profile";
import Profile from "../components/others/Profile";
import { ProfileSettings } from "../components/others/ProfileSettings";
import AddDoctor from "../pages/doctors/Add-Doctor";
import Experience from "../components/others/Experience";
import Overview from "../components/others/Overview";
import Review from "../components/others/Review";
import TimeTable from "../components/others/TimeTable";
import Settings from "../components/others/Settings";

export const admin_routes = [
    {
        path: "admin",
        exact: true,
        component: DashboardRoutes,
        children: [
            { path: "", component: () => <div>Hey from layout</div> },
            { path: "dashboard", exact: true, component: DashboardRoutes },
            { path: "appointment", exact: true, component: Appointment },
            { path: "patients", exact: true, component: Patients },
            {
                path: "/admin/patients/new/",
                exact: true,
                component: AddPatient,
            },
            {
                path: "/admin/patients/:id",
                exact: true,
                component: PatientsProfile,
                children: [
                    { path: "", component: Profile },
                    { path: "profile", exact: true, component: Profile },
                    {
                        path: "settings",
                        exact: true,
                        component: ProfileSettings,
                    },
                ],
            },
            { path: "doctors/", exact: true, component: Doctors },
            { path: "/admin/doctors/new", exact: true, component: AddDoctor },
            {
                path: "/admin/doctors/:id",
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
