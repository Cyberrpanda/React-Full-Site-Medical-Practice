import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Appoint from './Appointment.jsx'
import Services from './Services.jsx'  // Import the Services component
import Speciality from './Specialityareas.jsx'  // Import the Speciality component
import Status from './Status.jsx'  // Import the Status component
import Footer from './Footer.jsx'  // Import the Footer component
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/appointment',
    element: <Appoint />
  },~
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/Specialityareas',
    element: <Speciality />
  },
  {
    path: '/status',
    element: <Status />
  },
  {
    path: '/footer',
    element: <Footer />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
