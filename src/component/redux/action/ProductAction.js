import axios from 'axios'
const GetApiRequest = () => {
      return {
            type : "GET_API_REQUEST"
      }
}
const GetApiSuccses = (products) => {
      return {
            type : "GET_API_SUCCSES" ,
            payload : products
      }
}

const GetApiFailure = (error) => {
      return {
            type : "GET_API_FAILURE" ,
            payload : error
      }
}
const GetProducts = () => {
      return (dispatch) => {
            dispatch(GetApiRequest());
            axios.get('http://45.138.24.15:9000/api/products')
            .then(response=>{
                  const products = response.data
                  dispatch(GetApiSuccses(products))
            })
            .catch(error => {
                  const errorMsg = error.message
                dispatch(GetApiFailure(errorMsg))  
            })
      }
}
export default GetProducts;