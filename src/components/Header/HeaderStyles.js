import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#212121",
    display: "flex",
    justifyContent: "center",
  },
  toolBar: {
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      maxWidth: "1140px",
      margin: "auto",
    },
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: "#ffffff",
  },
}));

export default useStyles;
