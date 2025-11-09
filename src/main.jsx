import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import MainLayout from './layouts/MainLayout.jsx';
import AuthProvider from './authProvider/AuthProvider.jsx';
import SignUp from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import HomePage from './pages/HomePage.jsx';
import ShareGardeningTips from './pages/ShareGardeningTips.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index:true,
        Component:HomePage
      },
      {
        path: '/shareGardeningTips',
        Component:ShareGardeningTips,
      },
      {
        path: '/signUp',
        Component:SignUp,
      },
      {
        path:'/login',
        Component: Login,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
