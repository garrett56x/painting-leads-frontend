import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  footer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#212121",
    color: "#ffffff",
    height: "34px",
    padding: "15px 20px",
  },
  left: {
    flexGrow: 1,
  },
  footerLink: {
    color: "#ffffff",
  },
}));

export default useStyles;
