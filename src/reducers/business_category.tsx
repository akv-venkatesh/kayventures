var initialState = {
	business_category: '',
  category:"",
  response: null,
  business_category_single: '',
  login_details:""
}

interface actiontype {
  type: string,
  payload?: any 
}

const BHomeReducer = (state=initialState, action:actiontype)=> {

  switch (action.type) {

    case 'GET_BUSINESS_CATEGORY':
    case 'SET_BUSINESS_CATEGORY':
    case 'LOGIN':
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
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        login_details: action.payload
      };
    default:
      return state;
  }
}
export default BHomeReducer;

