import axios from "axios"

export const ChangeProfileAction = (dataChange , token) => (dispatch) => {
      const data = {
            "name": dataChange.name ,
            "password": dataChange.password ,
                   }
             dispatch({type:"GET_PROFILE_REQUEST"})
             axios.put('http://45.138.24.15:9000/api/users/profile' ,  data , { headers: {
                  'Content-Type': 'application/json',
                   Authorization: `Bearer ${token}`,
                  } 
            })
             .then(response => dispatch({type: "GET_PROFILE_SUCCSESS" , payload: response.data}))
             .catch(error => dispatch({type:"GET_PROFILE_FAILURE" , payload: error.status}))
}
export const deletProfileAction = () => (dispatch) => {
             return {
                   type:"PROFILE_DELETE" 
             }
}