import React from 'react'
import { Link } from 'react-router-dom'

export function Nav(props) {
  return (
    <li>
      <Link {...props} />
    </li>
  )
}

export function Navbar(props) {
  return (
    <nav>
      <ul>{props.children}</ul>
    </nav>
  )
}
