import React from 'react';
import aboutImg from "../images/hero.svg"
import Title from './Title';

const About = () => {
  return (
    <section className="about" id="about">
      <Title title='about' subTitle ='us'/>
      <div className="about-content">
        <div className="about-img-frame">
          <div className="about-img">
            <img clasName="img-about" src= {aboutImg} alt="" />
          </div>
        </div>
        <div className="about-info">
          <article className="about-article">
            <h3>explore the difference</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa at vitae quos explicabo, commodi hic odit doloribus accusantium autem saepe.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate totam corporis delectus, laboriosam magnam illum.</p>
          </article>
          <a href="#home" className="btn">read more</a>
        </div>
      </div>
    </section>
  );
};

export default About;
