import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./NavCard.scss";

function NavCard({ src, alt, title, link }) {
  return (
    <>
      <Link className="nav-card carousel-card" to={link}>
        <img loading="lazy" src={src} alt={alt} className="nav-card-img" />
        <div className="nav-card-overlay carousel-card-overlay">
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
