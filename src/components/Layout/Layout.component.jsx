import React from 'react';
import { Outlet, NavLink } from 'react-router-dom'; 
import './Layout.style.css';

const Layout = () => {
    return (
        <div>
            <nav className="layoutnav">
                <h1>Joshua's Programming Portfolio</h1>
                <ul className="layoutul">
                    <li>
                        <NavLink to="/">About Me</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills">Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-me">Contact Me</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;