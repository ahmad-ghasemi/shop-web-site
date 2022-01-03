import React, { useEffect } from 'react';
import {Alert} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';




const Shiping = () => {
      const { name } = useSelector(state => state.profileState.data)
      const navigate = useNavigate();
     useEffect(()=>{
           if (!name) {
                 navigate('/login')
           }
     })
      return (
            <div style={{justifyContent : "center"}}>
               <Alert variant="success">
                <Alert.Heading>Hey {name}, nice to see you</Alert.Heading>
                  <p>
                     we happy in your buying ,
                     come back soon and enjoy of online buy
                 </p>
                       <hr />
                  <div style={{display: 'flex' , justifyContent: 'space-between'}}>
                  <p>to back shop please press button</p>     
                  <Link to="/shop" ><Button >back</Button> </Link>
                        </div>     
               </Alert>

            </div>
      );
};

export default Shiping;