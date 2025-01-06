import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Hero.scss";

function Hero({ image, crumble, crumbleLink, title, desc }) {
  return (
    <>
      <div
        className="hero-background"
        style={{
          backgroundImage: image,
        }}
      >
        <div className="hero-gradient">
          <div className="hero-wrapper">
            <div className="hero-crumble">
              <Link to={crumbleLink}>{crumble}</Link>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="m10 16 4-4-4-4"
                />
              </svg>
              {title}
            </div>
            <div className="hero-text-container">
              <h1 className="hero-title">{title}</h1>

              <p className="hero-desc">{desc}</p>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Hero;
