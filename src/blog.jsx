import React from "react";
import {Link, NavLink } from 'react-router-dom';
import HeptaOption from "./hepta_option.jsx";
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
import img1 from "./assets/img_1.jpg"
import img2 from "./assets/img_2.jpg";
import img4 from "./assets/img_4.jpg";
import img5 from "./assets/img_5.jpg";
import { BsStarFill } from 'react-icons/bs';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";


function Blog(){
    return(
        <div className="w-full h-auto flex flex-col items-center justify-center bg-gray-100">
            <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
                                        <img src={img5} className="w-[1400px] h-[750px] relative" alt="image" />
                                        <h1 className="text-white font-bold text-[30px] relative bottom-[530px] right-[620px]">Hepta</h1>
                                        <h1 className="text-white font-bold w-[550px] text-[70px] text-center relative bottom-[420px]">Blog</h1>
                                        <h2 className="text-white  relative w-[580px] text-[25px] bottom-[420px]">A free template by
                                           <a className="cursor-pointer hover:underline">Colorlib.</a> Download and share!</h2>
                                        <div className="flex flex-col space-y-1 cursor-pointer relative left-[650px] bottom-[680px]">
                                        <NavLink to="/heptaoption" className={({isActive}) =>`w-[35px] h-[3px] bg-white block duration-200 `}></NavLink>
                                              <NavLink to="/heptaoption" className={({isActive}) =>`w-[35px] h-[3px] bg-white block `}></NavLink>
                                              <NavLink to="/heptaoption" className={({isActive}) =>`w-[35px] h-[3px] bg-white block `}></NavLink>
                                    </div>
                                 </div>

                                 <div className="w-full h-auto flex flex-wrap items-center justify-center bg-gray-100">
                                    <div className="w-2/3 h-auto flex flex-wrap items-center justify-center pt-[100px] relative">
                                    <span className="w-[350px] h-[350px] bg-white"><img src={img1} className="h-[250px]" alt="" />
                                    <h1 className="text-blue-200">Febaruaru 28, 2018</h1>
                                    <h1 className="text-3xl font-bold">Free Template by Colorlib</h1></span>&nbsp;&nbsp;
                                    <span className="w-[350px] h-[350px] bg-white"><img src={img1} className="h-[250px]" alt="" />
                                    <h1 className="text-blue-200">Febaruary 28, 2018</h1>
                                    <h1 className="text-3xl font-bold">Free Template by Colorlib</h1>
                                    </span>
                                    <br /><br />
                                    <span className="w-[350px] h-[350px] bg-white relative top-[20px]"><img src={img1} className="h-[250px]" alt="" />
                                    <h1 className="text-blue-200">Febaruaru 28, 2018</h1>
                                    <h1 className="text-3xl font-bold">Free Template by Colorlib</h1></span>&nbsp;&nbsp;
                                    <span className="w-[350px] h-[350px] bg-white relative top-[20px]"><img src={img1} className="h-[250px]" alt="" />
                                    <h1 className="text-blue-200">Febaruary 28, 2018</h1>
                                    <h1 className="text-3xl font-bold">Free Template by Colorlib</h1>
                                    </span>
                                    <br /><br />
                                    <span className="w-[350px] h-[350px] bg-white relative top-[30px] left-[75px]"><img src={img1} className="h-[250px]" alt="" />
                                    <h1 className="text-blue-200">Febaruaru 28, 2018</h1>
                                    <h1 className="text-3xl font-bold">Free Template by Colorlib</h1></span>&nbsp;&nbsp;
                                    <span className="w-[350px] h-[350px] bg-white relative top-[30px] left-[75px]"><img src={img1} className="h-[250px]" alt="" />
                                    <h1 className="text-blue-200">Febaruary 28, 2018</h1>
                                    <h1 className="text-3xl font-bold">Free Template by Colorlib</h1>
                                    </span>
                                    <div className="flex flex-wrap items-center justify-center relative top-[300px] right-[650px]">
                                        <span><button className="bg-sky-300 w-[50px] h-[50px] border-sky-300 border-1 p-2 rounded-full relative left-[5px]">1</button></span>
                                        <span><button className="bg-sky-300 w-[50px] h-[50px] border-sky-300 border-1 p-2 rounded-full relative left-[15px]">1</button></span>
                                        <span><button className="bg-sky-300 w-[50px] h-[50px] border-sky-300 border-1 p-2 rounded-full relative left-[25px]">1</button></span>
                                    </div>
                                    </div>




                                    <div className="w-1/3 h-auto flex flex-wrap items-center justify-center">
                                    <div className="w-[300px] h-[120px] bg-white relative bottom-[20px] right-[80px]">
                    <span class="fa fa-search icon-search" className="w-100px flex flex-wrap justify-center">
                        <input type="text" className="h-[60px] w-[200px] border-2 border-blue-100 relative top-[30px]" placeholder="Search..."></input></span>
                                    </div>
                                    <div className="w-[300px] h-[470px] bg-white flex flex-wrap relative right-[80px]">
                                        <h1 className="font-bold p-[20px]">Popular Post</h1>
                                            <span className="w-full h-[80px] bg-white flex flex-wrap"><img src={img1} className="w-[100px] h-[60px]" alt="" />
                                            <h1 className="text-[8px] p-[6px]">FEBERAURY 27, 2018 <br /><a href="" className="font-bold text-[14px] ">Free Template by <br /> Colorlib</a></h1></span><br />
                                            <span className="w-full h-[80px] bg-white flex flex-wrap"><img src={img1} className="w-[100px] h-[60px]" alt="" />
                                            <h1 className="text-[8px] p-[6px]">FEBERAURY 27, 2018 <br /><a href="" className="font-bold text-[14px] ">Free Template by <br /> Colorlib</a></h1></span><br />
                                            <span className="w-full h-[80px] bg-white flex flex-wrap"><img src={img1} className="w-[100px] h-[60px]" alt="" />
                                            <h1 className="text-[8px] p-[6px]">FEBERAURY 27, 2018 <br /><a href="" className="font-bold text-[14px] ">Free Template by <br /> Colorlib</a></h1></span><br />
                                            <span className="w-full h-[80px] bg-white flex flex-wrap"><img src={img1} className="w-[100px] h-[60px]" alt="" />
                                            <h1 className="text-[8px] p-[6px]">FEBERAURY 27, 2018 <br /><a href="" className="font-bold text-[14px] ">Free Template by <br /> Colorlib</a></h1></span><br />
                                            <span className="w-full h-[80px] bg-white flex flex-wrap"><img src={img1} className="w-[100px] h-[60px]" alt="" />
                                            <h1 className="text-[8px] p-[6px]">FEBERAURY 27, 2018 <br /><a href="" className="font-bold text-[14px] ">Free Template by <br /> Colorlib</a></h1></span>
                                    </div>
                                    <div className="w-[300px] h-[320px] bg-white flex flex-wrap relative top-[40px] right-[80px]">
                                        <h1 className="text-bold relative p-[30px]">Categories</h1>
                                        <div className="flex flex-col items-start space-y-4 p-4 relative bottom-[20px]">
      <ul className="space-y-2 w-[250px]">
        <li className=" bg-white p-2 rounded border-b-2 border-gray-200 cursor-pointer"><a href="">Events <span className="relative left-[150px]">(12)</span></a></li>
        <li className="bg-white p-2 rounded border-b-2 border-gray-200 cursor-pointer"><a href="">Events <span className="relative left-[150px]">(12)</span></a></li>
        <li className="bg-white p-2 rounded border-b-2 border-gray-200 cursor-pointer"><a href="">Events <span className="relative left-[150px]">(12)</span></a></li>
        <li className="bg-white p-2 rounded border-b-2 border-gray-200 cursor-pointer"><a href="">Events <span className="relative left-[150px]">(12)</span></a></li>
      </ul>
      </div>
                                    </div>
                                    </div>
                                 </div>


                                 <div className="w-full h-auto bg-black flex flex-wrap items-center justify-center relative top-[300px]">
                                                               <span className="m-20 pt-[50px]">
                                                                 <h1 className="text-white font-bold relative bottom-[40px]">Quick Link</h1>
                                                                 <p className="text-white mb-[15px]">About Us</p>
                                                                 <p className="text-white mb-[15px]" >Terms & Conditions</p>
                                                                 <p className="text-white mb-[15px]" >Privacy Policy</p>
                                                                 <p className="text-white mb-[15px]" >Help</p>
                                                                 <p className="text-white mb-[15px]" >Rooms</p>
                                                               </span>
                                                               <span className="m-20 pt-[50px]">
                                                                 <h1 className="text-white font-bold relative bottom-[40px]">Support</h1>
                                                                 <p className="text-white mb-[15px]">Our Location</p>
                                                                 <p className="text-white mb-[15px]" >The Hosts</p>
                                                                 <p className="text-white mb-[15px]" >About</p>
                                                                 <p className="text-white mb-[15px]" >Contact</p>
                                                                 <p className="text-white mb-[15px]" >Resturant</p>
                                                               </span>
                                                               <span className="m-20 pt-[50px]">
                                                                 <h1 className="text-white font-bold relative bottom-[10px]">Contact Info</h1>
                                                                 <p className="text-white mt-[30px]">Adress</p>
                                                                 <p className="text-white mt-[20px]" >98 West 21th Street, Suite 721 <br /> New York NY 10016</p>
                                                                 <p className="text-white mt-[20px]" >Phone</p>
                                                                 <p className="text-white mb-[15px]" >(+1) 435 3533</p>
                                                                 <p className="text-white mb-[15px]">Email</p>
                                                                 <p className="text-white mb-[15px]" >info@yourdomain.com</p>
                                                               </span>
                                                               <span className="m-20 pt-[50px]">
                                                                 <h1 className="text-white font-bold relative bottom-[30px]">Subscribe</h1>
                                                                 <p className="text-white mb-[200px]">Sign up for our newsletter<br /> <input type="text" /><button></button></p>
                                                               </span>
                                                               <div className="w-full h-[500px] bg-black flex flex-col items-center justify-center bg-fixed relative text-amber-50 bottom-[100px]">
                                                             <br></br> <hr className="w-[800px] relative bottom-[60px]" /><br /><br />
                                                              <span className="w-full h-auto text-center relative bottom-[30px]">Copyright © 2025 All rights reserved | This template is made with</span>
                                                              <div className="w-full h-auto flex flex-wrap items-center justify-center">
                                                               <span className="p-[20px]"><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                                               <FaFacebook />
                                                             </a></span>
                                                               <span className="p-[20px]"><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                                               <FaTwitter />
                                                             </a></span>
                                                               <span className="p-[20px]"><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                                               <FaInstagram />
                                                             </a></span>
                                                               <span className="p-[20px]"><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                                               <FaLinkedin /></a>
                                                             </span>
                                                               <span className="p-[20px]"><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                                               <FaYoutube />
                                                             </a></span>
                                                              </div>
                                                           </div>
                                                             </div>
        </div>
    )
}
export default Blog;


/*
<div className="relative top-[90px]">
                                        <ul className="">
                                            <li className="p-[10px]"><a href="" className="relative right-[90px]">Events <span className="relative left-[40px]">(12)</span></a></li>
                                            <li className="p-[10px]"><a href="">Events</a><span>(4)</span></li>
                                            <li className="p-[10px]"><a href="">Events</a><span>(23)</span></li>
                                            <li className="p-[10px]"><a href="">Events</a><span>(8)</span></li>
                                        </ul>
                                        </div>
*/