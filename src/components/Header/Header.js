import React from "react";
import { Link } from "@reach/router";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import useStyles from "./HeaderStyles";

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar className={classes.toolBar}>
        <span className={classes.title}>
          <Button className={classes.button} component={Link} to="/">
            The Paint Connection
          </Button>
        </span>
        <Button className={classes.button} component={Link} to="/about">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
}
