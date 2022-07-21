import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Appointment from "../pages/Appointment";
import Dashboard from "../pages/Dashboard";
import Doctors from "../pages/doctors/Doctors";
import DoctorsProfile from "../pages/doctors/Doctors-Profile";
import Overview from "../components/others/Overview";
import Experience from "../components/others/Experience";
import Review from "../components/others/Review";
import TimeTable from "../components/others/TimeTable";
import Settings from "../components/others/Settings";
import Chat from "../pages/social/Chat";
import Email from "../pages/social/Email";
import Calendar from "../pages/social/Calendar";
import Inbox from "../components/emails/Inbox";
import Starred from "../components/emails/Starred";
import Spam from "../components/emails/Spam";
import Sent from "../components/emails/Sent";
import Drafts from "../components/emails/Drafts";
import Delete from "../components/emails/Delete";
import Notes from "../components/emails/Notes";
import Patients from "../pages/patients/Patients";


const DashboardRoutes = () => {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />,
                    <Route path="/dashboard" element={<Dashboard />} />,
                    <Route path="/appointment" element={<Appointment />} />,
                    <Route path="/apps/chat" element={<Chat />} />
                    <Route path="/apps/email" element={<Email />}>
                        <Route exact index element={<Inbox />} />
                        <Route exact path="starred" element={<Starred />} />
                        <Route exact path="spam" element={<Spam />} />
                        <Route exact path="sent" element={<Sent />} />
                        <Route exact path="drafts" element={<Drafts />} />
                        <Route exact path="delete" element={<Delete />} />
                        <Route exact path="notes" element={<Notes />} />
                    </Route>
                    <Route path="/apps/calendar" element={<Calendar />} />
                    <Route
                        path="/patients/all-patients"
                        element={<Patients />}
                    />
                    <Route path="/doctors/all-doctors" element={<Doctors />} />
                    <Route path="/doctors/profile" element={<DoctorsProfile />}>
                        <Route exact index element={<Overview />} />
                        <Route
                            exact
                            path="experience"
                            element={<Experience />}
                        />
                        <Route exact path="reviews" element={<Review />} />
                        <Route
                            exact
                            path="time-table"
                            element={<TimeTable />}
                        />
                        <Route exact path="settings" element={<Settings />} />
                    </Route>
                </Routes>
            </Layout>
        </div>
    );
};

export default DashboardRoutes;
