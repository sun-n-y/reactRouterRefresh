import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, HomeLayout } from './assets/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
