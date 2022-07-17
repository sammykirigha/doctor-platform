import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/Authentication/Login';
import SignupForm from './components/Authentication/Signup';
import DashboardRoutes from './layout/DashboardRoutes';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/layout' element={<DashboardRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
