var initialState = {
	business_category: '',
  category:"",
  response: null,
}

interface actiontype {
  type: string,
  payload?: string 
}

const BHomeReducer = (state=initialState, action:actiontype)=> {
  console.log("reduxworking");

  switch (action.type) {

    case 'GET_BUSINESS_CATEGORY':
      console.log("working")
      return {
        ...state,
        category: action.payload
      };
    case 'SET_BUSINESS_CATEGORY':
      return {
        ...state,
        business_category: action.payload
      };
    case 'SET_BUSINESS_CATEGORY_SUCCESS':
      return {
        ...state,
        response: action.payload
      };
    default:
      return state;
  }
}
export default BHomeReducer;