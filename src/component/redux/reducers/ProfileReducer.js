const initialState = {
      data: {},
      loading: false,
      error: ""

}
const ProfileReducer = (state = initialState , action) => {
      switch (action.type) {
            case "GET_PROFILE_REQUEST":
                  return {...state , loading: true}
            case "GET_PROFILE_SUCCSESS":
                  return {loading: false , data: action.payload}
            case "GET_PROFILE_FAILURE":
                  return{...state , loading: false , error: action.payload }
            default:
                 return state 
      }
       
};

export default ProfileReducer;