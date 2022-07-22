
import Appointment from "../pages/Appointment";
import DashboardRoutes from "./DashboardRoutes";

export const admin_routes = [
    {
        path: "layout",
        exact: true,
        component: DashboardRoutes,
		children: [
			{ path: "", component: ()=><div>Hey from layout</div> },
            { path: "appointment", exact: true, component: Appointment },
        ],
    },
];
