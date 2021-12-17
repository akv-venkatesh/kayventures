var initialState = {
	business_category: '',
  response: null,
}

interface actiontype {
  type: string,
  payload?: string 
}

const BHomeReducer = (state=initialState, action:actiontype)=> {

  switch (action.type) {
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