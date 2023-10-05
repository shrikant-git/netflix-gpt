import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './Login';
import Browse from './Browse';
import Demo from './Demo';

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/browse', element: <Browse /> },
    { path: '/demo', element: <Demo /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
