import React from "react";
import { Typography } from "@material-ui/core";
import PageContent from "../../components/PageContent/PageContent";
import useStyles from "./AboutStyles";

export default function About() {
  const classes = useStyles();
  return (
    <PageContent>
      <Typography variant="h2">About Us</Typography>
      <div className={classes.contentSection}>
        <Typography variant="h5">For Homeowners</Typography>
        <Typography variant="body1">
          It is our goal to help you find the best painter to fit your needs! We
          believe getting more than one estimate is essential, not only to
          compare prices, but also to find the painter you feel most comfortable
          trusting with your home. At the same time, we will not bombard you
          with phone calls; you tell us how many estimates you&apos;re looking
          for, and that will be how many painters we connect you with.
        </Typography>
      </div>
      <div className={classes.contentSection}>
        <Typography variant="h5">For Painters</Typography>
        <Typography variant="body1">
          It is our goal to connect you with homeowners who are truly looking to
          get their house painted! When it comes to shopping for leads, we put
          the power in your hands! You can browse through the types of leads
          you&apos;re looking for, see the cost upfront, and only purchase the
          ones that are the right fit for you.
        </Typography>
      </div>
      <div className={classes.contentSection}>
        <Typography variant="h5">Customer Satisfaction Guaranteed</Typography>
        <Typography variant="body1">
          While we try our best, we understand the right fit doesn&apos;t always
          happen. If you&apos;re a painter and think you purchased a phony lead,
          let us know and we&apos;ll work with you to find a better one. If
          you&apos;re a homeowner and you didn&apos;t get the number of
          estimates you requested, you can request more at anytime.
        </Typography>
      </div>
    </PageContent>
  );
}
