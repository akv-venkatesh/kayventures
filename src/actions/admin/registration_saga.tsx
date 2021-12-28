import { takeEvery, all, call, put, takeLeading,StrictEffect } from "redux-saga/effects";
import {
  register,
  registerSuccess,
} from "./registration";
import { AxiosResponse } from "axios";
import apibaseURL from "../../api";

interface datatype {
  type: string;
  payload: any;
}

function* adminRegister(action:any) {
  try {
    const response: AxiosResponse = yield call(
      apibaseURL.post,
      "/user-management/sign-up-kay-employee",action.payload
    );
    switch (response.status) {
      case 200:
        const data:datatype = response.data.data;
        console.log(response);
       yield put(registerSuccess(data));
    }
  } 
  catch (error) {
    const data = "failed";
    yield put(registerSuccess(data));
  }
}

function* adminRegisterWatcher():Generator<StrictEffect> {
  yield takeEvery("REGISTER", adminRegister);
}

export default function* adminRegisterSaga()  {
  yield all([adminRegisterWatcher()]);
}
