import { takeEvery, all, call, put, takeLeading,StrictEffect } from "redux-saga/effects";
import {
  setBusinessCategory,
  setBusinessCategorySuccess,
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
        const data: datatype = {
          type: "GET_BUSINESS_CATEGORY",
          payload: response.data.data.businessGroups[0],
        };
console.log(data);
        yield put(data);
    }
  } catch (error) {

    const data = "failed";
    console.log("api error")
    yield put(setBusinessCategorySuccess(data));
  }
}

function* getBusinessCategoryWatcher():Generator<StrictEffect> {
  yield takeEvery("GET_BUSINESS_CATEGORY", getCategory);
}

// get type with id
function* setCategory() {
  try {
    const response: AxiosResponse = yield call(
      apibaseURL.get,
      "/user-management/business-group/{1}"
    );
    switch (response.status) {
      case 200:
        const data: datatype = {
          type: "SET_BUSINESS_CATEGORY",
          payload: response.data.data.businessGroups[0],
        };

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


export default function* postsSaga()  {
  yield all([setCategoryWatcher(),getBusinessCategoryWatcher()]);
}
