import React from 'react'
import "./footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoGithub} from "react-icons/io"
import {RiYoutubeLine} from "react-icons/ri"
import {FaLinkedinIn} from "react-icons/fa"

export const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer>
      <a href="#" className='footer_logo'>Abhishek Kumar</a>
      <ul className='permalinks'>
         <li><a href="#">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#expereince">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
         <li><a href="#achievement">Achievement</a></li>
         <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#achievement">Achievement</a></li>
         <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer_social'>
        <a href="https://www.facebook.com/creativeabhi13" target="blank"> <FaFacebookF/></a>
        <a href="https://www.Instagram.com/creativeabhi13" target="blank"><FiInstagram/></a>
        <a href="https://www.youtube.com/creativeabhi13" target="blank" ><RiYoutubeLine/></a>
        <a href="https://github.com/creativeabhi13" target="blank" ><IoLogoGithub/></a>
        <a href="https://www.linkedin.com/in/creativeabhi13/" target="blank" ><FaLinkedinIn/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; CREATIVEABHI13 (Abhishek Kumar). All rights reserved &copy;{currentYear}</small>
      </div>
  </footer>
  )
}

export default Footer;
