var initialState = {
  business_category: '',
  category: "",
  response: null,
  business_category_single: '',
  primary_details_status: false,
  Types: []
}

interface actiontype {
  type: string,
  payload?: any
}

const BHomeReducer = (state = initialState, action: actiontype) => {

  switch (action.type) {

    case 'GET_BUSINESS_CATEGORY':
    case 'SET_PRIMARY_DETAILS':
    case 'SET_BUSINESS_CATEGORY':
      return {
        ...state,
        business_category_single: action.payload,

      };
    case 'GET_BUSINESS_CATEGORY_SUCCESS':
      return {
        ...state,
        business_category: action.payload
      };
    case 'SET_PRIMARY_DETAILS_SUCCESS':
      return {
        ...state,
        primary_details_status: action.payload
      };
    case 'TYPES':
      console.log(action.payload);
      return {
        ...state,
        Types: action.payload
      };

    default:
      return state;
  }
}
export default BHomeReducer;

