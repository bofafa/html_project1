import React from 'react'

const Title = ({title,subTitle}) => {
  return (
    <h2>{title} <span className="inter-text">{subTitle}</span></h2>
  )
}

export default Title