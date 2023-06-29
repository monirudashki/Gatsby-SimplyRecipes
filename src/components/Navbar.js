import React, { useState } from 'react';
import { Link } from 'gatsby';
import logo from "../assets/images/logo.svg";
import { FaAlignJustify } from 'react-icons/fa';

const Navbar = () => {
    const [respNavBarOn, SetRespNavBarOn] = useState(false);

    return (
        <nav className='navbar'>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <button type='button' className='nav-btn' onClick={() => SetRespNavBarOn(!respNavBarOn)}>
                        <FaAlignJustify />
                    </button>
                </div>
                <div className={respNavBarOn ? 'nav-links show-links' : 'nav-links'}>
                    <Link
                        to="/"
                        className='nav-link'
                        activeClassName='active-link'
                        onClick={() => SetRespNavBarOn(false)}
                    >
                        home
                    </Link>
                    <Link to="/recipes" className='nav-link' onClick={() => SetRespNavBarOn(false)}>recipes</Link>
                    <Link to="/about" className='nav-link' onClick={() => SetRespNavBarOn(false)}>about</Link>
                    <Link to="/tags" className='nav-link' onClick={() => SetRespNavBarOn(false)}>tags</Link>
                    <div className="nav-link contact-link">
                        <Link to='/contact' className='btn' onClick={() => SetRespNavBarOn(false)}>contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
