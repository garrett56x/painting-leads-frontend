import React from "react";
import { Link } from "@reach/router";
import { Button, IconButton, Typography } from "@material-ui/core";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="left">
        <IconButton
          aria-label="facebook"
          className="social-icon-button facebook-button"
          href="https://www.facebook.com/The-Paint-Connection-107887174318905"
          target="_blank"
        >
          <Facebook />
        </IconButton>
        <IconButton
          aria-label="twitter"
          className="social-icon-button twitter-button"
          href="https://twitter.com/thepaintconnec1"
          target="_blank"
        >
          <Twitter />
        </IconButton>
        <IconButton
          aria-label="instagram"
          className="social-icon-button instagram-button"
          href="https://www.instagram.com/the_paint_connection/"
          target="_blank"
        >
          <Instagram />
        </IconButton>
        <Button component={Link} to="/about">
          About Us
        </Button>
      </div>
      <Typography className="right">
        Copyright &copy; 2020 The Paint Connection - All Rights Reserved
      </Typography>
    </footer>
  );
}
