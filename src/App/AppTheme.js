import { createMuiTheme } from "@material-ui/core/styles";

const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#603384",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  overrides: {
    MuiButton: {
      text: {
        color: "#fffff",
      },
    },
    // MuiIconButton: {
    //   color: "#ffffff",
    // },
  },
});

export default appTheme;
