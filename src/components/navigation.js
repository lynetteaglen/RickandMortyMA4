import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li><Link to="/">Homepage</Link></li>
                    <li className="nav-right"><Link to="/About">About</Link></li>
                    <li className="nav-right"><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation; 