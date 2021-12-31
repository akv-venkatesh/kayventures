import { takeEvery, all, call, put, takeLeading,StrictEffect } from "redux-saga/effects";
import {
    adminPasswordchangeSuccess,
    adminPasswordchangeFailed
} from "./passwordchange"

import { AxiosError, AxiosResponse } from "axios";
import apibaseURL from "../../api";

interface datatype {
  type: string;
  payload: any;
}

function* adminPasswordchange(action:any) {
    
    // console.log("password changed page");
    // console.log(action);

    yield put(adminPasswordchangeSuccess("4"));     
  try {
    const response: AxiosResponse = yield call(
      apibaseURL.post,
      "/user-management/authenticate",{}
    );
    // yield put(adminPasswordchangeSuccess("4")); 
    switch (response.status) {
    //   case 200 :
    //     const data = response.data;
    //     console.log(response);
    //     yield put(adminPasswordchangeSuccess(data));
    //     break;
    //   case 400 :
    //     const err = response.data;
    //     yield put(adminPasswordchangeSuccess(4));  

    }
  } 
  catch (error) {
    const err = error as AxiosError
    // yield put(adminLoginSuccess(err.response));
  }
}

function* adminPasswordchangeWatcher():Generator<StrictEffect> {
  yield takeEvery("ADMIN_PASSWORD_CHANGE", adminPasswordchange);
}

export default function* adminPasswordChangeSaga()  {
  yield all([adminPasswordchangeWatcher()]);
}
