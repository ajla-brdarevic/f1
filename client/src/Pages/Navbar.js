import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/api/drivers">Drivers</a></li>
                <li><a href="/teams">Teams</a></li>
                <li><a href="/races">Races</a></li>
                <li><a href='/api/circuits'>Circuits</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
