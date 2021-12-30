import { takeEvery, all, call, put, takeLeading,StrictEffect } from "redux-saga/effects";
import {
  login,
  loginSuccess,
  loginFailed
} from "./login";
import { AxiosError, AxiosResponse } from "axios";
import apibaseURL from "../../api";

interface datatype {
  type: string;
  payload: any;
}

// postUserLogin
function* userLogin(action:any) {
  try {
    const response: AxiosResponse = yield call(
      apibaseURL.post,
      "/user-management/authenticate",action.payload
    );
    switch (response.status) {
      case 200 :
        const data = response.data;
        console.log(response);
        yield put(loginSuccess(data));
        break;
      case 400 :
        const err = response.data;
        yield put(loginFailed(err));
    }
  } 
  catch (error) {
    const err = error as AxiosError
    yield put(loginSuccess(err.response));
  }
}

function* userLoginWatcher():Generator<StrictEffect> {
  yield takeEvery("LOGIN", userLogin);
}

export default function* loginSaga()  {
  yield all([userLoginWatcher()]);
}
