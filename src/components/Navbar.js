import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = ()=> setClick (!click);
    const closeMobileMenu = ()=> setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            ARE <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon'>
            <i className={click ? 'fas fa-lines' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/About Us' className='nav-links' onClick={closeMobileMenu}>
                About Us
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                Services
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/Sign Up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
