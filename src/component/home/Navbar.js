import React, { useState } from "react";
import cart from "../image/cart.svg"
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom'
import { useSelector , useDispatch} from "react-redux";
import Style from './navbar.module.css'
import prof from '../image/youngMen.jpg'
import { deletProfileAction } from '../redux/action/deletProfileAction'
import { useEffect } from "react";


 function NavBar() {
  const { data } = useSelector(state => state.profileState);
  const state = useSelector(state => state.cartState)
  const [ status , setStatus ] = useState(false);
  const [ logout , setLogout ] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(()=>{
    if(logout){
      dispatch(deletProfileAction())
    }
  } , [logout])
  useEffect(()=>{
    if(!data.id){
      setStatus(false)
    }
  }, [data , status])
  useEffect(()=>{
    
      setStatus(false)
    
  }, [navigate])
  
  return (
<>
    <div className={Style.navbar} >
      <div className={Style.LogoType}> Shoping center</div>
      <div className={Style.menu}>
        <Link to='/' style={{textDecoration:"none" }}> <p className={Style.home}>Home</p> </Link>
        <Link to='/shop' style={{textDecoration:"none" }}> <p className={Style.shop}>Shop</p></Link>
        <p className={Style.cartIcon}>
          <span style={{textDecoration:"none" , position: "relative"}}> 
          <Link to='/buy' style={{textDecoration:"none" }}><img src={cart} alt="cartIcon"  /> </Link> 
          <p className={Style.counter}>{state.itemsCounter}</p>
          </span>
        </p>
        <p className={Style.profileImg}>
          {
            data.token ? <img onClick={() => setStatus(!status)} style={{ 
                      textDecoration: "none",
                      width: "25px",
                      height: "25px" ,
                      borderRadius: "12px" ,
                      cursor: "pointer" ,
                      padding : "1px",
                      }} alt="profile" src={prof} /> :
                       <Link to='/login' style={{textDecoration:"none" }} ><p className={Style.login}>Login</p></Link> 
          }
        </p>
        
      </div>
      {
         status &&  <div className={Style.profileBox}>
         <p>name : <span>{data.name} </span></p> 
         <p>email : <span> {data.email}</span></p>
         <Button onClick={() => setLogout(!logout)}>Log Out</Button>
         <Link to='/profile' style={{textDecoration:"none"}} > <Button>Profile</Button></Link> 
                    </div>
      }
      </div>
</>

   
  );
}
export default NavBar;