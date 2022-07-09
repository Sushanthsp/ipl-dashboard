import { makeStyles } from "@mui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((arg) => ({
    noData:{
        margin:'20px !important',
        width:'60vw',
        height:'40px',
        display:'flex',
        alignItems:'center',
        juustifyContent:'center',
        textAlign:'center'
    },
    match:{
      color:'#303f9f',
      textAlign:'center',
      "&&:hover": {
        color:"#fff !important",
      },
      "&&:focus": {
        color:"#fff !important"
      }
    },
    verticalLine:{
      height: '130px',
      borderRight: '2px solid',
    },
    verticalLineMarin:{
      height: '130px',
      borderRight: '2px solid',
      marginTop:'8px'
    },
    span:{
      fontWeight:'bold',
      textAlign:'center'
    },
    paper:{
    textAlign: 'center',
    width: '100%',
    },
  cardStyle: {
    border:'2px solid grey',
    boxSizing: 'border-box',
    display:'flex',
    justifyContent:'space-around',
    background: '#fff',
    color: 'black',
    borderRadius: '25px',
    "&&:hover": {
      border: '2px solid #303f9f !important',
      color:"#303f9f !important",
      transition: 'all 150ms ease-in'
    },
    "&&:focus": {
      border: '2px solid #303f9f !important',
      color:"#303f9f !important"
    }
  },
  data:{
    display:'flex',
    width:'70%',
    justifyContent:'space-between',
    alignItems:'center',
    margin:'20px !important'
  },
  player:{
    display:'flex',
    width:'20%',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
  },
  left:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    textAlign: 'center',
  },
  right:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    textAlign: 'center',
  },
  won:{
    marginTop:'10px !important'
  },
  Date:{
    marginTop:'10px !important'
  },
  [theme.breakpoints.down("sm")]: {
    cardStyle: {
      width:'80vw',
      height:'200px',
      margin: '10px !important',
      display:'flex',
    },
    verticalLineMarin:{
      marginTop:'35px'
    },
  },
  [theme.breakpoints.up("sm")]: {
    cardStyle: {
      width:'60vw',
      height:'150px',
      margin: '10px !important',
      display:'flex',
    },
    number:{
      
    }
  },
  [theme.breakpoints.up("md")]: {
    cardStyle: {
      width:'50vw !important',
      height:'150px !important',
      margin: '10px !important',
      display:'flex',
    },
    number:{
       
    }
  },
}));

export default useStyles;