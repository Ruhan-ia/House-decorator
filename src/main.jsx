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
  useQuery,
} from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
      path:'/',
      element:<Home></Home>
    }
  ]
  },
]);
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
    
  </React.StrictMode>,
)
