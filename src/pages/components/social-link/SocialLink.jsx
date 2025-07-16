import React from "react";
import "./SocialLink.scss";

function SocialLink({ link, icon }) {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </>
  );
}

export default SocialLink;
