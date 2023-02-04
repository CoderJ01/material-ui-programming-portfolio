import React from 'react';
import { Outlet, Link } from 'react-router-dom'; 
import './Layout.style.css';
import styled from "styled-components";

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
                        <Link to="/" style={linkStyle}>About Me</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/skills" style={linkStyle}>Skills</Link>
                    </li>
                    <li>
                        <Link to="/contact-me" style={linkStyle}>Contact Me</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;