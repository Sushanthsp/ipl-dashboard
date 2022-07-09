import { makeStyles } from "@mui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((arg) => ({
  tableStyle: {
    
    width: '100vw',
    margin:'20px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  },
  table:{
    width:'80%',
  },
  [theme.breakpoints.down("md")]: {
    mainPaper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "center",
      margin: "20px",
      width: "90%",
      padding: "10px",
    }
  },
  [theme.breakpoints.up("md")]: {
    mainPaper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "center",
      margin: "20px",
      width: "50%",
      padding: "10px",
    },
  },
}));

export default useStyles;
