const initialState = {
      data: {},
      loading: false,
      error: ""

}
const CheckOutReducer = (state = initialState , action) => {
      switch (action.type) {
            case "GET_CHECKOUT_REQUEST":
                  return {...state , loading: true}
            case "GET_CHECKOUT_SUCCSESS":
                  return {loading: false , data: action.payload}
            case "GET_CHECKOUT_FAILURE":
                  return{...state , loading: false , error: action.payload }
            case "GET_CHECKOUT_CLEAR":
                        return { loading: false, data: {}, error: "" };
            default:
                 return state 
      }
       
};

export default CheckOutReducer;