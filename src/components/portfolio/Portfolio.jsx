import React from 'react'
import "./portfolio.css"
import port from "../../assets/port.jpg"
import port1 from "../../assets/port1.jpg"
import port2 from "../../assets/port2.jpg"
import port3 from "../../assets/port3.jpg"
import port4 from "../../assets/port4.jpg"
import port5 from "../../assets/port5.jpg"
import port6 from "../../assets/port6.jpg"
import port7 from "../../assets/port7.png"
import port8 from "../../assets/port8.jpg"
import port9 from "../../assets/port9.PNG"
import port10 from "../../assets/port10.png"
import port11 from "../../assets/port11.png"
import port12 from "../../assets/port12.png"
import port13 from "../../assets/port13.jpeg"
import port16 from "../../assets/port16.png"
import port15 from "../../assets/port15.png"
import port14 from "../../assets/port14.png"

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <br /><br />
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port} alt="" />
          </div>
          <h3>This is a Portfolio Website</h3>
          <div className="portfolio_item_cta"><a href="https://github.com/creativeabhi13/creativeabhi13.github.io" target="blank" className='btn'>Github</a>
            <a href="https://creativeabhi13.github.io/" target="blank" className='btn btn-primary'>Live Demo</a>
          </div>

        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port1} alt="" />
          </div>
          <h3>Education single Page Design</h3>
          <div className="portfolio_item_cta"><a href="https://github.com/education-technology/education-technology.github.io" target="blank" className='btn'>Github</a>
            <a href="https://education-technology.github.io/" target="blank" className='btn btn-primary'>Live Demo</a></div>


        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port2} alt="" />
          </div>
          <h3>This is a Edutech Website </h3>
          <div className="portfolio_item_cta"><a href="https://github.com/education-technology/education-technology.github.io" target="blank" className='btn'>Github</a>
            <a href="https://education-technology.github.io/" target="blank" className='btn btn-primary'>Live Demo</a></div>


        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port3} alt="" />
          </div>
          <h3>Apartment Management System</h3>
          <div className="portfolio_item_cta"><a href="https://github.com/creativeabhi13/DBMS" target="blank" className='btn'>Github</a>
            <a href="https://education-technology.github.io/" target="blank" className='btn btn-primary'>Live Demo</a></div>


        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port4} alt="" />
          </div>
          <h3>This is a Restaurant Website</h3>
          <div className="portfolio_item_cta"><a href="https://github.com/121restaurant/121restaurant.github.io" target="blank" className='btn'>Github</a>
            <a href="https://121restaurant.github.io/" target="blank" className='btn btn-primary'>Live Demo</a></div>


        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port5} alt="" />
          </div>
          <h3>The HandCricket Game</h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com/creativeabhi13/HandCricket" target="blank" className='btn'>Github</a>
            <a href="https://education-technology.github.io/" target="blank" className='btn btn-primary'>Live Demo</a>

          </div>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port7} alt="" />
          </div>
          <h3>Youth Compass Application</h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com/hshsni/YFS" target="blank" className='btn'>Github</a>
            <a href="https://github.com/hshsni/YFS" target="blank" className='btn btn-primary'>Live Demo</a>

          </div>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port8} alt="" />
          </div>
          <h3>Course Registration Application</h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com/creativeabhi13/Course-Registration-Application-" target="blank" className='btn'>Github</a>
            <a href="https://github.com/creativeabhi13/Course-Registration-Application-" target="blank" className='btn btn-primary'>Live Demo</a>

          </div>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port9} alt="" />
          </div>
          <h3>Unit Converter Application</h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com/hshsni/uid-project-2022" target="blank" className='btn'>Github</a>
            <a href="https://github.com/creativeabhi13/Course-Registration-Application-" target="blank" className='btn btn-primary'>Live Demo</a>

          </div>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port10} alt="" />
          </div>
          <h3>Dilabs Systems Website </h3>
          <div className="portfolio_item_cta">
            <a href="https://dilabs.in/" target="blank" className='btn btn-primary'>Live Demo</a>
          </div>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port11} alt="" />
          </div>
          <h3>Tedlabs Ecommerce Website </h3>
          <div className="portfolio_item_cta">
            <a href="https://tedlabs.in/shop/" target="blank" className='btn btn-primary'>Live Demo</a>
          </div>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port13} alt="" />
          </div>
          <h3>Milkvilla Admin Dashboard </h3>
          <div className="portfolio_item_cta">
            <a href="https://dashboard.milkvilla.in/" target="blank" className='btn btn-primary'>Live Demo</a>
          </div>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port14} alt="" />
          </div>
          <div className="portfolio_item_img">
            <img src={port15} alt="" />
          </div>
          <div className="portfolio_item_img">
            <img src={port16} alt="" />
          </div>
          <h3>Laptopwala Ecommerce Application - MERN STACK</h3>
          
          <div className="portfolio_item_cta">
       
            <a href="https://github.com/creativeabhi13/Mern-Stack/tree/main/Capstone_Project_Ecommerce_Application" target="blank" className='btn'>Github</a>
            <a href="https://github.com/creativeabhi13/Mern-Stack/tree/main/Capstone_Project_Ecommerce_Application" target="blank" className='btn btn-primary'>Live Demo</a>
          </div>

        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port12} alt="" />
          </div>
          <h3>Milkvilla Ios Application </h3>
          <div className="portfolio_item_cta">
          <a href="https://apps.apple.com/in/app/milkvilla/id6496507516?platform=iphone" target="blank" className='btn'>Github</a>
            <a href="https://apps.apple.com/in/app/milkvilla/id6496507516?platform=iphone" target="blank" className='btn btn-primary'>Live Demo</a>
          </div>

        </article>
        
      </div>
    </section>

  )
}
export default Portfolio;
