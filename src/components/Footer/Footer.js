/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { Link } from "react-router-dom";
// material-ui core components
import { IconButton, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";

import styles from "../../assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer style={{ backgroundColor: "#212121" }} className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
                <IconButton
                    color="inherit"
                    aria-label="facebook"
                    href="https://www.facebook.com/The-Paint-Connection-107887174318905"
                    target="_blank"
                >
                    <Facebook />
                </IconButton>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
                <IconButton
                    color="inherit"
                    aria-label="twitter"
                    href="https://twitter.com/thepaintconnec1"
                >
                    <Twitter />
                </IconButton>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
                <IconButton
                    color="inherit"
                    aria-label="instagram"
                    href="https://www.instagram.com/the_paint_connection/"
                >
                    <Instagram />
                </IconButton>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/about"
                className={classes.block}
              >
                About us
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
            Copyright
          &copy; {1900 + new Date().getYear()} {" "}
          The Paint Connection - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
