import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FormPage from './pages/FormPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/form',
    element: <FormPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
