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

const App = () => {
  return (
    <div className=''>
      <Layout>
        <Routes>
          <Route path='/' element={<Dashboard />} />,
          <Route path='/dashboard' element={<Dashboard />} />,
          <Route path='/appointment' element={<Appointment />} />,
          <Route path='/apps' element={<Apps />} />,
          <Route path='/authentication' element={<Authentication />} />,
          <Route path='/blogs' element={<Blogs />} />,
          <Route path='/components' element={<Components />} />,
          <Route path='/doctors/all-doctors' element={<Doctors />} />,
          <Route path='/doctors/add-doctor' element={<AddDoctor />} />,
          <Route path='/doctors/profile' element={<DoctorsProfile />}>
            <Route index path='overview' element={<Overview />} />
            <Route path='experience' element={<Experience />} />
            <Route path='reviews' element={<Review />} />
            <Route path='time-table' element={<TimeTable />} />
            <Route path='settings' element={<Settings />} />
          </Route>,
          <Route path='/pages' element={<Pages />} />,
          <Route path='/pharmacy' element={<Pharmacy />} />,
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
