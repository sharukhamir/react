import React from "react";
import HeptaHome from './hepta_home.jsx'
import AboutUs  from './hepta_aboutus.jsx'
import Hotels from './hotels.jsx'
import Gallery from './gallery.jsx'
import Blog from './blog.jsx'
import HeptaOption from './hepta_option.jsx'
import Contactus from './contactus.jsx'
import { Outlet } from "react-router-dom";


function Layout() {
    return(
        <>
        <Outlet />
        </>
    )
}
export default Layout

/*
<HeptaHome />
        <AboutUs />
        <Hotels />
        <Gallery />
        <Blog />
        <HeptaOption />
        <Contactus />
*/