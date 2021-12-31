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
    
    console.log("password changed page");
    
    const loadData = action.payload.values;
    let passwordData = {
      "oldPassword": loadData.CurrentPassword,
      "newPassword": loadData.ConfirmPassword
    } 

    const token = action.payload.token;
    const headerParams = {
      'Authorization' : token
    };
 

    yield put(adminPasswordchangeSuccess("4"));     
  try {
    const response: AxiosResponse = yield call(
      apibaseURL.post,
      "/user-management/change-password",{passwordData}, { headers: headerParams } 
    );
    // yield put(adminPasswordchangeSuccess("4")); 
    console.log(response);
    switch (response.status) {
      case 200 :
        console.log(response.data)
    }
  } 
  catch (error) {
    const err = error as AxiosError
    console.log("Errors" ,err.response?.status);

    const errors = err.response?.status
    switch (errors) {
        case 401 :
          console.log("Error Text" ,err.response?.data.message);
          yield put(adminPasswordchangeSuccess(err.response?.data.message));  
      }
  }
}

function* adminPasswordchangeWatcher():Generator<StrictEffect> {
  yield takeEvery("ADMIN_PASSWORD_CHANGE", adminPasswordchange);
}

export default function* adminPasswordChangeSaga()  {
  yield all([adminPasswordchangeWatcher()]);
}
