var initialState = {
	business_category: '',
}

const BHomeReducer = (state=initialState, action)=> {

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