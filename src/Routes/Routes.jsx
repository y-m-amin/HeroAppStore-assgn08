import { createBrowserRouter } from 'react-router';
import Root from './Root';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';
import AppDetails from '../Pages/AppDetails/AppDetails';
import Installed from '../Pages/Installed/Installed';
import ErrPage from '../Pages/ErrPage/ErrPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrPage />,
    children: [
      { index: true, Component: Home },
      { path: 'apps', Component: AllApps },
      { path: 'apps/:id', Component: AppDetails },
      { path: 'installed', Component: Installed },
    ],
  },
]);

export default router;
