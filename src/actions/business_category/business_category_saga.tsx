import { takeEvery, all, call, put, takeLeading, StrictEffect } from "redux-saga/effects";
import {
  setBusinessCategory,
  setBusinessCategorySuccess,
  getBusinessCategory,
  getBusinessCategorySuccess,
  setPrimaryDetailsSuccess
} from "./business_category";
import { AxiosResponse } from "axios";
import apibaseURL from "../../api";

interface datatype {
  name: string;
}

// get category
function* getCategory() {
  try {
    // const header = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjozOCwiZW1haWwiOiJrb3VzaGlrMUBlbXByb3RvLmNvbSIsInJvbGUiOiIyMDAyIn0sImlhdCI6MTY0MDM4NDAzMywiZXhwIjoxNjQwOTg4ODMzfQ.KuV3rlLWLzJGMtVHtxCc4OZdpgThKn4UDaKn213K3Fk"
    const response: AxiosResponse = yield call(
      apibaseURL.get,
      "/user-management/businessCategories"
    );
    // console.log(response);

    switch (response.status) {
      case 200:
        const data: datatype = response.data.data;
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
function* setCategory(action: any) {
  // try {
  //   const response: AxiosResponse = yield call(
  //     apibaseURL.get,
  //     ("/user-management/business-group-types/" + action.payload)
  //   );
  //   switch (response.status) {
  //     case 200:
  //       // console.log(response);
  //       const data: datatype[] = response.data.data;
  //       // console.log("get type", data);
  //       localStorage.setItem('business_category', data[0].name);

  //       yield put(setBusinessCategorySuccess(data));

  //   }
  // } catch (error) {
  //   const data = error;
  //   yield put(setBusinessCategorySuccess(data));
  // }
}

// primary detailes
function* setPrimaryDetails(action: any) {

  let details = {
    "user": {
      "name": action.payload.personName,
      "email": action.payload.email,
      "phoneNumber": action.payload.phone,
      "categoryId": 1,
      "subCategoryIds": [2, 3],
      "organisationName": action.payload.organization,
      "location": action.payload.location,
      "designationId": 1,
      "url": action.payload.urlLink
    }
  }
  let primarydetails = JSON.stringify(details)
  // console.log(primarydetails);


  try {
    const response: AxiosResponse = yield call(apibaseURL.post, "/user-management/biz-category-user-signup",{
      "user": {
        "name": action.payload.personName,
        "email": action.payload.email,
        "phoneNumber": action.payload.phone,
        "categoryId": 1,
        "subCategoryIds": [2, 3],
        "organisationName": action.payload.organization,
        "location": action.payload.location,
        "designationId": 1,
        "url": action.payload.urlLink
      }
    });
    // console.log(response.statusText);
    switch (response.status) {
      case 200:
        yield put(setPrimaryDetailsSuccess(true));
        localStorage.setItem("primary_user_details", JSON.stringify(primarydetails));

        console.log("primary details done")

    }
  } catch (error) {
    const data = error;
    console.log(data);
    yield put(setPrimaryDetailsSuccess(data));
  }
}


function* setCategoryWatcher(): Generator<StrictEffect> {
  yield takeEvery("SET_BUSINESS_CATEGORY", setCategory);
}
function* getBusinessCategoryWatcher(): Generator<StrictEffect> {
  yield takeEvery("GET_BUSINESS_CATEGORY", getCategory);
}

function* setPrimaryDetailsWatcher(): Generator<StrictEffect> {
  yield takeEvery("SET_PRIMARY_DETAILS", setPrimaryDetails);
}

export default function* postsSaga() {
  yield all([setCategoryWatcher(), getBusinessCategoryWatcher(), setPrimaryDetailsWatcher()]);
}
