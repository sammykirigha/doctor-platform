import { Outlet} from "react-router-dom";
import Layout from "../layout/Layout";

const DashboardRoutes = () => {
    return (
        <Layout>
            <Outlet />        
        </Layout>
    );
};

export default DashboardRoutes;
