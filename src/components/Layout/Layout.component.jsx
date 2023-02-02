import React from 'react';
import { Outlet, Link } from 'react-router-dom'; 
import styles from './Layout.style.css';

const Layout = () => {
    return (
        <div>
            <nav className="layoutnav">
                <ul className="layoutul">
                    <li className="layoutli">
                        <Link to="/">About Me</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/contact-me">Contact Me</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;