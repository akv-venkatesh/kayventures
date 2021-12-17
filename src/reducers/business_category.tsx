var initialState = {
	business_category: '',
  category:"",
  response: null,
  business_category_single: '',
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
    default:
      return state;
  }
}
export default BHomeReducer;