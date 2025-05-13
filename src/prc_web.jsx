import React from "react";
import hero from "./assets/hero_1.jpg";
import second from "./assets/alone_2.jpg";
import breakfast from "./assets/breakfast_1.svg";
import travel from "./assets/travel_1.svg";
import airplane from "./assets/airplane_1.svg";
import "./wavybg.css";
import blueBG from "./assets/blue_color_page.png"
import Carousel from "./slider.jsx";
import slider_1 from "./assets/slider-1.jpg";
import slider_2 from "./assets/slider-2.jpg";
import slider_3 from "./assets/slider-3.jpg";
import slider_4 from "./assets/slider-4.jpg";
import slider_5 from "./assets/slider-5.jpg";
import slider_6 from "./assets/slider-6.jpg";
import person1 from "./assets/person_1.jpg";
import person2 from "./assets/person_2.jpg";
import person3 from "./assets/person_3.jpg";
import img2 from "./assets/img_2.jpg";
import img4 from "./assets/img_4.jpg";
import img5 from "./assets/img_5.jpg";
import { BsStarFill } from 'react-icons/bs';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";





const images = [slider_1, slider_2, slider_3, slider_4, slider_5, slider_6];






function HeptaHome1() {
  return (
    // first section of main page starts from here
    <div className="w-full h-auto flex flex-col items-center justify-center bg-gray-100 overflow-x-hidden">
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
        <img src={hero} className="w-[1400px] h-[750px] relative top-[130px]" alt="image" />
        <h1 className="text-white font-bold text-[30px] relative bottom-[480px] right-[620px]">Hepta</h1>
        <h1 className="text-white font-bold w-[550px] text-[70px] relative bottom-[420px]">Travel & Tours</h1>
        <h2 className="text-white  relative w-[580px] text-[25px] bottom-[420px]">A free template by
           <a className="cursor-pointer hover:underline">Colorlib.</a> Download and share!</h2>
        <button className="w-[200px] p-4 leading-normal relative bottom-[380px]
         border-2 rounded border-white text-white hover:bg-white hover:text-black">VISIT COLORLIB</button>
        <div className="flex flex-col space-y-1 cursor-pointer relative left-[650px] bottom-[730px]">
      <span className="block w-[35px] h-[3px] bg-white"></span>
      <span className="block w-[35px] h-[3px] bg-white"></span>
      <span className="block w-[35px] h-[3px] bg-white"></span>
    </div>
    {/* first section of main page ends here */}
    </div>
    </div>
)}


export default HeptaHome1;