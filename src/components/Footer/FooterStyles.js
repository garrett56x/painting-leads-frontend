import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#212121",
    color: "#ffffff",
    display: "flex",
    padding: "8px 0",
    zIndex: 2,
    position: "relative",
    textAlign: "center",
  },
  container: {
    padding: "0 20px",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "1140px",
      margin: "auto",
    },
  },
  left: {
    float: "left",
    display: "block",
  },
  footerLink: {
    color: "#ffffff",
  },
  right: {
    float: "right",
    display: "block",
    padding: "12px 0",
  },
}));

export default useStyles;
