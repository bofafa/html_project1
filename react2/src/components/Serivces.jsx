import React from 'react'
import Title from './Title'
import {services} from "../data"
import Service from './Service'

const Serivces = () => {
  return (
    <section className="services" id="services">
      < Title title = "Our" subTitle= "Serivces"/>
    <div className="services-center">

{services.map((service) => {
  return (<Service key={service.id} {...service}/>
  )
})}
    </div>
  </section>
  )
}

export default Serivces