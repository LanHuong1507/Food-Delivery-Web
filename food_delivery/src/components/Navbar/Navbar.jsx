import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo-container">
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
        <p>Besinik</p>
      </div>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Review</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-menu-right">
        <button>Sign Up</button>
        <Link to='/cart'>
          <div className="cart-icon-container">
            <div className="cart-icon-wrapper">
              <FontAwesomeIcon icon={faShoppingBag} className='cart-icon' />
            </div>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default Navbar
