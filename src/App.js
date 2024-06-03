import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Rootlayout from './Rootlayout';
import Home from './home/Home';
import Form from './form/Form';
import Aboutus from './aboutus/Aboutus';
import Admin from './admin/Admin';
import List from './list/List';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './context/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/form',
          element: <Form />
        },
        {
          path: '/aboutus',
          element: <Aboutus />
        },
        {
          path: '/admin',
          element: <Admin />
        },
        {
          path: '/list',
          element: (
            <PrivateRoute>
              <List />
            </PrivateRoute>
          )
        }
      ]
    }
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

