import React from 'react';
import { Outlet, NavLink } from 'react-router-dom'; 
import './Layout.style.css';

const Layout = () => {
    return (
        <div>
            <nav>
                <h1>Joshua's Programming Portfolio</h1>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About Me</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-me" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact Me</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;