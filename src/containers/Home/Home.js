import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div
        className="page-header header-filter clear-filter jss187 home-hero"
        data-parallax="true"
      >
        <div className="container">
          <div className="title">
            <h1>Connecting Homeowners and Painters</h1>
          </div>
          {/* <div>
                            <Button color="primary" component={Link} to="/leads">Get Started</Button>
                        </div> */}
        </div>
      </div>
      <div className="connect">
        <Typography variant="h4">Connect With Us</Typography>
        <div className="social-icon-buttons">
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
        </div>
      </div>
    </div>
  );
}
