var initialState = {
	toggle: false,
}

const HomeReducer = (state=initialState, action)=> {

  switch (action.type) {
    case 'SET_HEADER_TYPE':
      return {
        ...state,
        toggle: !state.toggle
      };
    default:
      return state;
  }
}
export default HomeReducer;