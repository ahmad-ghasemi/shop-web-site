import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link , Outlet } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import Style from './navbar.module.css'
import prof from '../image/youngMen.jpg'



const useStyles = makeStyles((theme) => ({
 
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    cursor: "pointer" ,
    padding : "5px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "yellow",
      
    }},
    login: {
      textDecoration: "none",
      color: "blue",
      backgroundColor: "white",
      fontSize: "20px",
      borderRadius: "10px" ,
      cursor: "pointer" ,
      padding : "5px",
      marginLeft: theme.spacing(5),
      "&:hover": {
        color: "black",
        
      }},
      icon:{ 
        marginTop: "5px",
        textDecoration: "none",
        color: "white",
        width: "25px",
        borderRadius: "12px" ,
        cursor: "pointer" ,
        padding : "1px",
        marginLeft: theme.spacing(5),
        "&:hover": {
          color: "yellow",
          
        }},
  
}));

function Navbar() {
  const classes = useStyles();
  const { data } = useSelector(state => state.profileState);
  const state = useSelector(state => state.cartState)
  
  

  return (
    <div >

    <AppBar position="static" className={Style.main}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h5" className={classes.logo}>
          Shoping center
        </Typography>
          <div className={classes.navlinks}>
          <Link to='/' style={{textDecoration:"none"}}><h1 className={classes.link}> Home </h1></Link>  
          <Link to='/shop' style={{textDecoration:"none"}}><h1  className={classes.link}> Shop </h1></Link>
          <Link to='/about' style={{textDecoration:"none"}}><h1 className={classes.link}> about</h1></Link>
          {
            data.token &&
          <Link to='/buy' style={{textDecoration:"none" , position: "relative"}}> <h1 className={classes.link}>
          <ShoppingCartIcon /> 
          <p className={Style.counter}>{state.itemsCounter}</p>
          </h1>
          </Link>
          }
          {
            data.token ? <Link to='/profile' style={{textDecoration:"none"}} ><img className={classes.icon} alt="profile" src={prof} /></Link>  :
            <Link to='/login' style={{textDecoration:"none"}}><h1 className={classes.login}>Login</h1> </Link>
          }
            <Outlet />
          </div>
      </Toolbar>
    </AppBar>
    </div>
  );
}
export default Navbar;