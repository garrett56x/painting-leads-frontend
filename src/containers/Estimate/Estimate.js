import React from "react";
import dotenv from "dotenv";
import emailjs from "emailjs-com";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { withStyles } from "@material-ui/styles";
import PageContent from "../../components/PageContent/PageContent";
import styles from "./EstimateStyles";

dotenv.config();

class Estimate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      stories: "",
      rooms: "",
      estimateRequests: 3,
      description: "",
      type1: "",
      type2: "",
      type3: "",
      sending: false,
      success: "",
      error: "",
    };
  }

  handleSubmit = (e) => {
    const {
      name,
      phone,
      email,
      address1,
      address2,
      city,
      state,
      zip,
      estimateRequests,
      stories,
      rooms,
      type1,
      type3,
      description,
    } = this.state;
    this.setState({ sending: true });

    let size = "";
    if (stories) {
      size = `${stories} stories`;
    }

    if (rooms) {
      if (size.length) {
        size += ` & ${rooms} rooms`;
      } else {
        size = `${rooms} rooms`;
      }
    }

    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          name,
          phone,
          email,
          address1,
          address2,
          city,
          state,
          zip,
          estimateRequests,
          size,
          jobType: type1 == "Both" ? "Interior & Exterior" : type1,
          type3,
          description,
        },
        process.env.REACT_APP_USER_NAME
      )
      .then(
        () => {
          this.setState({
            sending: false,
            success: `Successfully requested ${this.state.estimateRequests} estimates!`,
          });
          this.resetForm();
          if (this.state.error.length) {
            this.setState({ error: "" });
          }
        },
        () => {
          this.setState({
            sending: false,
            error:
              "There was a problem with your estimate request. Please try again later.",
          });
        }
      );
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      description: "",
    });
  };

  handleChange = (type, e) => {
    let stateChange = {};
    stateChange[type] = e.target.value;
    this.setState(stateChange);
  };

  render() {
    const {
      name,
      phone,
      email,
      address1,
      address2,
      city,
      state,
      zip,
      estimateRequests,
      stories,
      rooms,
      type1,
      type3,
      description,
      sending,
      success,
      error,
    } = this.state;

    const { classes } = this.props;

    return (
      <PageContent>
        <Typography variant="h2">Request an Estimate</Typography>
        {success.length ? (
          <Alert variant="filled" severity="success">
            {success}
          </Alert>
        ) : (
          ""
        )}
        {error.length ? (
          <Alert variant="filled" severity="error">
            {error}
          </Alert>
        ) : (
          ""
        )}
        <form id="estimate-form" onSubmit={this.handleSubmit}>
          <FormControl className={classes.formInput} margin="normal">
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              aria-label="name"
              type="text"
              value={name}
              onChange={(e) => this.handleChange("name", e)}
              required
            />
          </FormControl>
          <FormControl className={classes.formInput} margin="normal">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              aria-label="email"
              type="email"
              value={email}
              onChange={(e) => this.handleChange("email", e)}
              required
            />
          </FormControl>
          <FormControl className={classes.formInput} margin="normal">
            <InputLabel htmlFor="phone">Phone</InputLabel>
            <Input
              id="phone"
              aria-label="phone"
              type="text"
              value={phone}
              onChange={(e) => this.handleChange("phone", e)}
              required
            />
          </FormControl>
          <FormControl className={classes.formInput} margin="normal">
            <InputLabel htmlFor="address1">Address</InputLabel>
            <Input
              id="address1"
              aria-label="address1"
              type="text"
              value={address1}
              onChange={(e) => this.handleChange("address1", e)}
              required
            />
          </FormControl>
          <FormControl className={classes.formInput} margin="normal">
            <InputLabel htmlFor="address2">Address 2</InputLabel>
            <Input
              id="address2"
              aria-label="address2"
              type="text"
              value={address2}
              onChange={(e) => this.handleChange("address2", e)}
            />
          </FormControl>
          <FormControl className={classes.formInput} margin="normal">
            <InputLabel htmlFor="city">City</InputLabel>
            <Input
              id="city"
              aria-label="city"
              type="text"
              value={city}
              onChange={(e) => this.handleChange("city", e)}
              required
            />
          </FormControl>
          <FormControl className={classes.formInput} margin="normal">
            <InputLabel htmlFor="state">State</InputLabel>
            <Input
              id="state"
              aria-label="state"
              type="text"
              value={state}
              onChange={(e) => this.handleChange("state", e)}
              required
            />
          </FormControl>
          <FormControl className={classes.formInput} margin="normal">
            <InputLabel htmlFor="zip">Zip Code</InputLabel>
            <Input
              id="zip"
              aria-label="zip"
              type="text"
              value={zip}
              onChange={(e) => this.handleChange("zip", e)}
              required
            />
          </FormControl>
          <FormControl className={classes.formInput} margin="normal">
            <InputLabel id="estimate-requests-label">
              Number of Estimates
            </InputLabel>
            <Select
              labelId="estimate-requests-label"
              id="estimate-requests"
              value={estimateRequests}
              onChange={(e) => this.handleChange("estimateRequests", e)}
              required
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formInput} margin="normal">
            <InputLabel id="estimate-requests-label">Job Size</InputLabel>
            <Select
              labelId="full-partial-label"
              id="full-partial"
              value={type3}
              onChange={(e) => this.handleChange("type3", e)}
              required
            >
              <MenuItem value="Full">Entire Home</MenuItem>
              <MenuItem value="Partial">Partial Home</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formInput} margin="normal">
            <InputLabel id="interior-exterior-label">
              Interior or Exterior?
            </InputLabel>
            <Select
              labelId="interior-exterior-label"
              id="interior-exterior"
              value={type1}
              onChange={(e) => this.handleChange("type1", e)}
              required
            >
              <MenuItem value="Interior">Interior</MenuItem>
              <MenuItem value="Exterior">Exterior</MenuItem>
              <MenuItem value="Both">Interior &amp; Exterior</MenuItem>
            </Select>
          </FormControl>
          {type1 == "Exterior" || type1 == "Both" ? (
            <FormControl className={classes.formInput} margin="normal">
              <InputLabel id="house-height-label">House Height</InputLabel>
              <Select
                labelId="house-height-label"
                id="house-height"
                value={stories}
                onChange={(e) => this.handleChange("stories", e)}
              >
                <MenuItem value={1}>1 Story</MenuItem>
                <MenuItem value={2}>2 Stories</MenuItem>
                <MenuItem value={3}>3+ Stories</MenuItem>
              </Select>
            </FormControl>
          ) : (
            ""
          )}
          {type1 == "Interior" || type1 == "Both" ? (
            <FormControl className={classes.formInput} margin="normal">
              <InputLabel id="rooms-label">Number of Rooms</InputLabel>
              <Select
                labelId="rooms-label"
                id="rooms"
                value={rooms}
                onChange={(e) => this.handleChange("rooms", e)}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10+</MenuItem>
              </Select>
            </FormControl>
          ) : (
            ""
          )}
          <FormControl fullWidth margin="normal">
            <TextField
              id="description"
              aria-label="description"
              value={description}
              onChange={(e) => this.handleChange("description", e)}
              variant="outlined"
              label="Description, or more information"
              multiline
              rows={4}
            />
          </FormControl>
          <div className={classes.buttonWrapper}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              aria-label="submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Submit"}
            </Button>
          </div>
        </form>
      </PageContent>
    );
  }
}

// @ts-ignore
export default withStyles(styles)(Estimate);
