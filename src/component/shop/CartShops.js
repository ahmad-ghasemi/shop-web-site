import React from 'react';
import { useSelector  } from 'react-redux';
import CartShop from './CartShop';
import Style from './cartshops.module.css'
import { Link } from 'react-router-dom';

const CartShops = () => {
      const state = useSelector(state => state.cartState);
      const {token} = useSelector(state => state.profileState.data)
      
      console.log(state)
      return (
             
              <div className={Style.main} >
                    <div>
                        <p className={Style.boxHeader}> 
                              <p>PRODUCT</p>
                              <span style={{marginLeft:'25%'}}>PRICE  </span>
                              <span style={{marginLeft:'2%'}}>QUANTITY  </span>
                              <span style={{marginLeft:'2%'}}>TOTAL </span>
                              
                       </p>
                      
                       <table >
                   <tr>
                    <td className={Style.cart}>
                     {state.selectedItems.map(item =><CartShop key={item._id} data={item}/> )}
                    </td>
                 
                   </tr>
                   </table>
                    </div>
                        {/* <div >
                        <p>PRODUCT</p>
                        <div className={Style.titrDetails}>
                           <p>PRICE</p>  
                           <p>QUANTITY</p>  
                           <p>TOTAL</p>  
                        </div>

                  </div> */}
             
                      <div className={Style.checkOutBox}>
                            <p>Cart Totals</p>
                            <div className={Style.continer}>
                            <p>Items Counter : <span>{state.itemsCounter}</span></p>
                            <p>Shipping : <span> 0  $ </span></p>
                            <p>Sum Price : <span>{state.total} $</span></p>

                            </div>
                            {
                                  token ?
                                  <Link to="/checkout"><h4 className={Style.ContinueButton}>Continue</h4><br style={{backgroundColor:"white"}}/></Link> 
                                   :
                                   <Link to="/login"><h4 className={Style.ContinueButton}>Continue</h4></Link> 

                            }
                                 
                            {/* <button onClick={()=> dispatch(deleteCart())}>Delete Cart</button> */}
                      </div>

                </div>  
            
              
                
      );
};

export default CartShops;