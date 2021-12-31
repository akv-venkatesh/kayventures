import { takeEvery, all, call, put, takeLeading,StrictEffect } from "redux-saga/effects";
import {
  adminlogin,
  adminLoginSuccess,adminLoginFailed
} from "./login";

import { AxiosError, AxiosResponse } from "axios";
import apibaseURL from "../../api";

interface datatype {
  type: string;
  payload: any;
}

function* adminLogin(action:any) {
  try {
    const response: AxiosResponse = yield call(
      apibaseURL.post,
      "/user-management/authenticate",action.payload
    );
    switch (response.status) {
      case 200 :
        const data = response.data;
        console.log(response);
        yield put(adminLoginSuccess(data));
        break;
      case 400 :
        const err = response.data;
        yield put(adminLoginFailed(err));  

    }
  } 
  catch (error) {
    const err = error as AxiosError
    yield put(adminLoginSuccess(err.response));
  }
}

function* adminLoginWatcher():Generator<StrictEffect> {
  yield takeEvery("ADMIN_LOGIN", adminLogin);
}

export default function* adminLoginSaga()  {
  yield all([adminLoginWatcher()]);
}
