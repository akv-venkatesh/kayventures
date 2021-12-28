import { combineReducers } from 'redux';
import BusinessCategory from './business_category' ;
import admin from './admin' ;
  
const rootReducer = combineReducers({
	businesscategory : BusinessCategory,
	admin: admin,
})

export default rootReducer; 