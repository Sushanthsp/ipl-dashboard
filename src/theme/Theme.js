import { createTheme } from "@mui/material";

export const primaryTheme = createTheme({
  palette: {
    primary: {
      main: "#303f9f",
    },
    secondary: {
      main: "#c5cae9",
    },
    LeftbackgroundColor: {
      main: "#5c6bc0",
    },
    RightbackgroundColor: {
      main: "#5c6bc0",
    },
    google:{
      main: "#3f51b5",
    },
    black: {
      main: "#000000"
    }
  },
  typography: {
    fontFamily: ['"Signika Negative"', "Open Sans"].join(","),
  },
});
