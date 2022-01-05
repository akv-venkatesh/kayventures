import { takeEvery, all, call, put, takeLeading, StrictEffect } from "redux-saga/effects";
import {
  
  setBusCategory,
  getBusinessCategory,
  getBusinessCategorySuccess,
  setPrimaryDetailsSuccess,setPrimaryDetailsFailed,getPrimaryDesignationSuccess,getPrimaryDesignationFailed
} from "./business_category";
import { AxiosResponse,AxiosError } from "axios";
import apibaseURL from "../../api";

interface datatype {
  name: string;
}

// get category
function* getCategory() {
  try {
    const response: AxiosResponse = yield call(
      apibaseURL.get,
      "/user-management/businessCategories"
    );


    switch (response.status) {
      case 200:
        const data: datatype = response.data.data;
        yield put(getBusinessCategorySuccess(data));

    }
  }
  catch (error) {
    const data = "failed";
    console.log("api error")
    yield put(getBusinessCategorySuccess(data));
  }
}

// primary detailes
function* setPrimaryDetails(action: any) {
  let typeIds: any = JSON.parse(action.payload.subCategoryIds)
  let subCategoryIds = typeIds.map((i: any) => Number(i))
  let details = {
    "user": {
      "name": action.payload.values.personName,
      "email": action.payload.values.email,
      "phoneNumber": action.payload.values.phone,
      "categoryId": Number(action.payload.categoryId),
      "subCategoryIds": subCategoryIds,
      "organisationName": action.payload.values.organization,
      "location": action.payload.values.location,
      "designationId": action.payload.values.designation,
      "url": action.payload.values.urlLink
    }
  }

  console.log(action.payload.values.designation);
  try {
    const response: AxiosResponse = yield call(apibaseURL.post,"/user-management/biz-category-user-signup",
      details
    );
    console.log(response.status);
    switch (response.status) {
      case 200:
        yield put(setPrimaryDetailsSuccess(true));
        localStorage.setItem("primary_user_details", JSON.stringify(details));
        console.log("primary details done")
    }
  } catch (error) {
    const err = error as AxiosError
    console.log("Error ---->" ,err.response?.status);

    const errors = err.response?.status
    switch (errors) {
        case 400 :
          console.log("Error Text" ,err.response?.data.message);
          yield put(setPrimaryDetailsFailed({status:true,message : err.response?.data.message}));  
      }
  }
}

// for get designations for primary details

function* getPrimaryDesignation(action: any){
  try {

    const response: AxiosResponse = yield call(
      apibaseURL.get,
      "/user-management/designations"
    );


    switch (response.status) {
      case 200:
        const data = response.data.data;
        yield put(getPrimaryDesignationSuccess(data.designations));
    }
  }
  catch (error) {
    const data = "failed";
    console.log("api error")
    yield put(getPrimaryDesignationFailed(data));
  }
}

// for get designations for primary details


function* getBusinessCategoryWatcher(): Generator<StrictEffect> {
  yield takeEvery("GET_BUSINESS_CATEGORY", getCategory);
}

function* setPrimaryDetailsWatcher(): Generator<StrictEffect> {
  yield takeEvery("SET_PRIMARY_DETAILS", setPrimaryDetails);
}

function* getPrimaryDesignationWatcher(): Generator<StrictEffect> {
  yield takeEvery("GET_PRIMARY_DESIGNATION", getPrimaryDesignation);
}

export default function* postsSaga() {
  yield all([getBusinessCategoryWatcher(), setPrimaryDetailsWatcher(),getPrimaryDesignationWatcher()]);
}
