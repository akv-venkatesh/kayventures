import { all, fork } from 'redux-saga/effects';
import postsSaga from '../actions/business_category/business_category_saga';
import loginSaga from '../actions/login/login_saga';
import adminregistersaga from '../actions/admin/registration_saga';
import adminloginsaga from '../actions/admin/login_saga';
import adminInvite from '../actions/admin/invite_saga';

export default function* () {
  
  yield all([
    loginSaga(),
    postsSaga(),
    adminregistersaga(),
    adminloginsaga(),
    adminInvite(),
  ]);
  
}