import React from 'react'
import navbrand from '../images/navbrand.png'
import menu from '../images/menu.png'
import '../App.css'

function NavBar() {
  return (
    <div>
      <div className="navbar-wrapper">
        <div className="navbar-components justify-between flex items-center">
            <div className="navbrand-container pl-6">
                <img src = {navbrand}/>
            </div>
            <div className="navlinks-wrapper">
              <div className="navlinks mr-16 flex text-white items-center">
                <ul className = 'text-white links flex'>
                  <li>
                    <a>Timeline</a>
                  </li>
                  <li>
                    <a>Overview</a>
                  </li>
                  <li>
                    <a>FAQs</a>
                  </li>
                  <li>
                    <a>Contacts</a>
                  </li>
                </ul>
                <div className="auth-wrapper">
                    <div className=" text-white">
                        <a>Register</a>
                    </div>
                </div>
              </div>
            </div>
            <div className ='dropdown-wrapper'>
                <div className="dropdown-menu">
                    <img src= {menu} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
