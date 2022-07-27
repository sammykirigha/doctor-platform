import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Notifications from "./components/common/Notifications";
import { admin_routes } from "./routes/admin";
import { doctor_routes } from "./routes/doctors";
import { shared_routes } from "./routes/shared";
import { useDispatch } from "react-redux";
import { getCurrentUserAction } from "./state/actions/auth.action";

const App = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const getUser = async () => {
            const { payload } = await dispatch(getCurrentUserAction());
            console.log({ payload });
            if (!payload.success) navigate("/login", { replace: true });
        };

        if (!!localStorage.getItem("auth-token")) {
            getUser();
        }
    }, [dispatch, navigate]);

    const renderRoute = ({ path, exact, component: Component, children }) => {
        return (
            <Route path={path} exact={exact} element={<Component />}>
                {children?.length > 0 &&
                    children?.map((route) => {
                        return renderRoute(route);
                    })}
            </Route>
        );
    };

    return (
        <div>
            <Notifications />
            <Routes>
                {shared_routes?.map((route) => renderRoute(route))}
                {admin_routes?.map((route) => renderRoute(route))}
                {doctor_routes?.map((route) => renderRoute(route))}
            </Routes>
        </div>
    );
};

export default App;
