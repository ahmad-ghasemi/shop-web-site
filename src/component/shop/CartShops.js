import React, { useEffect, useState } from 'react';
import { useSelector  } from 'react-redux';
import CartShop from './CartShop';
import Style from './cartshops.module.css'
import { Link } from 'react-router-dom';

const CartShops = () => {
      const [state , setState] = useState(useSelector(state => state.cartState))
      const {token} = useSelector(state => state.profileState.data)
 
      useEffect(()=>{
            if(state.total){
             localStorage.setItem("cartState", JSON.stringify(state)) 
            }
      } , [state])
      useEffect(()=>{
            if(!state.total){
                  setState(JSON.parse(localStorage.getItem("cartState")) ) 
            }
      },[])
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
                           
                      </div>

                </div>  
            
              
                
      );
};

export default CartShops;