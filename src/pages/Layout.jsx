import React from 'react';
import {Outlet, Link} from "react-router-dom";
import "./layout.scss";

function Layout() {
  return (
    <>
    <div className='navbar'>
        <nav>
            <div>
                <Link to="/"><img className="nav-logo" src="./hyraxoil-logo.png" alt="Hyrax Oil Logo" /></Link>
            </div>
            <ul className='link-list'>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/about">about us</Link>
                </li>
                <li>
                    <Link to="/info">info</Link>
                </li>
                <li>
                    <Link to="/contact">contact us</Link>
                </li>
            </ul>
        </nav>
    </div>

    <Outlet />
    </>
  )
}

export default Layout