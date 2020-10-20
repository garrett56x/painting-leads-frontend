import { makeStyles } from "@material-ui/core/styles";
// @ts-ignore
import painter from "../../assets/img/painter.png";

const useStyles = makeStyles((theme) => ({
  homeHero: {
    backgroundImage: `linear-gradient(rgba(22, 22, 22, 0.25) 0%, rgba(22, 22, 22, 0.25) 100%), url(${painter})`,
    border: 0,
    height: "80vh",
    margin: 0,
    display: "flex",
    padding: 0,
    overflow: "hidden",
    position: "relative",
    maxHeight: "1000px",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    textAlign: "center",
  },
  container: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "44px",
    width: "60%",
    margin: "20px auto",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px;",
    },
  },
  ctaButton: {
    color: "#fff",
    background: theme.palette.primary.main,
  },
  connect: {
    textAlign: "center",
    margin: "30px 0",
  },
  socialButton: {
    margin: "0 18px",
  },
  socialIcon: {
    height: "2em",
    width: "2em",
  },
  facebook: {
    color: "rgb(24, 119, 242)",
  },
  twitter: {
    color: "rgb(29, 161, 242)",
  },
  instagram: {
    color: "rgb(225, 48, 108)",
  },
}));

export default useStyles;
