import { Outlet } from "react-router-dom";
import Layout from "../layout/Layout";

const DoctorsDashboardRoutes = () => {
    return (
        <div>
            <Layout>
                <Outlet />
            </Layout>
        </div>
    );
};

export default DoctorsDashboardRoutes;
