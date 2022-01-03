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

              <table >
                   <tr>
                       <th style={{
                             display: 'flex' ,
                              justifyContent:'space-around',
                              textAlign: 'center',
                              marginTop:'30px',
                              marginLeft: '5%' ,
                              backgroundColor: '#e0dbdb',
                              width:'80%'
                               }}>   <p>PRODUCT</p>
                               <div style={{display: 'flex' , textAlign: 'center' , alignItems: 'center' }}>
                              <p style={{marginLeft:'5%'}}>PRICE  </p>
                              <p style={{marginLeft:'15%'}}>QUANTITY  </p>
                              <p style={{marginLeft:'15%'}}>TOTAL </p>
                               </div>
                       </th>
                      
                   </tr>
                   <tr>
                    <td>
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