import React , { useEffect  } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import  Card  from './shop/Card.js';
import style from '../component/shop/shop.module.css';
import Loading from './services/loading';
import GetProducts from '../component/redux/action/ProductAction'
import Footer from './home/Footer';


const Shop = () => {
      const dispatch = useDispatch();
      const productState = useSelector(state => state.productState);

      useEffect(()=>{
            if (!productState.products.length) 
            {
                  dispatch(GetProducts())
            }

               }, []);

       return (
             <>
             {
                   productState.loading ?
                     <Loading/>  :
                    productState.error   ?
                    <h2>Erorr somting wrong</h2> :
                    <div className={style.continer}>    
                          {productState.products.map((data , index ) => 
                          <Card image={data.image} name={data.name}  key={index} data={data} /> )}   
                     </div>
                           

             }
             
             <Footer/>
             </>
          
       )
}

export default Shop
