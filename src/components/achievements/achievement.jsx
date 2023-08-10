import React from 'react'
import "./achievement.css"
import a1 from '../../assets/a1.jpg'
import a2 from '../../assets/a2.jpg'
import a3 from '../../assets/a3.jpg'
import a4 from '../../assets/a4.jpg'
import a5 from '../../assets/a5.jpg'
import a6 from '../../assets/a6.png'
import a7 from '../../assets/a7.jpg'


// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';








export const Achievement = () => {
  return (
    
    <section id="achievement">
      <h5>My achievement</h5>
      <h2>Achievement</h2>
      <br /><br />
      <div className="container portfolio_container1">
        

        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={a5} alt="" />
          </div>
          <h3>Blue Horn </h3>
        
        </article>
  <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={a7} alt="" />
          </div>
          <h3>Distriction Award</h3>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={a1} alt="" />
          </div>
          <h3>Smart India Hackathon 2022</h3>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={a6} alt="" />
          </div>
          <h3>Published Final Year Project Paper 2023</h3>
  

        </article>
      
        
      </div>
    </section>

    
    
  )
}
export default Achievement;