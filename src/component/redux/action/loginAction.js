import axios from "axios"

export const loginAction = (data) => (dispatch) => {
      const loginInfo = {
            "email": data.email ,
            "password": data.password ,
                   }
             dispatch({type:"GET_PROFILE_REQUEST"})
             axios.post('http://45.138.24.15:9000/api/users/login' , loginInfo)
             .then(response => dispatch({type: "GET_PROFILE_SUCCSESS" , payload: response.data}))
             .catch(error => dispatch({type:"GET_PROFILE_FAILURE" , payload: error.status}))
}

