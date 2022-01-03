import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Avatar } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { checkOutAction } from '../redux/action/checkOutAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { orderItemsCreator } from '../helper/function';
import { checkOut } from '../redux/action/CartAction';
import Footer from '../home/Footer';



const theme = createTheme();
const CheckOut = () => {
      const [ data , setData] = useState({
          "address": "",
          "city": "",
          "postalCode": "",
          "phone":""
      });
      const dispatch = useDispatch();
      const state = useSelector(state => state.cartState)
      const checkOutData = useSelector(state => state.CheckOutState)
      const {token} = useSelector(state => state.profileState.data)
      const navigate = useNavigate();
      const DataHandler = event =>{
            setData({...data , [event.target.name] : event.target.value })
          }
      const HandleSubmit = (e)=>{
            e.preventDefault();
            dispatch(checkOutAction( state , data ))
      }
      console.log(orderItemsCreator(state.selectedItems))
      useEffect(()=>{
            if(!token){
              navigate('/login')
            }
      } ,[token , navigate])
      useEffect(()=>{
            if(checkOutData.data.itemsPrice){
                  navigate('/shiping')
            }
      }, [checkOutData.data])
      useEffect(()=>{
            if(checkOutData.data.itemsPrice) {
                  dispatch(checkOut())
            }
      }, [checkOutData , dispatch])
      // useEffect(()=>{
      //       if(checkOutData.data.itemsPrice){
      //       dispatch(cartReducer(checkOut()))
      // }}, [checkOutData])
      
      return (
            <>
            <ThemeProvider theme={theme}>
             <Container component="main" maxWidth="xs" sx={{border: "1px solid blue" , marginTop:4}}>
              <CssBaseline />
               <Box
                 sx={{
                 marginTop: 4,
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 }}
                  >
                  <Avatar src="/broken-image.jpg" />
                  <Typography component="h1" variant="h5" color="primary" sx={{marginTop: 2}}>
                     Check Out
                  </Typography>
                  <Box component="form"  noValidate sx={{ mt: 1 }} onSubmit={HandleSubmit}>
                  <TextField sx={{border: 0}}
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="Address"
                    autoFocus
                    onChange={DataHandler}
                  />
                   <TextField sx={{border: 0}}
                    margin="normal"
                    required
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    autoComplete="city"
                    autoFocus
                    onChange={DataHandler}
                  />
                  <Box
                   sx={{
                         display: "flex",
                         alignItems: "center"
                   }}
                  >

                   <TextField sx={{border: 0}}
                    margin="normal"
                    required
                    fullWidth
                    id="postalCode"
                    label="Postal Code"
                    name="postalCode"
                    autoComplete="Postal Code"
                    autoFocus
                    onChange={DataHandler}
                  />
                   <TextField sx={{border: 0}}
                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoComplete="phone"
                    autoFocus
                    onChange={DataHandler}
                  />
                  </Box>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                      Check Out
                   </Button>

               </Box>
              </Box>   
             </Container>
            </ThemeProvider>
             <Footer/>
          </>
      );
};

export default CheckOut;