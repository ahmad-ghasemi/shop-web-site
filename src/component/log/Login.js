import * as React from 'react';
import { useState , useEffect } from 'react'
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



const theme = createTheme();
export default function Login() {
  const dispatch = useDispatch();
  const {token} =useSelector(state => state.profileState.data)
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const GetEmail = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }
  const GetPassword = (e) => {
    setPassword(e.target.value)
    console.log(password)
  }
  const HandleSubmit = (event) => { 
    event.preventDefault();
    dispatch(loginAction(email , password))
  }
  const navigate = useNavigate();
  useEffect(()=>{
    console.log(token)
    if(token){
      navigate("/shop")
    }

  } , [navigate , token])
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
            onChange={GetEmail}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              
            />
            <TextField
              onChange={GetPassword} 
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
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
    </ThemeProvider>
  );
}
