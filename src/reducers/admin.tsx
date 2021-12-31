var initialState = {
  admin_details: "",
}

interface actiontype {
  type: string,
  payload?: any 
}

const adminReducer = (state=initialState, action:actiontype)=> {

  switch (action.type) {

    case 'REGISTER':
   
    case 'REGISTER_SUCCESS':
      console.log('success')
      return {
        ...state,
      };
    case 'INVITE':
    case 'INVITESUCCESS':
      console.log('invited');
      return{
        ...state,
      }
    case 'ADMIN_LOGIN':
        return state;
      
      case 'ADMIN_LOGIN_SUCCESS':
        console.log(action.payload);
        return {
          ...state,
          admin_details: action.payload
        };
      
      case 'ADMIN_LOGIN_FAILED':
        console.log(action.payload);
        return{
          ...state,
          admin_details: action.payload
        }
    default:
      return state;
  }
}
export default adminReducer;

