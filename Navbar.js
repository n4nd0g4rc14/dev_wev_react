import React from 'react';

const Navbar = () => {
    return (
        <nav id="navbar">
            <img src="/logo.png" className="hello" alt="Logo" />
            <div className="navbar-container">
                <ul className="navbar-items">
                    <li className="navbar-item">HOME</li>
                    <li className="navbar-item">INSCREVER-SE</li>
                    <li className="navbar-item">FAQ</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
