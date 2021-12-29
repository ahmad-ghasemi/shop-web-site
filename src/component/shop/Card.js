import React from 'react'
import { Link , Outlet } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import {
       addItem ,
       removeItem ,
       increase ,
       decrease ,
        } 
      from '../redux/action/CartAction'
import Button from 'react-bootstrap/Button';


// image
 import imageIphone from '../image/iPhone.jpg'
 import imageCanon from '../image/Cannon.jpg'
 import imageLogitech from '../image/Logitech.jpg'
 import imageAirpods from '../image/Airpods.jpg'
 import imagePlaystation from '../image/Playstation.jpg'
 import imageAmazon from '../image/Amazon.png'
 import Style from './card.module.css'


 // image id
 const canon = "61af0ae4c971af479002de92";
 const iphone = "61af0ae4c971af479002de91";
 const airpod = "61af0ae4c971af479002de90";
 const playstation = "61af0ae4c971af479002de93";
 const logitech  = "61af0ae4c971af479002de94";
 const amazon = "61af0ae4c971af479002de95";



const Card = (props) => {
    const {image ,  data } = props;

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
    const state = useSelector( state=> state.cartState);
    const dispatch = useDispatch();
 
      var condition = 0;    
    const quantityCount = (state, _id) => {
            const index = state.selectedItems.findIndex(item => item._id === _id);
            if (index === -1) {
                return false
            } else {
                condition = state.selectedItems[index].count;
                return  state.selectedItems[index].count;
            }
        }
        
      return (
            <div className={Style.cardContiner}>
            
                
                <Link to={`/shop/${+(data._id.slice(23))}`} ><img className={Style.product} src={ImageSelector(image)} alt="cat"/>
                <h1>{data.name}</h1>
                 </Link>
                <div className={Style.action}>
                
                <p className={Style.price}>{data.price} $</p>
                <div className={Style.btn}>
                {
                   quantityCount(state , data._id) && condition >= 1 ? 
                <Button onClick={() => dispatch(increase(data)) } >+</Button> :
                <Button onClick={() => dispatch(addItem(data)) } variant='success' >add to cart</Button> 
                
              }
              
            {  quantityCount(state, data._id) && <Button className={Style.Buttun}>{condition}</Button>}
             
             
              {
                quantityCount(state , data._id) === 1 &&
                <Button onClick={() => dispatch(removeItem(data))}><i className="icon-trash"></i></Button>
              }
              {
                 quantityCount(state , data._id) > 1 &&
                <Button onClick={() => dispatch(decrease(data))} >-</Button>

              }
                </div>
              
                </div>
                <Outlet/>
               
            
            </div>
      )

      }
export default Card ;

