import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import NavLinks from "../NavLinks/NavLinks";
import { Link } from "@material-ui/core";
import logo from "../../assets/logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      justifyContent: "center",
      display: "flex",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    imageSize: {
      height: "200px",
    },
    mainWrapper: {
      display: "flex",
      alignItems: "center",
    },
  })
);

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.mainWrapper}>
      <img className={classes.imageSize} src={logo} />
      <div className={classes.root}>
        <NavLinks />
      </div>
    </div>
  );
}
