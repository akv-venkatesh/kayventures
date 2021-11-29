var initialState = {
	pswvis: false,
}

const LoginReducer = (state=initialState, action)=> {

  switch (action.type) {
    case 'SET_PSW_ViS':
      return {
        ...state,
        pswvis: !state.pswvis
      };
    default:
      return state;
  }
}
export default LoginReducer;