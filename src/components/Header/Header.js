import React from "react";
import { Link } from "@reach/router";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import "./Header.css";

// const useStyles = makeStyles((theme) => ({
//   title: {
//     flexGrow: 1,
//   },
// }));

export default function Header() {
  //   const classes = useStyles();
  return (
    <AppBar className="header" position="static">
      <Toolbar>
        <Link to="/">
          <Typography variant="h6" className="title">
            The Paint Connection
          </Typography>
        </Link>
        <Button component={Link} to="/about">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
}
