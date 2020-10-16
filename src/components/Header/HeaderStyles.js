import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#212121",
    display: "flex",
    justifyContent: "center",
  },
  toolBar: {
    // maxWidth: "1140px",
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: "#ffffff",
  },
}));

export default useStyles;
