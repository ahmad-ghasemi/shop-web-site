import React , { useEffect, useState }  from "react";
import Avatar from "@mui/material/Avatar";
import profileImage from "../component/image/youngMenOfficial.jpg";
import { TextField , Button , Box , InputLabel } from "@mui/material";
import { useSelector , useDispatch} from "react-redux";
import { ChangeProfileAction } from "./redux/action/changeProfileAction";
import { Link , useNavigate } from "react-router-dom";
import style from './Profile.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Profile = () => {
     
      const profileData = useSelector(state => state.profileState);
      const dispatch = useDispatch();
      const [data , setData] = useState({
            name : "",
            email:  `${profileData.data.email}`,
            password: ""
      });
      const DataHandler = (event) =>{
            setData({...data , [event.target.name] : event.target.value })
            console.log(data)
      }
      const sendData = ()=>{
            dispatch(ChangeProfileAction(data , profileData.data.token))
            toast.success("profile data changed!")
             
      }
      const navigate = useNavigate();
      useEffect(() => {
           if(!profileData.data.token){
                 navigate('/login')
           }
      }, [navigate , profileData.data.token])
    
 
  return (
    <div style={{display : 'flex' , justifyContent:"space-between",
    alignItems:"center"}}>
          <Box sx={{ml: 2}}>
                 <Button
                    
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 , width:'200px'}}
                    >
                      profile data
                   </Button>
                   <Link to='/profile/myorder'>
                   <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb:2  , textDecoration:'none', width:'200px' }}
                    >
                      my orders
                   </Button>
                   
                   </Link>
               </Box>
               <Box sx={{ width: '100%' , mt: 4 }}>

          <Box 
          sx={{
                justifyContent:"center",
                alignItems:"center" ,
                maxWidth:"100px" ,
                margin: "0 auto" ,
                overflow:"none" 

          }}
          >
      <h4 style={{ width:"180px", overflow:"none" , margin: "15px 15px 15px -5px" , color:'#00000099'}}> EDIT PROFILE </h4>

      <Avatar alt='Remy Sharp' src={profileImage} sx={{ width:'60%' , height:'60%' , marginLeft:'36%' }} />
          </Box>
          <Box
          sx={{
                justifyContent:"center",
                maxWidth:"70%",
                margin:"0 auto"
          }}
          > 

      <Box
      sx={{
            display: "flex",
            alignItems: "center",
            margin: "10px"
      }}
      >
      <InputLabel htmlFor="input-with-icon-adornment" sx={{ marginLeft: '8%' }}>Email : </InputLabel>
      <TextField
            sx={{ margin:"10px 10px 10px 13%" , width: "50%" , justifyContent:'center'}}
            name='email'
            label={`${profileData.data.email}`}
            type='email'
            id='email'
            value={`${profileData.data.email}`}
            getContentAnchorEl='null'
      /> 
      </Box>
      <Box
      sx={{
            display: "flex",
            alignItems: "center",
            margin: "10px"
      }}
      >

      <InputLabel htmlFor="input-with-icon-adornment" sx={{ marginLeft: '8%' }}>Name : </InputLabel>
      <TextField
            onChange={DataHandler}
            sx={{ margin:"10px 10px 10px 12.8%" , width: "50%" , justifyContent:'center'}}
            required
            name='name'
            label={`${profileData.data.name}`}
            type='name'
            id='name'
      /> 
      </Box>
      <Box
      sx={{
            display: "flex",
            alignItems: "center",
            margin: "10px"
      }}
      >

      <InputLabel htmlFor="input-with-icon-adornment" sx={{ marginLeft: '8%' }}> Password : </InputLabel>
      <TextField
            sx={{  margin:"10px 10px 10px 9.6%" , width: "50%" , justifyContent:'center'}}
            required
            name='password'
            label='*******'
            type='password'
            id='password'
            onChange={DataHandler}
      />
      </Box>
      <Box
      sx={{
            display: "flex",
            alignItems: "center",
            margin: "10px"
      }}
      >
            
      <Button
            className={style.linkBottom}
            type="cansel"
            variant="contained"
            sx={{ mt: 3, mb: 2 , margin:"10px 10px 10px 26.5%", width:'24%'}}
            color="error"
            as={Link}      
            to='/shop' 
      >
            Cancel
      </Button>

      <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 , margin:"10px 10px 10px 15px" , width:'24%'}}
            onClick={sendData}  
      >
            Send
      </Button>
      </Box>
          </Box>
               </Box>
          <ToastContainer />
    </div>
  );
};

export default Profile;
