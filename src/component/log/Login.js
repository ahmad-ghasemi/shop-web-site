import * as React from 'react';
import { useState , useEffect } from 'react'
import  Validate  from './Validation'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link , useNavigate } from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';
import { loginAction } from '../redux/action/loginAction';
import { ToastContainer, toast } from 'react-toastify';



const theme = createTheme();
export default function Login() {

  const [errors , setErrors] = useState({});
  const [focus , setFocus] = useState({});
  const dispatch = useDispatch();
  const profileData =useSelector(state => state.profileState)
  const [data , setData] = useState({
    email: "",
    password: ""
  });

  const GetData = (e) => {
    setData({...data , [e.target.name] : e.target.value})
    console.log(data)
  }
  const HandleSubmit = (event) => { 
    event.preventDefault();
    dispatch(loginAction(data))
  }
  const navigate = useNavigate();
  useEffect(()=>{
    if(profileData.data.token){
     toast.success("Wow so easy!")
      navigate("/shop")
    }
  } , [navigate , profileData.data.token])
  useEffect(()=>{
   if(profileData.error ==="Network Error"){
     toast.error("Network Error")
   }else if (profileData.error === "Request failed with status code 401"){
     toast.error("Invalid Email or Password")
   }

  },[profileData.error])
  
useEffect(()=>{
    setErrors(Validate(data))
 },[data , focus ])


  const TouchHandler = (event) =>{
    setFocus({...focus , [event.target.name] : true})
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' , border: 0}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={HandleSubmit}  noValidate sx={{ mt: 1 }}>
            <TextField sx={{border: 0}}
            onChange={GetData}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onFocus={TouchHandler}
              helperText={ focus.email && errors.email}

            />
            <TextField
              onChange={GetData} 
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={ focus.password && errors.password}

            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              
              </Grid>
              <Grid item>
               <Link to="/signup"><p variant="body2">
                  {"Don't have an account? Sign Up"}
                </p></Link> 
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <ToastContainer/>
    </ThemeProvider>
  );
} 

