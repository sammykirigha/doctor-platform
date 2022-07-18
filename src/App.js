import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/Authentication/Login';
import SignupForm from './components/Authentication/Signup';
import DashboardRoutes from './layout/DashboardRoutes';
import LandingPage from './layout/LandingPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/landing-page' element={<LandingPage />} />
        <Route path='/layout' element={<DashboardRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
