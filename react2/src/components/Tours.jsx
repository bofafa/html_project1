import React from 'react'
import Title from './Title'
import {tours} from "../data"
import Tour from './Tour'

const Tours = () => {
  return (
    <section className="tours" id="tours">
         < Title title = "Featured" subTitle= "Tours"/>
      <div className ="tours-center">
   
{tours.map((tour)=> {
return (<Tour key = {tour.id} {...tour}/>

)
})}
   </div>
  </section>
  );
}

export default Tours