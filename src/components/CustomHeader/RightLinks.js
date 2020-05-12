/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "../CustomButtons/Button.js";
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function RightLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {props.loggedIn &&
            <Button
                color="transparent"
                className={classes.navLink}
                component={Link}
                to="/"
                onClick={() => props.logout()}
            >
                Logout
            </Button>
        }
        {!props.loggedIn &&
            <Button
                color="transparent"
                className={classes.navLink}
                onClick={() => props.toggleModal(true)}
            >
                Login
            </Button>
        }
      </ListItem>
    </List>
  );
}
