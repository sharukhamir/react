import React from "react";
import { Link, NavLink } from "react-router-dom";

function HeptaOption() {
    return(
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <NavLink to="/home" className={({isActive}) =>
      `relative left-[650px] bottom-[100px] text-5xl block duration-200 ${isActive ? "text-red-700" : "text-blue-300"}
       hover:text-red-700 lg:p-0`}>X</NavLink>
      
      <NavLink to="/home" className={({isActive}) =>
      ` bg-white text-4xl font-bold text-sky-300 block duration-200 `}>Home</NavLink>

      <NavLink to="/about" className={({isActive}) =>
      `p-4 bg-white text-4xl font-bold text-sky-300 block py-4 pr-4 pl-3 duration-200`}>AboutUs</NavLink>

      <NavLink to="/hotel" className={({isActive}) =>
      `p-4 bg-white text-4xl font-bold text-sky-300 block py-2 pr-4 pl-3 duration-200`}>Hotels</NavLink>
      
      <NavLink to="/gallery" className={({isActive}) =>
      `p-4 bg-white text-4xl font-bold text-sky-300 block py-2 pr-4 pl-3 `}>Gallery</NavLink>

      <NavLink to="/blog" className={({isActive}) =>
      `p-4 bg-white text-4xl font-bold text-sky-300 block py-2 pr-4 pl-3 `}>News</NavLink>

      <NavLink to="/contact" className={({isActive}) =>
      `p-4 bg-white text-4xl font-bold text-sky-300 block py-2 pr-4 pl-3 `}>Contact</NavLink>
            
        </div>
    )
}
export default HeptaOption

/*
<span className="relative left-[650px]"><a href="" className="text-5xl">X</a></span>
<span className="p-4"><a href="hepta_home.jsx" className="text-4xl font-bold hover:text-sky-300">Home</a></span>
            <span className="p-4"><a href="" className="text-4xl font-bold hover:text-sky-300">Hotels</a></span>
            <span className="p-4"><a href="" className="text-4xl font-bold hover:text-sky-300">About Us</a></span>
            <span className="p-4"><a href="" className="text-4xl font-bold hover:text-sky-300">Gallery</a></span>
            <span className="p-4"><a href="" className="text-4xl font-bold hover:text-sky-300">News</a></span>
            <span className="p-4"><a href="" className="text-4xl font-bold hover:text-sky-300">Contact</a></span>
*/