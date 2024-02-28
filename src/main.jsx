import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FormPage from './pages/FormPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx'
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx"
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: '/form',
    element: <FormPage />
  },
  {
    path: "/home",
    element: <App />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
