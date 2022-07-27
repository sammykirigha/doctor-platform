import { Outlet, useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const DashboardRoutes = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        const authToken = localStorage.getItem("auth-token");
        if (!authToken && !user?.id) {
            navigate("/login");
        }
    }, [user?.id, navigate]);

    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};

export default DashboardRoutes;
