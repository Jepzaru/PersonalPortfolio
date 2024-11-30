import React, { useState } from 'react';
import './Header.css';
import headerlogo from './Images/ATLASheader.png';
import phlogo from './Images/phlogo.png';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={headerlogo} alt="Logo" className="logo-image" />
            </div>
            <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#services">SERVICES & SOLUTIONS</a></li>
                    <li><a href="#careers">CAREERS</a></li>
                    <li><a href="#contact">CONTACT US</a></li>
                    <li><a href="#contact">NEWS & EVENTS</a></li>
                    <li><a href="#contact">TRAININGS</a></li>
                </ul>
            </nav>
            <div className="logo">
                <img src={phlogo} alt="Logo" className="ph-logo-image" />
            </div>
            <div className="nav-toggle" onClick={toggleMenu}>
                &#9776; 
            </div>
        </header>
    );
};

export default Header;
