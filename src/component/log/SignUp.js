import * as React from 'react';
import { useState , useEffect  } from 'react';
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
import { Link , useNavigate } from 'react-router-dom'
import Validate from './Validation';
import { useDispatch , useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signUpAction } from '../redux/action/signUpAction';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileData = useSelector(state => state.profileState);

  const [data , setData] = useState({
    name : "",
    password : "",
    confrimPassword : "",
    email : ""
  });
  const [errors , setErrors] = useState({});
  const HandleSubmit = (event) => {
    event.preventDefault();
    if (errors===''){
      dispatch(signUpAction(data.name , data.email , data.password))
    } else{
      toast.error("complete errors")
    }
  };
  const [focus , setFocus] = useState({});
  const DataHandler = event =>{
    setData({...data , [event.target.name] : event.target.value })
  }
   useEffect(()=>{
      setErrors(Validate(data))
      console.log(data)
   },[data , focus ])
   useEffect(()=>{
       if(profileData.data.token){
         navigate("/")
       }
   },[navigate , profileData.data.token] )
    useEffect(()=>{
     if(profileData.error.message === "Request failed with status code 400"){
      toast.error("Request failed with status code 400")
    }else if(profileData.error.message ==="Network Error"){
      toast.error("Network Error")
    }

   },[profileData.error.message])

   const TouchHandler = (event) =>{
     setFocus({...focus , [event.target.name] : true})
   }
  // const [name , setName] = useState('');
  // const [password , setPassword] = useState('');
  // const [confrimPassword , setConfirmPassword] = useState('');
  // const [email, setEmail] = useState('') 
  // const NameHandler = (e) => {
  //      setName(e.target.value.trim())
  //      console.log(name)
  // }
//   // const PasswordHandler = (e) => {
//   //   setPassword(e.target.value.trim())
//   //   console.log(password)
     
//   // }
//   const EmailHandler = (e) => {
//     if (!/\S+@\S+\.\S+/.test(email)){
//      setEmail(e.target.value)
//      console.log(email)
//     }
//   }
//   const ConfirmPasswordHandler = (e) => {
//     setConfirmPassword(e.target.value); 
// }

  return (
    <>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={HandleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="First Name"
                  autoFocus
                  onChange={DataHandler}
                  helperText={ focus.name && errors.name}
                  onFocus={TouchHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={DataHandler}
                  helperText={ focus.email && errors.email}
                  onFocus={TouchHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={DataHandler}
                  helperText={ focus.password && errors.password}
                  onFocus={TouchHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="confrim Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirmPassword"
                  onChange={DataHandler}
                  helperText={ focus.confirmPassword && errors.confirmPassword}
                  onFocus={TouchHandler}
                />
              </Grid>
             
              <Grid item xs={12}>
                <FormControlLabel
                  
                  label="I Accept "
                  control={<Checkbox value="allowExtraEmails" color="primary" name="ischeked"/>}
                />
              </Grid>
               
                
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                    <Link to="/login"> <p  variant="body2">
                   Already have an account? Sign in
                </p></Link>
               
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    <ToastContainer />

      
     </>

  );
        }