import { takeEvery, all, call, put, takeLeading,StrictEffect } from "redux-saga/effects";
import {
  login,
  loginSuccess,
} from "./login";
import { AxiosResponse } from "axios";
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
      case 200:
        const data:datatype = response.data.data;
        console.log(response);
       yield put(loginSuccess(data));
    }
  } 
  catch (error) {
    const data = "failed";
    yield put(loginSuccess(data));
  }
}

function* userLoginWatcher():Generator<StrictEffect> {
  yield takeEvery("LOGIN", userLogin);
}

export default function* loginSaga()  {
  yield all([userLoginWatcher()]);
}
