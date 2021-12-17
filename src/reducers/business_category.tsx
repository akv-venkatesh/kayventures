var initialState = {
	business_category: '',
  category:"",
  response: null,
  business_category_single: '',
  loginDetails:""
}

interface actiontype {
  type: string,
  payload?: string 
}

const BHomeReducer = (state=initialState, action:actiontype)=> {
  console.log("reduxworking");

  switch (action.type) {

    case 'GET_BUSINESS_CATEGORY':
    case 'SET_BUSINESS_CATEGORY':
      case 'POST_LOGIN':
    case 'SET_BUSINESS_CATEGORY_SUCCESS':
      return {
        ...state,
        business_category_single: action.payload
      };
    case 'GET_BUSINESS_CATEGORY_SUCCESS':
      return {
        ...state,
        business_category: action.payload
      };

      case 'POST_LOGIN_SUCCESS':
        return {
          ...state,
          loginDetails: action.payload
        };
    default:
      return state;
  }
}
export default BHomeReducer;

