import React from "react";
import { Link } from "@reach/router";
import { Button, IconButton, Typography } from "@material-ui/core";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import useStyles from "./HomeStyles";

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.homeHero}>
        <div className={classes.container}>
          <Typography variant="h1" className={classes.title}>
            Connecting Homeowners and Painters
          </Typography>
          <div>
            <Button
              className={classes.ctaButton}
              component={Link}
              to="/estimate"
            >
              Request an Estimate
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.connect}>
        <Typography variant="h4">Connect With Us</Typography>
        <div>
          <IconButton
            aria-label="facebook"
            className={`${classes.socialButton} ${classes.facebook}`}
            href="https://www.facebook.com/The-Paint-Connection-107887174318905"
            target="_blank"
          >
            <Facebook className={classes.socialIcon} />
          </IconButton>
          <IconButton
            aria-label="twitter"
            className={`${classes.socialButton} ${classes.twitter}`}
            href="https://twitter.com/thepaintconnec1"
            target="_blank"
          >
            <Twitter className={classes.socialIcon} />
          </IconButton>
          <IconButton
            aria-label="instagram"
            className={`${classes.socialButton} ${classes.instagram}`}
            href="https://www.instagram.com/the_paint_connection/"
            target="_blank"
          >
            <Instagram className={classes.socialIcon} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
