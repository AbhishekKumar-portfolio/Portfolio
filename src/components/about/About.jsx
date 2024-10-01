import React from 'react'
import "./about.css"
import me1 from "../../assets/me.png"
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { SiC } from "react-icons/si";

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
            <article className='about_card'>
              <SiC className='about_icon' />
              <h5>Company</h5>
              <small>2+ Completed </small>
            </article>
          </div>
          <p className='justified-paragraph'>
Highly organized and self-motivated individual .Looking for an entry-level position in a reputed organization.
Passionate about learning technical aspects and possess the ability to handle work pressure and challenges in 
an efficient manner.Tech-savvy and a fast learner with innate communication skills and curiosity Experienced 
Full-stack Developer proficient in web, application, Android, and iOS development, as well as software engineering. 
Skilled in C,Dart, HTML, CSS, React.js, Flutter, Firebase,MongoDB, Node.js, REST API, and JavaScript. With a passion
for creating elegant solutions and optimizing user experiences, I thrive in dynamic environments where I can contribute
my technical expertise and collaborate with diverse teams. Continuously learning and adapting to new technologies, I am 
dedicated to delivering high-quality, scalable solutions that meet the evolving needs of businesses and users alike. 
Let's connect and explore opportunities to drive innovation together for my role.</p>

          <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>

  )
}

export default About;