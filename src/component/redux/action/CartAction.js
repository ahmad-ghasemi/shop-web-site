const addItem = (data) => {
      return{
            type: "ADD_ITEM" , 
            payload : data
      }
}
const removeItem = (data) => {
      return{
            type: "REMOVE_ITEM" , 
            payload : data
      }
}
const increase = (data) => {
      return{
            type: "INCREASE" , 
            payload : data
      }
}
const decrease = (data) => {
      return{
            type: "DECREASE" , 
            payload : data
      }
}
const checkOut = () => {
      return{
            type: "CHECKOUT" 
      }
}
const deleteCart = () => {
      return{
            type: "DELETE_CART" 
      }
}
export {addItem , removeItem , increase , decrease , checkOut , deleteCart }