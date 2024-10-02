import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

function HeaderSocial() {
  return (
    <div className='header_social'>
      <a href="https://www.linkedin.com/in/creativeabhi13/" target="blank"> <BsLinkedin/></a>
      <a href="https://github.com/creativeabhi13" target="blank"><FaGithub/></a>
      <a href="https://twitter.com/creativeabhi13" target="blank"><FiDribbble/></a>
      </div>
  )
}

export default HeaderSocial;