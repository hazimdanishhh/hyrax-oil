import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./SocialLink.scss";

function SocialLink({ link, icon }) {
  return (
    <>
      <Link to={link} target="_blank" rel="noopener noreferrer">
        {icon}
      </Link>

      <Outlet />
    </>
  );
}

export default SocialLink;
