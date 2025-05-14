import React from "react";
import {Link, NavLink } from 'react-router-dom';
import second from "./assets/alone_2.jpg";
import person1 from "./assets/person_1.jpg";
import person2 from "./assets/person_2.jpg";
import person3 from "./assets/person_3.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";


function Contactus() {


    return(
        <div className="w-full h-auto flex flex-wrap items-center justify-center bg-gray-100 overflow-x-hidden">
                <div className="w-full h-[600px] flex flex-col items-center justify-center bg-gray-100">
                        <img src={second} className="w-[1400px] h-[750px] relative" alt="image" />
                        <h1 className="text-white font-bold text-[30px] relative bottom-[530px] right-[620px]">Hepta</h1>
                        <h1 className="text-white font-bold w-[550px] text-[70px] text-center relative bottom-[420px]">Contact Us</h1>
                        <h2 className="text-white  relative w-[580px] text-[25px] bottom-[420px]">A free template by
                           <a className="cursor-pointer hover:underline">Colorlib.</a> Download and share!</h2>
                        <div className="flex flex-col space-y-1 cursor-pointer relative left-[650px] bottom-[680px]">
                      <NavLink to="/heptaoption" className={({isActive}) =>`w-[35px] h-[3px] bg-white block duration-200 `}></NavLink>
                            <NavLink to="/heptaoption" className={({isActive}) =>`w-[35px] h-[3px] bg-white block `}></NavLink>
                            <NavLink to="/heptaoption" className={({isActive}) =>`w-[35px] h-[3px] bg-white block `}></NavLink>
                    </div>
                 </div>
                 <div className="w-1/2 h-auto flex flex-wrao items-center justify-center bg-gray-100 p-20 overflow-hidden relative top-[50px]">
                 <div className="w-[800px] h-[800px] flex flex-wrap  items-center justify-center pt-30 pl-25 relative left-[0px]">
                  
                  <form className="w-[600px] h-[600px] p-6 bg-white rounded shadow space-y-4 relative bottom-[200px]">
      {/* Row 1: Labels for Name and Phone */}
      <div className="flex justify-between pt-10">
        <label htmlFor="name" className="w-1/2 text-[18px] font-medium text-gray-700">
          Name
        </label>
        <label htmlFor="phone" className="w-1/2 text-[18px] font-medium text-gray-700">
          Phone
        </label>
      </div>

      {/* Row 2: Inputs for Name and Phone */}
      <div className="flex justify-between gap-4">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          className="w-1/2 h-[50px] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter phone"
          className="w-1/2 h-[50px] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Row 3: Label for Email */}
      <div>
        <label htmlFor="email" className="block text-[18px] font-medium text-gray-700">
          Email
        </label>
      </div>

      {/* Row 4: Input for Email */}
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          className="w-full h-[50px] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Row 5: Label for Message */}
      <div>
        <label htmlFor="message" className="block text-[18px] font-medium text-gray-700">
          Message
        </label>
      </div>

      {/* Row 6: Textarea for Message */}
      <div>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Enter your message"
          className="w-full h-[200px] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-[150px] border-2 border-blue-300 py-2 px-4 rounded hover:bg-blue-300"
        >
          Submit
        </button>
      </div>
    </form>

                 </div>
                 
                 </div>
                 
                 <div className="w-1/2 h-[800px] flex flex-wrap items-center justify-center overflow-hidden">
                 <div className="w-200px h-[600px] flex flex-col items-center justify-center relative bottom-[180px]">
                  <h1 className="text-sky-300 font-bold relative right-[150px]">Address</h1>
                  <span className="font-bold text-3xl p-8">98 West 21th Street, Suite <br /> 721 New York NY 10016</span>
                  <h1 className="text-sky-300 font-bold relative right-[150px]">Phone:</h1>
                  <span className="font-bold text-3xl relative right-[80px] p-8">(+1) 435 3533</span>
                  <h1 className="text-sky-300 font-bold relative right-[150px]">Email:</h1>
                  <span className="font-bold text-3xl relative right-[10px] p-8">info@yourdomain.com</span>
                 </div>
                 </div>
                 <hr className="w-full text-gray-300 relative bottom-[100px]" />


                 <div className="w-full h-auto bg-white flex flex-wrap items-center justify-center relative top-[250px]">
                  <h1 className="font-bold text-6xl relative bottom-[350px] left-[400px]">Happy Customers</h1>
                  <span className="w-[350px] h-[350px] m-4 relative right-[480px]">
                                  <img src={person1} className="w-50px h-[80px] rounded-full" alt="" />
                                  <p className="text-[18px] relative top-[10px]">“Far far away, behind the word mountains,
                                     far from the countries Vokalia and 
                                     Consonantia, there live the blind texts.
                                      Separated they live in Bookmarksgrove right
                                       at the coast of the Semantics, a large
                                        language ocean.”</p>
                                        <p className="text-[18px] relative top-[20px]">— Clare Gupta</p>
                                </span>
                                <span className="w-[350px] h-[350px] m-4 relative right-[420px]">
                                                <img src={person2} className="w-50px h-[80px] rounded-full" alt="" />
                                                <p className="text-[18px] relative top-[10px]">“Far far away, behind the word mountains,
                                                   far from the countries Vokalia and 
                                                   Consonantia, there live the blind texts.
                                                    Separated they live in Bookmarksgrove right
                                                     at the coast of the Semantics, a large
                                                      language ocean.”</p>
                                                      <p className="text-[18px] relative top-[20px]">— Rogie Slater</p>
                                              </span>
                                              <span className="w-[350px] h-[350px] m-4 relative left-[450px] bottom-[400px]">
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
                 <div className="w-full h-auto bg-black flex flex-wrap items-center justify-center relative bottom-[0px]">
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
export default Contactus


