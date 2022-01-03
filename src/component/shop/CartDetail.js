import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useSelector , useDispatch } from 'react-redux'
import {
       addItem ,
       removeItem ,
       increase ,
       decrease ,
        } 
      from '../redux/action/CartAction'
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import Button from 'react-bootstrap/Button';
import imageIphone from '../image/iPhone.jpg' 
import imageCanon from '../image/Cannon.jpg'
import imageLogitech from '../image/Logitech.jpg'
import imageAirpods from '../image/Airpods.jpg'
import imagePlaystation from '../image/Playstation.jpg'
import imageAmazon from '../image/Amazon.png'
import alarm from '../image/alarm.svg'
import favorite from '../image/favorite.svg'
import share from '../image/share.svg'
import seller from '../image/seller.png'
import warranty from '../image/warranty.png'
import price1 from '../image/price.jpg'


// Style
import styles from './cartDetail.module.css'
 const  canon   = "61af0ae4c971af479002de92";
 const iphone = "61af0ae4c971af479002de91";
 const airpod = "61af0ae4c971af479002de90";
 const playstation = "61af0ae4c971af479002de93";
 const logitech  = "61af0ae4c971af479002de94";
 const amazon = "61af0ae4c971af479002de95";
const CartDetail = (props) => {


    const params = useParams()
    const id = params.id
    const data = useSelector(state => state.productState.products);
    console.log(data)
    const product = data[id];
    console.log(product)
     const {  description, price, category} = product;
     const state = useSelector( state=> state.cartState);
     const dispatch = useDispatch();
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
   var condition=0;
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
          <div className={styles.container}>
            <div className={styles.textContainer}>
              <div className={styles.logoAll}>
                <img src={favorite} alt='favorite' style={{cursor:'pointer'}} ></img>
                <br/>
                <img src={share} alt='share' style={{cursor:'pointer' }}></img>
                <br/>
                <img src={alarm} alt='alarm' style={{cursor:'pointer'}}></img>
              </div>
              <img className={styles.image} src={ImageSelector(product._id)} alt="product" />
              <div className={styles.descriptionAll}>
                <p className={styles.name}>{product.name}</p>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category:</span> {category}</p>
                <p className={styles.brand}><span>Brand:</span> {product.brand}</p>
                <p  className={styles.countInStock}><span >Count In Stock: </span>{product.countInStock}</p>

              </div>
                <div className={styles.buttonContainer}>
                  <div style={{display:'flex'}}>
                  <img src={seller} alt='seller' style={{width:'25px' , height:'25px' ,marginBottom:'5px' }}/>  
                  <p style={{margin:'5px' }}>Seller: {product.brand} Company</p>
                  </div>
                  <div style={{display:'flex' , textAlign:'center' }}>
                  <img src={warranty} alt='warranty' style={{width:'30px' ,marginBottom:'5px' }}/>
                  <p style={{margin:'5px' }}>18-month Warranty</p>
                  </div>
                  <div style={{display:'flex'}}>
                  <img src={price1} alt='price' style={{width:'30px'  , marginBottom:'5px' }}/>
                  <p style={{margin:'5px' }}>Seller Price </p>
                  </div> 
               <span className={styles.price}>{price} $</span> 
                  <br/>
                  <br/>
                     {
                       quantityCount(state , product._id) && condition >= 1 ? 
                       <Button onClick={() => dispatch(increase(product)) } style={{backgroundColor : "#3f51b5" , marginLeft: '25px'}}>+</Button> : 
                       <Button onClick={() => dispatch(addItem(product)) } style={{ backgroundColor : "#3f51b5" ,  margin: "5px 5px 5px 15px" , width:'200px'}} >Add to Cart</Button>  
                       
                      } 
          
            {  quantityCount(state, product._id) && <Button  style={{backgroundColor : "#3f51b5"}} >{condition}</Button>}
             
             
              {
                quantityCount(state , product._id) === 1 &&
                <Button onClick={() => dispatch(removeItem(product))} style={{backgroundColor : "#B43C4C"}}  ><i className="icon-trash"></i></Button>
              }
              {
                quantityCount(state , product._id) > 1 &&
                <Button onClick={() => dispatch(decrease(product))} style={{backgroundColor : "#3f51b5"}} >-</Button>
                
              }
                </div>
            <Link to="/shop" ><ArrowCircleRightTwoToneIcon fontSize='large' style={{marginBottom:'350px'}}/></Link>
            </div>  
        </div>
    );
};

export default CartDetail;