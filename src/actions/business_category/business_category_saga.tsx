import { takeEvery, all, call, put, takeLeading,StrictEffect } from "redux-saga/effects";
import {
  setBusinessCategory,
  setBusinessCategorySuccess,
  getBusinessCategory,
  getBusinessCategorySuccess,
} from "./business_category";
import { AxiosResponse } from "axios";
import apibaseURL from "../../api";

interface datatype {
  type: string;
  payload: string;
}

// get category
function* getCategory() {
  try {
    const response: AxiosResponse = yield call(
      apibaseURL.get,
      "/user-management/business-group/all"
    );
    console.log(response);
    switch (response.status) {
      case 200:
        const data:datatype = response.data.data.businessGroups;
        // console.log("get category"+data);
        // const data:datatype ={
        //   type:"GET_BUSINESS_CATEGORY_SUCCESS",
        //   payload:response.data.data.businessGroups
        // }
        yield put(getBusinessCategorySuccess(data));
        // yield put(data);

    }
  }
  catch (error) {
    const data = "failed";
    console.log("api error")
    
    yield put(setBusinessCategorySuccess(data));
  }
}

// get type with id
function* setCategory(action:any) {
  try {
    const response: AxiosResponse = yield call(
      apibaseURL.get,
      ("/user-management/business-group-types/"+action.payload)
    );
    switch (response.status) {
      case 200:
        const data:datatype = response.data.data;
        console.log("get type"+data);
        // const data:datatype ={
        //   type:"SET_BUSINESS_CATEGORY_SUCCESS",
        //   payload:response.data.data
        // }

        yield put(setBusinessCategorySuccess(data));
        // yield put(data);
        
    }
  } catch (error) {
    const data = "failed";
    yield put(setBusinessCategorySuccess(data));
  }
}

// postUserLogin
function* postUserLogin(action:any) {
  const loginDetails={
    action
  }
  try {
    const response: AxiosResponse = yield call(
      apibaseURL.post,
      "/user-management/authenticate",{
        "email": "bharath@emproto.com",
        "password": "@1EmprotoTech007"
      }
    );
    switch (response.status) {
      case 200:
        // const data:datatype = response.data.data;
        console.log(response);
       // yield put(POST_LOGIN_SUCCESS(data));
       
        
    }
  } catch (error) {
    const data = "failed";
    // yield put(POST_LOGIN_SUCCESS(data));
  }
}



function* setCategoryWatcher():Generator<StrictEffect> {
  yield takeEvery("SET_BUSINESS_CATEGORY", setCategory);
}
function* getBusinessCategoryWatcher():Generator<StrictEffect> {
  yield takeEvery("GET_BUSINESS_CATEGORY", getCategory);
}
function* postUserLoginWatcher():Generator<StrictEffect> {
  yield takeEvery("POST_LOGIN", postUserLogin);
}

export default function* postsSaga()  {
  yield all([setCategoryWatcher(),getBusinessCategoryWatcher(),postUserLoginWatcher()]);
}
