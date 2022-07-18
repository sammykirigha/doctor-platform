import { Route, Routes } from 'react-router-dom';
import LoginForm from './pages/auth/Login';
import SignupForm from './pages/auth/Signup';
import DashboardRoutes from './routes/DashboardRoutes';
import LandingPage from './pages/LandingPage';

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
