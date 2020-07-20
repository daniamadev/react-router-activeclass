import React from "react"
import "../../App.css"
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="isSelected">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="isSelected">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="isSelected">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="contact" activeClassName="isSelected">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
