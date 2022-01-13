import axios from "axios"

export const signUpAction = (name , email , password) => (dispatch) => {
      const data = {
            "name": name ,
            "email": email ,
            "password": password ,
                   }
             dispatch({type:"GET_PROFILE_REQUEST"})
             axios.post('http://45.138.24.15:9000/api/users' , data)
             .then(response => dispatch({type: "GET_PROFILE_SUCCSESS" , payload: response.data}))
             .catch(error => dispatch({type:"GET_PROFILE_FAILURE" , payload: error}))
}
