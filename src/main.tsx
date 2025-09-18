import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import Overview from './pages/Overview'
import Resources from './pages/Resources'
import Feedbacks from './pages/Feedbacks'
import Volunteers from './pages/Volunteers'
import Settings from './pages/Settings'
import UserDirectory from './pages/UserDirectory'
import AnalyticsAndReports from './pages/AnalyticsAndReports'
import ContentManagement from './pages/ContentManagement'
import SendNotification from './pages/SendNotification'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to='overview' replace /> },
      { path: 'overview', element: <Overview /> },
      { path: 'resources', element: <Resources /> },
      { path: 'feedbacks', element: <Feedbacks /> },
      { path: 'volunteers', element: <Volunteers /> },
      { path: 'settings', element: <Settings /> },
      { path: 'user-directory', element: <UserDirectory /> },
      { path: 'analytics-and-reports', element: <AnalyticsAndReports /> },
      { path: 'content-management', element: <ContentManagement /> },
      { path: 'send-notification', element: <SendNotification /> },
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to='login' /> },
      { path: 'login', element: <h1>login</h1> },
      { path: 'register', element: <h1>register</h1> }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
