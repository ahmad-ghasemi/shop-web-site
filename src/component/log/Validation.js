
 const Validate = data => {

    const errors = {}
    
    if (data.name === ''){
          errors.name = "please enter name" 
    } else {
          delete errors.name
    }

    if (data.email === '') {
          errors.email = "please enter email"
    } else if (!/\S+@\S+\.\S+/.test(data.email)){
          errors.email = "Email Address is invalid"
    } else {
          delete errors.email
    }
     
    if (data.password === ''){
          errors.password = "please enter password"
    } else {
          delete errors.password
    }
    
    if (!data.confirmPassword) {
         errors.confirmPassword = "please enter confirm password"
    }else if(!(data.confirmPassword === data.password)){
          errors.confirmPassword = "please enter a valid confirm password"
    } else {
         delete errors.confirmPassword 
    }
    return errors
}
export default Validate ;