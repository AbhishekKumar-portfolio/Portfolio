import React from 'react'
import "./about.css"
import me1 from "../../assets/me.png"
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

function About() {
  return (
    <section id="about" class="section">

      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <br />
      <br />
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={me1} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Client</h5>
              <small>15+ WorldWIde</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>20+ Completed </small>
            </article>
          </div>
          <p>
 Full-stack Developer and working as software engineer at Dilabs System Pvt Ltd. 
 Have Experience in Web development ,Wordpress, Application  Development and Social media Marketing.
I have also Experience in Video editing, poster making, and Logo design. 
Skilled in  C, C++, Python, Databases,Java,dart, HTML, Cascading Style Sheets (CSS), Reactjs, flutter, firebase, AR(Augmented reality), Mongo Db,Node js and VR(Virtual reality).
          </p>

          <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>

  )
}

export default About;