import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/HomePage/Home.jsx';
import Main from './Component/Layout/Main.jsx';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import Dashboard from './Component/DashboardPage/Dashboard.jsx';
import Cart from './Component/DashboardPage/Cart.jsx';
import Profile from './Component/DashboardPage/Profile.jsx';
import AuthProvider from './Component/Provider/AuthProvider.jsx';
import PrivateRoute from './Component/PrivarteRoute/PrivateRoute.jsx';
import Login from './Component/Login/Login.jsx';
import SignUp from './Component/SignUp/SignUp.jsx';
import AllUsers from './Component/DashboardPage/AllUsers.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
      path:'/',
      element:<Home></Home>
    },
      {
      path:'/login',
      element:<Login></Login>
    },
      {
      path:'/signUp',
      element:<SignUp></SignUp>
    }
  ]
  },
  {
    
    path:"/dashBoard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,

    children:[
      {path:"cart",
      element:<Cart></Cart>},
     {
        path:"profile",
        element:<Profile></Profile>
      },
     {
        path:"allUsers",
        element:<AllUsers></AllUsers>
      }
      
    ]
}
]);
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
