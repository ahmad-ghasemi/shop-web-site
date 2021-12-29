import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import CartShop from './CartShop';
import { deleteCart } from '../redux/action/CartAction'
import Style from './cartshops.module.css'
import { Link } from 'react-router-dom';

const CartShops = () => {
      const state = useSelector(state => state.cartState);
      const {token} = useSelector(state => state.profileState.data)
      const dispatch = useDispatch();
      
      console.log(state)
      return (
      
                <div className={Style.main} >
                      <div className={Style.checkOutBox}>
                            <div className={Style.continer}>
                            <span>Items Counter : <p>{state.itemsCounter}</p></span>
                            <span>Sum Price : <p>{state.total} $</p></span>

                            </div>
                            {
                                  token ?
                                  <Link to="/checkout"><button style={{color: "red"}}>Continue</button></Link> 
                                   :
                                   <Link to="/login"><button style={{color: "red"}}>Continue</button></Link> 

                            }
                                 
                            <button onClick={()=> dispatch(deleteCart())}>Delete Cart</button>
                      </div>
                      <div>

                      {
                            state.selectedItems.map(item => 
                                  <CartShop key={item._id} data={item} /> 
                             ) 

                      }
                      </div>

                </div>  
            
      );
};

export default CartShops;