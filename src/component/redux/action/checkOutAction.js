import axios from "axios"
import { orderItemsCreator } from '../../helper/function'
export const checkOutAction = (cartState , shipingInfo  ) => (dispatch , getState) => {
      const ordersData = {
            orderItems: orderItemsCreator(cartState.selectedItems),
            shippingAddress: shipingInfo,
            paymentMethod: "online",
            itemsPrice: cartState.total,
            shippingPrice: "0.00",
            totalPrice: cartState.total,
          };
             
             dispatch({type:"GET_CHECKOUT_REQUEST"})
                axios.post('http://45.138.24.15:9000/api/orders' , ordersData ,{
                  headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${getState().profileState.data.token}`,
                      }
             } )
             .then(response => {dispatch({type: "GET_CHECKOUT_SUCCSESS" , payload: response.data}) ; console.log(response.data)})               
             .catch(error => dispatch({type:"GET_CHECKOUT_FAILURE" , payload: error.status}))
             


      }