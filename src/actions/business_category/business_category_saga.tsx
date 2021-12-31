import { takeEvery, all, call, put, takeLeading, StrictEffect } from "redux-saga/effects";
import {
  
  setBusCategory,
  getBusinessCategory,
  getBusinessCategorySuccess,
  setPrimaryDetailsSuccess,setPrimaryDetailsFailed
} from "./business_category";
import { AxiosResponse } from "axios";
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
      "designationId": 1,
      "url": action.payload.values.urlLink
    }
  }

  console.log(details);
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
        break
      case 400:
        yield put(setPrimaryDetailsFailed(true));
        console.log("Error")
    }
  } catch (error) {
    console.log('Error in catch ,',error);
    const data = error;
    yield put(setPrimaryDetailsSuccess(false));
  }
}



function* getBusinessCategoryWatcher(): Generator<StrictEffect> {
  yield takeEvery("GET_BUSINESS_CATEGORY", getCategory);
}

function* setPrimaryDetailsWatcher(): Generator<StrictEffect> {
  yield takeEvery("SET_PRIMARY_DETAILS", setPrimaryDetails);
}

export default function* postsSaga() {
  yield all([getBusinessCategoryWatcher(), setPrimaryDetailsWatcher()]);
}
