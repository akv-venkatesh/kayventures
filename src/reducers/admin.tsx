var initialState = {
  admin_details: "",
  password_change_status: '',
  editprofile_status: ''
}

interface actiontype {
  type: string,
  payload?: any
}

const adminReducer = (state = initialState, action: actiontype) => {

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
      return {
        ...state,
      }
    // admin  login
    case 'ADMIN_LOGIN':
      return state;

    case 'ADMIN_LOGIN_SUCCESS':
      console.log(action.payload);
      return {
        ...state,
        admin_details: action.payload
      };

    case 'ADMIN_LOGIN_FAILED':
      console.log(action.payload);
      return {
        ...state,
        admin_details: action.payload
      }

    // edit password change
    case 'ADMIN_PASSWORD_CHANGE':
      return state;

    case 'ADMIN_PASSWORD_CHANGE_SUCCESS':
      console.log(action.payload);
      return {
        ...state,
        password_change_status: action.payload
      };

    case 'ADMIN_PASSWORD_CHANGE_FAILED':
      // console.log(action.payload);
      return {
        ...state,
        password_change_status: action.payload
      }


    // edit profile
    case 'ADMIN_EDIT_PROFILE':
      return state;

    case 'ADMIN_EDIT_PROFILE_SUCCESS':
      console.log(action.payload);
      return {
        ...state,
        editprofile_status: action.payload
      };

    case 'ADMIN_EDIT_PROFILE_FAILED':
      // console.log(action.payload);
      return {
        ...state,
        editprofile_status: action.payload
      }

    default:
      return state;
  }
}
export default adminReducer;

