import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import imageIphone from '../image/iPhone.jpg' 
import imageCanon from '../image/Cannon.jpg'
import imageLogitech from '../image/Logitech.jpg'
import imageAirpods from '../image/Airpods.jpg'
import imagePlaystation from '../image/Playstation.jpg'
import imageAmazon from '../image/Amazon.png'

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
          <div className={styles.container}>
              <img className={styles.image} src={ImageSelector(product._id)} alt="product" />
            <div className={styles.textContainer}>
                <p className={styles.name}>{product.name}</p>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category:</span> {category}</p>
                <p className={styles.brand}><span>Brand:</span> {product.brand}</p>
                <p  className={styles.countInStock}><span >Count In Stock: </span>{product.countInStock}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <br/>
                    <br/>
                    <Link to="/shop">Back to Shop</Link>
                </div>
            </div>  
        </div>
    );
};

export default CartDetail;