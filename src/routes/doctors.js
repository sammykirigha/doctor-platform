import Appointment from "../pages/Appointment";
import Doctors from "../pages/doctors/Doctors";
import Patients from "../pages/patients/Patients";
import AdminDashboardRoutes from "./DashboardRoutes";

export const doctor_routes = [
    {
        path: "admin",
        exact: true,
        component: AdminDashboardRoutes,
		children: [
			{ path: "", component: ()=><div>Hey from layout</div> },
            { path: "appointments", exact: true, component: Appointment },
            { path: "patients", exact: true, component: Patients },
            { path: "doctors", exact: true, component: Doctors },
        ],
    },

];