import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./NavCard.scss";

function NavCard({ src, alt, title, link, styleLink, styleOverlay }) {
  return (
    <>
      <Link className={styleLink} to={link}>
        <img src={src} alt={alt} className="nav-card-img" />
        <div className={styleOverlay}>
          <div className="nav-title">
            <h3>{title}</h3>
          </div>
        </div>
      </Link>

      <Outlet />
    </>
  );
}

export default NavCard;
