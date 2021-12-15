var initialState = {
	business_category: '',
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
    default:
      return state;
  }
}
export default BHomeReducer;