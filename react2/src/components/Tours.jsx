import React from 'react'
import tourImg from '../images/hero.svg'

const Tours = () => {
  return (
    <section className="tours" id="tours">
      <h2>featured <span class="inter-text">tours</span></h2>
      <div className="tours-center">
        <article className="tour-card">
          <div className="tour-img-container"> 
            <img src={tourImg} alt=""/>
            <p className="tour-date">August 26th, 2025</p> 
          </div>
          <div className="tour-info">
            <h3>Tibet Adventure</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="tour-footer">
              <p><i className="fa-solid fa-map"></i> China</p>
              <p><i className="fa-solid fa-calendar"></i> 7 days</p>
              <p>HKD$12000</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container"> 
            <img src={tourImg} alt=""/>
            <p className="tour-date">August 26th, 2025</p> 
          </div>
          <div className="tour-info">
            <h3>Tibet Adventure</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="tour-footer">
              <p><i className="fa-solid fa-map"></i> China</p>
              <p><i className="fa-solid fa-calendar"></i> 7 days</p>
              <p>HKD$12000</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container"> 
            <img src={tourImg} alt=""/>
            <p className="tour-date">August 26th, 2025</p> 
          </div>
          <div className="tour-info">
            <h3>Tibet Adventure</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="tour-footer">
              <p><i className="fa-solid fa-map"></i> China</p>
              <p><i className="fa-solid fa-calendar"></i> 7 days</p>
              <p>HKD$12000</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container"> 
            <img src={tourImg} alt=""/>
            <p className="tour-date">August 26th, 2025</p> 
          </div>
          <div className="tour-info">
            <h3>Tibet Adventure</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="tour-footer">
              <p><i className="fa-solid fa-map"></i> China</p>
              <p><i className="fa-solid fa-calendar"></i> 7 days</p>
              <p>HKD$12000</p>
            </div>
          </div>
        </article>
        
       </div>
   </section>
  )
}

export default Tours