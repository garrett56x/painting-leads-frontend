import React from "react";
import { Link } from "@reach/router";
import { Button, IconButton, Typography } from "@material-ui/core";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import useStyles from "./FooterStyles";

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.left}>
        <IconButton
          aria-label="facebook"
          className={classes.footerLink}
          href="https://www.facebook.com/The-Paint-Connection-107887174318905"
          target="_blank"
        >
          <Facebook />
        </IconButton>
        <IconButton
          aria-label="twitter"
          className={classes.footerLink}
          href="https://twitter.com/thepaintconnec1"
          target="_blank"
        >
          <Twitter />
        </IconButton>
        <IconButton
          aria-label="instagram"
          className={classes.footerLink}
          href="https://www.instagram.com/the_paint_connection/"
          target="_blank"
        >
          <Instagram />
        </IconButton>
        <Button className={classes.footerLink} component={Link} to="/about">
          About Us
        </Button>
      </div>
      <Typography>
        Copyright &copy; 2020 The Paint Connection - All Rights Reserved
      </Typography>
    </footer>
  );
}
