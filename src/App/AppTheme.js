import { createMuiTheme } from "@material-ui/core/styles";

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#603384",
    },
  },
  typography: {},
  overrides: {
    MuiSvgIcon: {
      height: "2em",
      width: "2em",
    },
  },
});

export default appTheme;
