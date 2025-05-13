import React from "react";
import {Link, NavLink } from 'react-router-dom';
import hero from "./assets/hero_1.jpg";
import second from "./assets/alone_2.jpg";
import breakfast from "./assets/breakfast_1.svg";
import travel from "./assets/travel_1.svg";
import airplane from "./assets/airplane_1.svg";
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
import Carousel2 from "./hotel_slider.jsx";





function Gallery() {
    return(
        <div className="w-full h-auto flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
            <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
                <img src={slider_2} className="w-[1400px] h-[750px] relative" alt="image" />
                <h1 className="text-white font-bold text-[30px] relative bottom-[530px] right-[620px]">Hepta</h1>                  <h1 className="text-white font-bold w-[550px] text-[70px] text-center relative bottom-[420px]">Gallery</h1>
                <h2 className="text-white  relative w-[580px] text-[25px] bottom-[420px]">A free template by
                  <a className="cursor-pointer hover:underline">Colorlib.</a> Download and share!</h2>
            <div className="flex flex-col space-y-1 cursor-pointer relative left-[650px] bottom-[680px]">
              <NavLink to="/heptaoption" className={({isActive}) =>`w-[35px] h-[3px] bg-white block duration-200 `}></NavLink>
                    <NavLink to="/heptaoption" className={({isActive}) =>`w-[35px] h-[3px] bg-white block `}></NavLink>
                    <NavLink to="/heptaoption" className={({isActive}) =>`w-[35px] h-[3px] bg-white block `}></NavLink>
              </div>
            </div>
            <div className="h-[1200px] w-full flex flex-wrap items-center justify-center">
            <div className="h-auto w-full flex flex-wrap items-center justify-center relative">
                                                          <span className="w-[250px] h-[150px] bg-white m-4">
                                                            <img src={img1} alt="" />
                                                          </span>
                                                          <span className="w-[250px] h-[150px] bg-white m-4">
                                                          <img src={img2} alt="" />
                                                          </span>
                                                          <span className="w-[250px] h-[150px] bg-white m-4">
                                                          <img src={img4} alt="" />
                                                          </span>
                                                          <span className="w-[250px] h-[150px] bg-white m-4">
                                                          <img src={img4} alt="" />
                                                          </span>
                                                          <br /><br />
                                                          <span className="w-[250px] h-[150px] bg-white m-4">
                                                            <img src={img1} alt="" />
                                                          </span>
                                                          <span className="w-[250px] h-[150px] bg-white m-4">
                                                          <img src={img2} alt="" />
                                                          </span>
                                                          <span className="w-[250px] h-[150px] bg-white m-4">
                                                          <img src={img4} alt="" />
                                                          </span>
                                                          <span className="w-[250px] h-[150px] bg-white m-4">
                                                          <img src={img4} alt="" />
                                                          </span>
                                                          </div>
                                                    
                                                          <div className="h-auto w-full flex flex-wrap items-center justify-center relative bottom-[120px]">
                                                          <span className="w-[550px] h-[350px] bg-white m-4 relative ">
                                                            <img src={img1} alt="" />
                                                          </span>
                                                          <span className="w-[550px] h-[350px] bg-white m-4 relative">
                                                          <img src={img2} alt="" />
                                                          </span>
                                                          <br /><br />
                                                          <span className="w-[250px] h-[150px] bg-white m-4">
                                                            <img src={img1} alt="" />
                                                          </span>
                                                          <span className="w-[250px] h-[150px] bg-white m-4">
                                                          <img src={img2} alt="" />
                                                          </span>
                                                          <span className="w-[250px] h-[150px] bg-white m-4">
                                                          <img src={img4} alt="" />
                                                          </span>
                                                          <span className="w-[250px] h-[150px] bg-white m-4">
                                                          <img src={img4} alt="" />
                                                          </span>
                                                          </div>

                                                          </div>
                                                          <div className="w-full h-auto bg-black flex flex-wrap items-center justify-center relative">
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
export default Gallery;

