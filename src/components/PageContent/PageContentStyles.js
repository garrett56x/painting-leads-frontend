import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: "calc(100vh - 128px);",
    textAlign: "center",
    maxWidth: "800px",
    margin: "auto",
    padding: "25px",
  },
}));

export default useStyles;
