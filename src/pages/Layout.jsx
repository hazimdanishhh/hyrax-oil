import React from 'react';
import {Outlet, Link} from "react-router-dom";
import "./layout.scss";

function Layout() {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
        </ul>
    </nav>

    <Outlet />
    </>
  )
}

export default Layout