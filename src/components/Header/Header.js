import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import HeadingImage from '../../images/freeLogo.jpeg'

const Header = () => {
    return (
        <div className="header-container row py-5 bg-black ">
            <h3 className=" text-success pb-3 fs-1 header">Online Education Zone</h3>
            <div className=" col-md-3 header-image">
                <img className="rounded" src={HeadingImage} alt="" />
            </div>
            <div className="col-md-9 ">
                <nav >
                    <Link className="text-decoration-none me-4 fs-3 nav-item" to='/home'>Home</Link>
                    <Link className="text-decoration-none me-4 fs-3 nav-item" to='/services'>Services</Link>
                    <Link className="text-decoration-none  me-4 fs-3 
                    nav-item" to='/about'>About us</Link>
                    <Link className="text-decoration-none  fs-3 
                    nav-item" to='/contact'>Contact</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;