import React from "react";
import useStyles from "./PageContentStyles";

export default function PageContent({ children }) {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
}
