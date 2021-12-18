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
    switch (response.status) {
      case 200:
        const data:datatype = response.data.data.businessGroups;
        yield put(getBusinessCategorySuccess(data));

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
        console.log(response);
        const data:datatype = response.data.data;
        console.log("get type",data);

        yield put(setBusinessCategorySuccess(data));
        
    }
  } catch (error) {
    const data = "failed";
    yield put(setBusinessCategorySuccess(data));
  }
}



function* setCategoryWatcher():Generator<StrictEffect> {
  yield takeEvery("SET_BUSINESS_CATEGORY", setCategory);
}
function* getBusinessCategoryWatcher():Generator<StrictEffect> {
  yield takeEvery("GET_BUSINESS_CATEGORY", getCategory);
}

export default function* postsSaga()  {
  yield all([setCategoryWatcher(),getBusinessCategoryWatcher()]);
}
