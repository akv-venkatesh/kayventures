import { combineReducers } from 'redux';
import HomeReducer from './homepage_reducer' ;
import LoginReducer from './login_reducer' ;
import MHomeReducer from './m_home_reducer' ;
import BHomeReducer from './buyer_reducer' ;
  
const rootReducer = combineReducers({
	homepage : HomeReducer,
	loginpage : LoginReducer,
	mhomepage : MHomeReducer,
	bhomepage : BHomeReducer,
})

export default rootReducer; 