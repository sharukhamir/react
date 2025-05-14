import React from "react";
import {Link, NavLink } from 'react-router-dom';
import AboutUs from "./hepta_aboutus.jsx";
import Hotels from "./hotels.jsx";
import Gallery from "./gallery.jsx";
import Blog from "./blog.jsx";
import HeptaOption from "./hepta_option.jsx";
import Contactus from "./contactus.jsx";
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


//const navigate = useNavigate();




const images = [slider_1, slider_2, slider_3, slider_4, slider_5, slider_6];
function HeptaHome() {


  return (
    // first section of main page starts from here
    <div className="w-full h-auto flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
        <div className="w-full h-[600px] flex flex-col items-center justify-center bg-gray-100">
        <img src={hero} className="w-[1400px] h-[750px] relative top-[130px]" alt="image" />
        <h1 className="text-white font-bold text-[30px] relative bottom-[480px] right-[620px]">Hepta</h1>
        <h1 className="text-white font-bold w-[550px] text-[70px] relative bottom-[420px]">Travel & Tours</h1>
        <h2 className="text-white  relative w-[580px] text-[25px] bottom-[420px]">A free template by
           <a className="cursor-pointer hover:underline">Colorlib.</a> Download and share!</h2>
        <button className="w-[200px] p-4 leading-normal relative bottom-[380px]
         border-2 rounded border-white text-white hover:bg-white hover:text-black">VISIT COLORLIB</button>
        <div className="flex flex-col space-y-1 cursor-pointer relative left-[650px] bottom-[730px]">
      <NavLink to="/heptaoption" className={({isActive}) =>`w-[35px] h-[3px] bg-white block duration-200 `}></NavLink>
      <NavLink to="/heptaoption" className={({isActive}) =>`w-[35px] h-[3px] bg-white block `}></NavLink>
      <NavLink to="/heptaoption" className={({isActive}) =>`w-[35px] h-[3px] bg-white block `}></NavLink>
      
      {/* <span className="block w-[35px] h-[3px] bg-white"></span> */}
    </div>
    {/* first section of main page ends here */}
      </div>
      {/* second section of main page starts here*/}
      <div className="h-auto w-full flex flex-col items-center justify-center">
        <img src={second} className="w-[550px] h-[600px] relative top-[210px] right-[270px]" alt="image" />
        <div className="h-auto w-full flex flex-col items-center justify-center relative bottom-[200px] left-[200px]">
        <h1 className="text-2xl font-bold">Welcome To Our Website</h1>
        <p className="relative left-[100px] top-[20px]">Far far away, behind the word mountains, far from the countries
          <br /> Vokalia and Consonantia, there live the blind texts. Separated they live
          <br /> in Bookmarksgrove right at the coast of the Semantics, a large<br /> language ocean.</p><br />
        <p className="relative left-[100px] top-[10px]">A small river named Duden flows by
           their place and supplies it with the<br /> necessary regelialia.</p>
        <button className="relative top-[100px]">Watch this Video</button>
        </div>
      </div>
      {/* second section of main page ends here*/}
      {/* third section of main page starts form here */}
      <div className="h-auto w-full flex flex-wrap flex-col items-center justify-center pt-[170px]">
        <h1 className="text-3xl font-bold relative top-[60px]">Experience Once In Your Life Time</h1>
        <p className="w-[750px] text-[18px] text-center relative top-[80px]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the 
        Semantics, a large language ocean.</p>
        <div className="h-auto w-full flex flex-wrap items-center justify-center relative top-[150px] left-[80px]">
          <span className="w-[320px] p-[10px]"><img src={breakfast} className="w-[150px] h-[80px]" alt="" /><h1>Good Foods</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></span>
          <span className="w-[320px] p-[10px]"><img src={travel} className="w-[150px] h-[80px]" alt="" /><h1>Good Foods</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></span>
          <span className="w-[320px] p-[10px]"><img src={airplane} className="w-[150px] h-[80px]" alt="" /><h1>Good Foods</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></span>
        </div>
        <div className="h-auto w-full flex flex-wrap items-center justify-center relative top-[150px] left-[80px]">
          <span className="w-[320px] p-[10px]"><img src={breakfast} className="w-[150px] h-[80px]" alt="" /><h1>Good Foods</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></span>
          <span className="w-[320px] p-[10px]"><img src={travel} className="w-[150px] h-[80px]" alt="" /><h1>Good Foods</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></span>
          <span className="w-[320px] p-[10px]"><img src={airplane} className="w-[150px] h-[80px]" alt="" /><h1>Good Foods</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></span>
        </div>
      </div>
      {/* third section of main page ends here */}
      {/* fourth section of main page starts from here */}
      <div className="h-auto w-full flex flex-wrap flex-col items-center justify-center relative top-[450px]">
        <h1 className="text-[40px] font-bold">International Tour</h1>
        <h1 className="text-[40px] font-bold">Management</h1>
        <p className="w-[650px] text-center">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      </div>
      <div className="h-auto w-full flex flex-wrap items-center justify-center pt-[420px]">
      <div class="custom-shape-divider-bottom-1746526066 relative top-[500px]">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
    </div>
    <div className="h-auto w-full flex flex-wrap items-center justify-center relative bottom-[350px]">
      <Carousel images={images} interval={2000} /></div>
    </div>
    <div style={{backgroundColor: "#4EC7D4",}} className="w-full h-500px] relative bottom-[400px]">
        <div className="h-auto w-full flex flex-wrap flex-col items-center justify-center pt-[200px]">
        <h1 className="text-6xl font-bold">Recent Blog Post</h1>
        <p className="w-[650px] pt-[30px] text-white text-center">Far far away, behind the word mountains, far from the
          countries Vokalia and Consonantia,
           there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.</p><br />
        </div>
        <div style={{backgroundColor: "#4EC7D4",}} className="w-full h-500px] relative pt-[170px]">
          <div className="h-auto w-full flex flex-wrap items-center justify-center">
              <span className="w-[350px] h-[500px] bg-white m-4 relative bottom-[140px]">
                <img src={img1} alt="" />
                <h1>February 26, 2018</h1>
                <h1>45 Best Places To Unwind</h1>
                <p className="w-full relative top-[100px]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </span>
              <span className="w-[350px] h-[500px] bg-white m-4 relative bottom-[140px]">
              <img src={img2} alt="" />
              <h1>February 26, 2018</h1>
                <h1>45 Best Places To Unwind</h1>
                <p className="w-full relative top-[100px]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </span>
              <span className="w-[350px] h-[500px] bg-white m-4 relative bottom-[140px]">
              <img src={img4} alt="" />
              <h1>February 26, 2018</h1>
                <h1 className="w-full reltive top-[80px]">45 Best Places To Unwind</h1>
                <p className="w-full relative top-[100px]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </span>
              </div>
              </div>
              <div className="w-full h-auto bg-white flex flex-wrap items-center justify-center">
      <h1 className="font-bold text-6xl relative top-[150px]">Happy Customers</h1>
      <div className="h-auto w-full flex flex-wrap items-center justify-center">
              <span className="w-[350px] h-[350px] bg-white m-4 relative top-[250px]">
                <img src={person1} className="w-50px h-[80px] rounded-full" alt="" />
                <p className="text-[18px] relative top-[10px]">“Far far away, behind the word mountains,
                   far from the countries Vokalia and 
                   Consonantia, there live the blind texts.
                    Separated they live in Bookmarksgrove right
                     at the coast of the Semantics, a large
                      language ocean.”</p>
                      <p className="text-[18px] relative top-[20px]">— Clare Gupta</p>
              </span>
              <span className="w-[350px] h-[350px] bg-white m-4 relative top-[250px]">
                <img src={person2} className="w-50px h-[80px] rounded-full" alt="" />
                <p className="text-[18px] relative top-[10px]">“Far far away, behind the word mountains,
                   far from the countries Vokalia and 
                   Consonantia, there live the blind texts.
                    Separated they live in Bookmarksgrove right
                     at the coast of the Semantics, a large
                      language ocean.”</p>
                      <p className="text-[18px] relative top-[20px]">— Rogie Slater</p>
              </span>
              <span className="w-[350px] h-[350px] bg-white m-4 relative top-[250px]">
                <img src={person3} className="w-50px h-[80px] rounded-full" alt="" />
                <p className="text-[18px] relative top-[10px]">“Far far away, behind the word mountains,
                   far from the countries Vokalia and 
                   Consonantia, there live the blind texts.
                    Separated they live in Bookmarksgrove right
                     at the coast of the Semantics, a large
                      language ocean.”</p>
                      <p className="text-[18px] relative top-[20px]">— John Doe</p>
              </span>
              </div>
    </div>
              </div>
          <div className="w-full h-auto flex flex-wrap flex-col items-center justify-center relative top-[100px]">
        <h1 className="text-4xl font-bold">Top Destination</h1>
        <p className="w-[700px] text-[18px] text-center relative top-[25px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo
           odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores
           quis, blanditiis laboriosam alias. Sed.</p>
           <div className="w-full h-auto flex flex-wrap items-center justify-center pt-[100px]">
           <span className="w-[250px] h-[180px] bg-white m-4 relative">
            <img src={slider_6} className="h-full" alt="" />
            <h1 className="font-bold text-[20px] mt-2">Food & Wines</h1>
            <span className="w-full flex flex-wrap"><BsStarFill color="#4EC7D4" size={15} /><BsStarFill color="#4EC7D4" size={15} />
            <BsStarFill color="#4EC7D4" size={15} /><FaStarHalfAlt color="#4EC7D4" size={15} /><FaStarHalfAlt color="#4EC7D4" size={15} /></span>
           <p className="text-[15px] text-blue-200 relative top-[-15px] left-[150px]">3,239 reviews</p></span>
           <span className="w-[250px] h-[180px] bg-white m-4 relative">
            <img src={img2} className="h-full" alt="" />
            <h1 className="font-bold text-[20px] mt-2">Resort & Spa</h1>
            <span className="w-full flex flex-wrap"><BsStarFill color="#4EC7D4" size={15} /><BsStarFill color="#4EC7D4" size={15} />
            <BsStarFill color="#4EC7D4" size={15} /><FaStarHalfAlt color="#4EC7D4" size={15} /><FaStarHalfAlt color="#4EC7D4" size={15} /></span>
           <p className="text-[15px] text-blue-200 relative top-[-15px] left-[150px]">3,239 reviews</p>
           </span>
           <span className="w-[250px] h-[180px] bg-white m-4 relative">
            <img src={img4} className="h-full" alt="" />
            <h1 className="font-bold text-[20px] mt-2">Hotel & Rooms</h1>
            <span className="w-full flex flex-wrap"><BsStarFill color="#4EC7D4" size={15} /><BsStarFill color="#4EC7D4" size={15} />
            <BsStarFill color="#4EC7D4" size={15} /><FaStarHalfAlt color="#4EC7D4" size={15} /><FaStarHalfAlt color="#4EC7D4" size={15} /></span>
           <p className="text-[15px] text-blue-200 relative top-[-15px] left-[150px]">3,239 reviews</p>
           </span>
           <span className="w-[250px] h-[180px] bg-white m-4 relative">
            <img src={img5} className="h-full" alt="" />
            <h1 className="font-bold text-[20px] mt-2">Mountain Climbing</h1>
            <span className="w-full flex flex-wrap"><BsStarFill color="#4EC7D4" size={15} /><BsStarFill color="#4EC7D4" size={15} />
            <BsStarFill color="#4EC7D4" size={15} /><FaStarHalfAlt color="#4EC7D4" size={15} /><FaStarHalfAlt color="#4EC7D4" size={15} /></span>
           <p className="text-[15px] text-blue-200 relative top-[-15px] left-[150px]">3,239 reviews</p>
           </span>
           </div>
           
           </div>
           <div className="w-full h-[1000px] bg-black flex flex-wrap items-center justify-center relative top-[300px]">
        <span className="m-20 relative top-[30px]">
          <h1 className="text-white font-bold relative bottom-[40px]">Quick Link</h1>
          <p className="text-white mb-[15px]">About Us</p>
          <p className="text-white mb-[15px]" >Terms & Conditions</p>
          <p className="text-white mb-[15px]" >Privacy Policy</p>
          <p className="text-white mb-[15px]" >Help</p>
          <p className="text-white mb-[15px]" >Rooms</p>
        </span>
        <span className="m-20 relative top-[30px]">
          <h1 className="text-white font-bold relative bottom-[40px]">Support</h1>
          <p className="text-white mb-[15px]">Our Location</p>
          <p className="text-white mb-[15px]" >The Hosts</p>
          <p className="text-white mb-[15px]" >About</p>
          <p className="text-white mb-[15px]" >Contact</p>
          <p className="text-white mb-[15px]" >Resturant</p>
        </span>
        <span className="m-20 relative top-[30px]">
          <h1 className="text-white font-bold relative bottom-[10px]">Contact Info</h1>
          <p className="text-white mt-[30px]">Adress</p>
          <p className="text-white mt-[20px]" >98 West 21th Street, Suite 721 <br /> New York NY 10016</p>
          <p className="text-white mt-[20px]" >Phone</p>
          <p className="text-white mb-[15px]" >(+1) 435 3533</p>
          <p className="text-white mb-[15px]">Email</p>
          <p className="text-white mb-[15px]" >info@yourdomain.com</p>
        </span>
        <span className="m-20 relative top-[30px]">
          <h1 className="text-white font-bold relative bottom-[30px]">Subscribe</h1>
          <p className="text-white mb-[200px]">Sign up for our newsletter<br /> <input type="text" /><button></button></p>
        </span>
        <div className="w-full h-[500px] bg-black flex flex-col items-center justify-center bg-fixed relative text-amber-50 bottom-[100px]">
      <br></br> <hr className="w-[800px] text-gray-300 relative bottom-[130px]" /><br /><br />
       <span className="w-full h-auto text-center relative bottom-[100px]">Copyright © 2025 All rights reserved | This template is made with</span>
       <div className="w-full h-auto flex flex-wrap items-center justify-center relative bottom-[100px]">
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
     );
}
export default HeptaHome;
