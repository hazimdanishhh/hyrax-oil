import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./ButtonRouter.scss";

function ButtonRouter({ name, link, type }) {
  return (
    <>
      <Link className={type} to={link}>
        {name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
        >
          <path
            d="M13 6L7.85714 1M13 6L7.85714 11M13 6H1"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <Outlet />
    </>
  );
}

export default ButtonRouter;
