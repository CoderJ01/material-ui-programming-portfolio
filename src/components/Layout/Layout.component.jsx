import React from 'react';
import { Outlet, NavLink } from 'react-router-dom'; 
import './Layout.style.css';

const linkStyle  = {
    color: "rgb(255, 253, 208)"
}

const Layout = () => {
    return (
        <div>
            <nav className="layoutnav">
                <h1>Joshua's Programming Portfolio</h1>
                <ul className="layoutul">
                    <li>
                        <NavLink to="/" style={linkStyle}>About Me</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" style={linkStyle}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" style={linkStyle}>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-me" style={linkStyle}>Contact Me</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;