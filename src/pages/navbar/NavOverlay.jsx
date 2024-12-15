import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./NavOverlay.scss";

function NavOverlay({ src, alt, title, link }) {
  return (
    <>
      <Link className="nav-card" to={link}>
        <img loading="lazy" src={src} alt={alt} className="nav-card-img" />
        <div className="nav-card-overlay">
          <div className="nav-title">
            <h3>{title}</h3>
          </div>
        </div>
      </Link>

      <Outlet />
    </>
  );
}

export default NavOverlay;
