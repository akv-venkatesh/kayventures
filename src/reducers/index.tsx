import { combineReducers } from 'redux';
import BusinessCategory from './business_category' ;
import admin from './admin' ;
import login from './login';
  
const rootReducer = combineReducers({
	businesscategory : BusinessCategory,
	admin: admin,
	login:login,
})

export default rootReducer; 