/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "@material-ui/core/Link";
import "./NavLinks.css";

const NavLinks = () => {
  const LinkData = [
    {
      name: "Home",
      route: "",
    },
    {
      name: "Link1",
      route: "",
    },
    {
      name: "Link2",
      route: "",
    },
    {
      name: "Link3",
      route: "",
    },
    {
      name: "About",
      route: "",
    },
    {
      name: "Contact us",
      route: "",
    },
  ];

  return (
    <div className="NavLinks">
      {LinkData.map((x) => (
        <Link
          style={{ color: "black", fontSize: "20px" }}
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          {x.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
