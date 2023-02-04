import React from 'react';
import { Outlet, Link } from 'react-router-dom'; 
import './Layout.style.css';

const Layout = () => {
    return (
        <div>
            <nav className="layoutnav">
                <h1>Joshua's Programming Portfolio</h1>
                <ul className="layoutul">
                    <li>
                        <Link to="/"><a href="/">About Me</a></Link>
                    </li>
                    <li>
                        <Link to="/portfolio"><a href="/">Portfolio</a></Link>
                    </li>
                    <li>
                        <Link to="/skills"><a href="/">Skills</a></Link>
                    </li>
                    <li>
                        <Link to="/contact-me"><a href="/">Contact Me</a></Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;