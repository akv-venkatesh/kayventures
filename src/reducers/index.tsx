import { combineReducers } from 'redux';
import BusinessCategory from './business_category' ;
  
const rootReducer = combineReducers({
	businesscategory : BusinessCategory,
})

export default rootReducer; 