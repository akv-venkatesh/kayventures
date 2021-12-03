import { combineReducers } from 'redux';
import HomeReducer from './homepage_reducer' ;
import LoginReducer from './login_reducer' ;
import MHomeReducer from './m_home_reducer' ;
import BHomeReducer from './buyer_reducer' ;
import BusinessCategory from './business_category' ;
  
const rootReducer = combineReducers({
	homepage : HomeReducer,
	loginpage : LoginReducer,
	mhomepage : MHomeReducer,
	bhomepage : BHomeReducer,
	businesscategory : BusinessCategory,
})

export default rootReducer; 