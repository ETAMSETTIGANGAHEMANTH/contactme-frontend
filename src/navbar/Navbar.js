import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { RiAdminFill } from "react-icons/ri";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    < NavLink className="navbar-brand" to="/">Contact Me</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/form">Form</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/aboutus">AboutUs</NavLink>
        </li>
      </ul>
      <div className='ms-auto'>
          <NavLink className="nav-link active" aria-current="page" to="/admin"><RiAdminFill/> Admin</NavLink>
        </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar