import React, { useEffect } from 'react';
import Style from './shopCart.module.css'
import {  useDispatch, useSelector } from 'react-redux';
import {increase , decrease , removeItem } from '../redux/action/CartAction'



// image
// import imageIphone from '../image/iPhone.jpg'
// import imageCanon from '../image/Cannon.jpg'
// import imageLogitech from '../image/Logitech.jpg'
// import imageAirpods from '../image/Airpods.jpg'
// import imagePlaystation from '../image/Playstation.jpg'
// import imageAmazon from '../image/Amazon.png'
 import delet from '../image/delete.png'


// // image id
// const canon = "61af0ae4c971af479002de92";
// const iphone = "61af0ae4c971af479002de91";
// const airpod = "61af0ae4c971af479002de90";
// const playstation = "61af0ae4c971af479002de93";
// const logitech  = "61af0ae4c971af479002de94";
// const amazon = "61af0ae4c971af479002de95";



const CartShop = (props) => {
      const {data} = props
      
      const dispatch = useDispatch()
      const state = useSelector(state=> state.cartState.selectedItems)


       useEffect(()=>{

       },[state])
//       const ImageSelector =(image)=>{
//             switch (image) {
//             case canon:
//              return  imageCanon;    
//              case amazon:
//               return  imageAmazon;
//               case iphone:
//              return   imageIphone;
//              case playstation:
//              return   imagePlaystation;
//              case logitech:
//              return   imageLogitech;
//              case airpod:
//              return   imageAirpods;     
   
//             default:
//                   break;
// }
//       }
     
      return (
            <>
                
            <div className={Style.continer}>
                  <div className={Style.productDetail}>
                        <div>
                        <button onClick={() => dispatch(removeItem(data))}><img src={delet} alt='deleteIcon' style={{width: '20px'}}></img></button>
                        <img src={data.image} alt={data.name}/>
                        </div>
                   <div className={Style.actionDetails}>
                        <p>{data.name}</p>
                        <span style={{marginLeft:'5%'}}>${data.price}</span>
                        </div>
                   <div className={Style.button}>
                         {

                               
                        <button onClick={() => 
                                    data.count < data.countInStock &&  
                                    dispatch(increase(data)) } >+</button>
                         }
                        <p style={{fontWeight: 'bold'}}>{data.count}</p>
                            {   
                                    
                               <button onClick={() => 
                                    data.count > 1 &&  
                                    dispatch(decrease(data))} >-</button>
                            }
                   </div>
                   <span >${ (data.price * data.count).toFixed(2)} </span>
                    
                  </div>
                  
                  
                  
            </div>
            </>
      );
};

export default CartShop;