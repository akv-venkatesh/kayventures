import { takeEvery, all, call, put, takeLeading,StrictEffect } from "redux-saga/effects";
import {
  adminlogin,
  adminLoginSuccess,
} from "./login";
import { AxiosResponse } from "axios";
import apibaseURL from "../../api";

interface datatype {
  type: string;
  payload: any;
}

function* adminLogin(action:any) {
  try {
    const response: AxiosResponse = yield call(
      apibaseURL.post,
      "/user-management/sign-in",action.payload
    );
    switch (response.status) {
      case 200:
        const data:datatype = response.data.data;
        console.log(response);
       yield put(adminLoginSuccess(data));
    }
  } 
  catch (error) {
    const data = "failed";
    yield put(adminLoginSuccess(data));
  }
}

function* adminLoginWatcher():Generator<StrictEffect> {
  yield takeEvery("ADMIN_LOGIN", adminLogin);
}

export default function* adminLoginSaga()  {
  yield all([adminLoginWatcher()]);
}
