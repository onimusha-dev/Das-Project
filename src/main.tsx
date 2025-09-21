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
import MainPage from './sections/contentManagement /MainPage'
import HomePageBanners from './sections/contentManagement /HomePageBanners'
import OurPartners from './sections/contentManagement /OurPartners'
import TeamMembers from './sections/contentManagement /TeamMembers'
import TermsOfService from './sections/contentManagement /TermsOfService'
import Gallery from './sections/contentManagement /Gallery'
import AboutUs from './sections/contentManagement /AboutUs'
import PrivacyPolicy from './sections/contentManagement /PrivacyPolicy'
import OurImpact from './sections/contentManagement /OurImpact'
import Error404 from './pages/Error404'
import FilePage from './sections/resources/FilePage'
import CategoryPage from './sections/resources/CategoryPage'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to='overview' replace /> },
      { path: 'overview', element: <Overview /> },
      {
        path: 'resources',
        element: <Resources />,
        children: [
          { index: true, element: <Navigate to='files' /> },
          { path: 'files', element: <FilePage /> },
          { path: 'categories', element: <CategoryPage /> }
        ]
      },
      { path: 'feedbacks', element: <Feedbacks /> },
      { path: 'volunteers', element: <Volunteers /> },
      { path: 'settings', element: <Settings /> },
      { path: 'user-directory', element: <UserDirectory /> },
      { path: 'analytics-and-reports', element: <AnalyticsAndReports /> },
      {
        path: 'content-management',
        element: <ContentManagement />,
        children: [
          { index: true, element: <MainPage /> },
          {
            children: [
              {
                path: "homepage-banners",
                element: <HomePageBanners />
              },
              {
                path: "our-partners",
                element: <OurPartners />
              },
              {
                path: "team-members",
                element: <TeamMembers />
              },
              {
                path: "gallery",
                element: <Gallery />
              },
              {
                path: "terms-of-service",
                element: <TermsOfService />
              },
              {
                path: "privacy-policy",
                element: <PrivacyPolicy />
              },
              {
                path: "about-us",
                element: <AboutUs />
              },
              {
                path: "our-impact",
                element: <OurImpact />
              }
            ]
          }
        ]
      },
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
  },
  {
    path: '*',
    element: <Error404 />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
