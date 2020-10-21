import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "calc(100vh - 128px);",
    textAlign: "center",
    maxWidth: "45%",
    margin: "auto",
    padding: "25px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
}));

export default useStyles;
