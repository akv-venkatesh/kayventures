import { takeEvery, all, call, put, takeLeading,StrictEffect } from "redux-saga/effects";
import {
    adminEditProfileSuccess,adminEditProfileailed
} from "./editprofile"
import { AxiosError, AxiosResponse } from "axios";
import apibaseURL from "../../api";

interface datatype {
  type: string;
  payload: any;
}

function* adminEditProfile(action:any) {
    
    console.log("password changed page");
    console.log(action);

    yield put(adminEditProfileSuccess("4"));     
  try {
    const response: AxiosResponse = yield call(
      apibaseURL.post,
      "/user-management/authenticate",{}
    );
    // yield put(adminEditProfileSuccess("4")); 
    switch (response.status) {
    //   case 200 :
    //     const data = response.data;
    //     console.log(response);
    //     yield put(adminEditProfileSuccess(data));
    //     break;
    //   case 400 :
    //     const err = response.data;
    //     yield put(adminEditProfileailed(4));  

    }
  } 
  catch (error) {
    const err = error as AxiosError
    // yield put(adminLoginSuccess(err.response));
  }
}

function* adminEditProfileWatcher():Generator<StrictEffect> {
  yield takeEvery("ADMIN_EDIT_PROFILE", adminEditProfile);
}

export default function* adminEditProfileSaga()  {
  yield all([adminEditProfileWatcher()]);
}
