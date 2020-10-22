const styles = (theme) => ({
  formInput: {
    width: "48%",
    marginLeft: "5px",
    marginRight: "5px",
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  buttonWrapper: {
    textAlign: "right",
  },
});

export default styles;
