import { combineReducers } from 'redux';
import BusinessCategory from './business_category' ;
import login from './login';
  
const rootReducer = combineReducers({
	businesscategory : BusinessCategory,
	
	login:login,
})

export default rootReducer; 