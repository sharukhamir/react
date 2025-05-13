import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import HeptaHome from './hepta_home.jsx'
import AboutUs from './hepta_aboutus.jsx'
import Hotels from './hotels.jsx'
import Gallery from './gallery.jsx'
import Blog from './blog.jsx'
import Contactus from './contactus.jsx'
import HeptaOption from './hepta_option.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HeptaHome />
      },
      {
        path: "home",
        element: <HeptaHome />
      },
      {
        path: "about",
        element: <AboutUs />
      },
      {
        path: "hotel",
        element: <Hotels />
      },
      {
        path: "gallery",
        element: <Gallery />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "contact",
        element: <Contactus />
      },
      {
        path: "heptaoption",
        element: <HeptaOption />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
