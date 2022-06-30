import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Appointment from './pages/Appointment';
import Apps from './pages/Apps';
import Authentication from './pages/Authentication';
import Blogs from './pages/Blogs';
import Components from './pages/Components';
import Dashboard from './pages/Dashboard';
import Doctors from './pages/Doctors';
import Pages from './pages/Pages';
import Pharmacy from './pages/Pharmacy';
import AddDoctor from './pages/Add-Doctor';
import DoctorsProfile from './pages/Doctors-Profile';
import { routes } from './routes';
import Overview from './components/Overview';
import Experience from './components/Experience';
import Review from './components/Review';
import TimeTable from './components/TimeTable';
import Settings from './components/Settings';
import Chat from './pages/Chat';
import Email from './pages/Email';
import Calendar from './pages/Calendar';
import Inbox from './components/emails/Inbox';
import Starred from './components/emails/Starred';
import Spam from './components/emails/Spam';
import Sent from './components/emails/Sent';
import Drafts from './components/emails/Drafts';
import Delete from './components/emails/Delete';
import Notes from './components/emails/Notes';
import Patients from './pages/Patients';
import AddPatient from './pages/Add-Patient';
import PatientsProfile from './pages/Patients-Profile';
import Profile from './components/Profile';
import { ProfileSettings } from './components/ProfileSettings';

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Dashboard />} />,
          <Route path='/dashboard' element={<Dashboard />} />,
          <Route path='/appointment' element={<Appointment />} />,
          <Route path='/authentication' element={<Authentication />} />,
          <Route path='/blogs' element={<Blogs />} />,
          <Route path='/components' element={<Components />} />,
          <Route path='/apps/chat' element={<Chat />} />
          <Route path='/apps/email' element={<Email />}>
            <Route exact index element={<Inbox />} />
            <Route exact path='starred' element={<Starred />} />
            <Route exact path='spam' element={<Spam />} />
            <Route exact path='sent' element={<Sent />} />
            <Route exact path='drafts' element={<Drafts />} />
            <Route exact path='delete' element={<Delete />} />
            <Route exact path='notes' element={<Notes />} />
          </Route>
          <Route path='/apps/calendar' element={<Calendar />} />
          <Route path='/patients/all-patients' element={<Patients />} />
          <Route path='/patients/add-patient' element={<AddPatient />} />
          <Route path='/patients/profile' element={<PatientsProfile />} >
             <Route exact path='profile' element={<Profile />} />
            <Route exact path='profile-settings' element={<ProfileSettings />} />
          </Route>
          <Route path='/doctors/all-doctors' element={<Doctors />} />,
          <Route path='/doctors/add-doctor' element={<AddDoctor />} />,
          <Route path='/doctors/profile' element={<DoctorsProfile />}>
            <Route exact index element={<Overview />} />
            <Route exact path='experience' element={<Experience />} />
            <Route exact path='reviews' element={<Review />} />
            <Route exact path='time-table' element={<TimeTable />} />
            <Route exact path='settings' element={<Settings />} />
          </Route>,
          <Route path='/pages' element={<Pages />} />,
          <Route path='/pharmacy' element={<Pharmacy />} />,
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
