var initialState = {
    login_details: "",
  }
  
  interface actiontype {
    type: string,
    payload?: any
  }
  
  const LoginReducer = (state = initialState, action: actiontype) => {
  
    switch (action.type) {

      case 'LOGIN':
        return state;
      
      case 'LOGIN_SUCCESS':
        console.log(action.payload);
        return {
          ...state,
          login_details: action.payload
        };
      
      case 'LOGIN_FAILED':
        console.log(action.payload);
        return{
          ...state,
          login_details: action.payload
        }
  
      default:
        return state;
    }
  }
  export default LoginReducer;
  
  