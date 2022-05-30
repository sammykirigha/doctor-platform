import { Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import { routes } from './routes';

const App = () => {
  return (
    <div className=''>
      <Layout>
        <Routes>
          {routes.map((route, index) => {
            return <>{ route}</>
          })}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
