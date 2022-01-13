import React , { useEffect } from 'react';
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
import { cartDetailAction } from '../redux/action/cartDetailAction';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import Button from 'react-bootstrap/Button';

import alarm from '../image/alarm.svg'
import favorite from '../image/favorite.svg'
import share from '../image/share.svg'
import seller from '../image/seller.png'
import warranty from '../image/warranty.png'
import price1 from '../image/price.jpg'


// Style
 import styles from './cartDetail.module.css'
import { width } from '@mui/system';

const CartDetail = () => {


    const params = useParams()
    const dispatch = useDispatch();
    const product = useSelector(state => state.cartDetailState.productData);

    useEffect(() => {
         dispatch(cartDetailAction(params.id)); 
    }, []);
    const state = useSelector( state=> state.cartState);
 
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
            <Link to="/shop" ><ArrowCircleRightTwoToneIcon fontSize='large' style={{display:'block' , right: 0}}/></Link>
              <div className={styles.logoImageProduct}>
              <div className={styles.logoAll}>
                <img src={favorite} alt='favorite' style={{cursor:'pointer'}} ></img>
                <br/>
                <img src={share} alt='share' style={{cursor:'pointer' }}></img>
                <br/>
                <img src={alarm} alt='alarm' style={{cursor:'pointer'}}></img>
              </div>
              <img className={styles.image} src={product.image} alt="product" />
              </div>
              <div className={styles.descriptionAll}>
                <p className={styles.name}>{product.name}</p>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.category}><span>Category:</span> {product.category}</p>
                <p className={styles.brand}><span>Brand:</span> {product.brand}</p>
                <p className={styles.countInStock}><span >Count In Stock: </span>{product.countInStock}</p>

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
               <span className={styles.price}>{product.price} $</span> 
                  <br/>
                  <br/>
                     { 
                         product.countInStock > 0  ?
                         quantityCount(state , product._id) && condition >= 1   ? 
                          condition< product.countInStock &&
                         <Button onClick={() => dispatch(increase(product)) } style={{backgroundColor : "#3f51b5" }}>+</Button> : 
                         <Button onClick={() => dispatch(addItem(product)) } className={styles.addToCart}  >Add to Cart</Button>  
                         :
                          <h4 className={styles.notCount} style={{
                            backgroundColor: "#3f51b5" ,
                            color:"white" ,
                            textAlign: "center" ,
                            borderRadius:'10px' }}>Out of stock</h4>
                   
                       
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
            </div>  
        </div>
    );
};

export default CartDetail;