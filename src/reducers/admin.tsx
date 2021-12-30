var initialState = {
	
}

interface actiontype {
  type: string,
  payload?: any 
}

const adminReducer = (state=initialState, action:actiontype)=> {

  switch (action.type) {

    case 'REGISTER':
    case 'REGISTER_SUCCESS':
      console.log('success')
      return {
        ...state,
      };
    case 'INVITE':
    case 'INVITESUCCESS':
      console.log('invited');
      return{
        ...state,
      }
    default:
      return state;
  }
}
export default adminReducer;

