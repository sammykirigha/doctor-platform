import { Route, Routes } from 'react-router-dom';
import { admin_routes } from './routes/admin';
import { shared_routes } from './routes/shared';

const App = () => {


  const renderRoute = ({ path, exact, component: Component, children }) => {
    return (
      <Route path={path} exact={exact} element={<Component />} >
        {
          children?.length > 0 && 
            children?.map(route => {
              return renderRoute(route)
            })
        }
      </Route>
    )
  }

  return (
    <div>
      <Routes>
        {
          shared_routes?.map(route => renderRoute(route))
        }
        {
          admin_routes?.map(route => renderRoute(route))
        }
      </Routes>
    </div>
  );
}

export default App;
