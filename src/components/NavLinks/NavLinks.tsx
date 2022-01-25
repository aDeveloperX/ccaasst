/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "@material-ui/core/Link";
import "./NavLinks.css";
import { Colours } from "../../theme/Colours";

const NavLinks = () => {
  const LinkData = [
    {
      name: "Home",
      route: "",
    },
    {
      name: "Antarctic",
      route: "",
    },
    {
      name: "Remote",
      route: "",
    },
    {
      name: "Maritime",
      route: "",
    },
    {
      name: "Space",
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
          style={{ color: Colours.DarkBlue, fontSize: "18px" }}
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
