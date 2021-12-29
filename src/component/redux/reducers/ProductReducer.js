const initialState = {
      loading : false ,
      products : [] ,
      error : ""
}

const ProductsReducer = (state = initialState , action ) =>{
      switch (action.type) {
            case "GET_API_REQUEST":
                  return {
                        ...state , 
                        loading : true
                  }

            case "GET_API_SUCCSES":
                  return {
                        loading : false , 
                        products : action.payload
                  }

            case "GET_API_FAILURE":
                  return{
                     loading : false ,
                     error : action.payload   
                  }
                  
                  
      
            default:
                  return state
      }

}
export default ProductsReducer;