import React from 'react'

const Tour = ({image, date, title, info, location, duration, cost}) => {
  return (
    <article className="tour-card">
          <div className="tour-img-container"> 
            <img src={image} alt=""/>
            <p className="tour-date">{date}</p> 
          </div>
          <div className="tour-info">
            <h3>{title}</h3>
            <p>{info}</p>
            <div className="tour-footer">
              <p><i className="fa-solid fa-map"></i>{location}</p>
              <p><i className="fa-solid fa-calendar"></i>{duration}</p>
              <p>{cost}</p>
            </div>
          </div>
        </article>
  )
}

export default Tour