import React from 'react';
import Style from './shopCart.module.css'
import { useSelector , useDispatch } from 'react-redux';
import {increase , decrease , removeItem } from '../redux/action/CartAction'



// image
import imageIphone from '../image/iPhone.jpg'
import imageCanon from '../image/Cannon.jpg'
import imageLogitech from '../image/Logitech.jpg'
import imageAirpods from '../image/Airpods.jpg'
import imagePlaystation from '../image/Playstation.jpg'
import imageAmazon from '../image/Amazon.png'



// image id
const canon = "61af0ae4c971af479002de92";
const iphone = "61af0ae4c971af479002de91";
const airpod = "61af0ae4c971af479002de90";
const playstation = "61af0ae4c971af479002de93";
const logitech  = "61af0ae4c971af479002de94";
const amazon = "61af0ae4c971af479002de95";



const CartShop = (props) => {
      const {data} = props
      
      const state = useSelector(state => state.cartState)
      const dispatch = useDispatch()
      
      const quantityCount = (state, _id) => {
            const index = state.selectedItems.findIndex(item => item._id === _id);
            if (index === -1) {
                return false
            } else {
                
                return  state.selectedItems[index].count;
            }
        }
      const ImageSelector =(image)=>{
            switch (image) {
            case canon:
             return  imageCanon;    
             case amazon:
              return  imageAmazon;
              case iphone:
             return   imageIphone;
             case playstation:
             return   imagePlaystation;
             case logitech:
             return   imageLogitech;
             case airpod:
             return   imageAirpods;     
   
            default:
                  break;
}
      }
     
      return (
            <div className={Style.continer}>
                  <div className={Style.productDetail}>
                        <img src={ImageSelector(data._id)} alt={data.name}/>
                   <div>
                   <p>{data.name}</p>
                   <span>{data.price} $</span>
                   </div>
                   <button onClick={() => dispatch(increase(data)) } >+</button>
                   <h4>{data.count}</h4>
                   
                          {
                              quantityCount(state , data._id) === 1 &&
                              <button onClick={() => dispatch(removeItem(data))}><i className="icon-trash"></i></button>
                            }
                            {
                               quantityCount(state , data._id) > 1 &&
                              <button onClick={() => dispatch(decrease(data))} >-</button>
              
                            }
                  
                    
                  </div>
                  
                  
            </div>
      );
};

export default CartShop;