import React from 'react'
import { pageLink } from '../data'

const PageLink = ({ groupClass, itemClass }) => {
  return (
    <ul className={groupClass}>
      {pageLink.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={itemClass}>
              {link.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default PageLink
