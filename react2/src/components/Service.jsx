import React from 'react'

const Service = ({icon, title, text}) => {
  return (
    <article className="service">
    <div className="service-icon"><i className={icon}></i></div>
    <div className="service-info">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  </article>  
  )
};

export default Service;