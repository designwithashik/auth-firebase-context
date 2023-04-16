import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProviders from './providers/AuthPoviders';
import Orders from './components/Orders';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './components/Profile';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login />

      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/orders',
        element:<PrivateRoute><Orders/></PrivateRoute>
      },
      {
        path: '/profile',
        element:<PrivateRoute><Profile/></PrivateRoute>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
