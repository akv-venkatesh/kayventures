import { all, fork } from 'redux-saga/effects';
import postsSaga from '../actions/business_category/business_category_saga';
import loginSaga from '../actions/login/login_saga';

export default function* () {
  
  yield all([
    loginSaga(),
    postsSaga()
  ]);
  
}