import React from 'react'
import { socialLink } from '../data'

const SocialLink = ({ groupClass }) => {
  return (
    <ul className={groupClass}>
      {socialLink.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} target="_blank">
              <i className={link.icon}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLink
