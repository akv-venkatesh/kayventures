import { takeEvery, all, call, put, takeLeading, StrictEffect } from "redux-saga/effects";
import {
  setBusinessCategory,
  setBusinessCategorySuccess,
  getBusinessCategory,
  getBusinessCategorySuccess,
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
  try {
    const response: AxiosResponse = yield call(
      apibaseURL.get,
      ("/user-management/business-group-types/" + action.payload)
    );
    switch (response.status) {
      case 200:
        // console.log(response);
        const data: datatype[] = response.data.data;
        // console.log("get type", data);
        localStorage.setItem('business_category', data[0].name);

        yield put(setBusinessCategorySuccess(data));

    }
  } catch (error) {
    const data = error;
    yield put(setBusinessCategorySuccess(data));
  }
}

// primary detailes
function* setPrimaryDetails(action: any) {
  try {
    const response: AxiosResponse = yield call(
      apibaseURL.post,
      ("/user-management/business-group-types/biz-category-user-signup" +
      // action.payload
      {
        "user": {
          "name": "bhai1",
          "email": "bhai1@emproto.com",
          "phoneNumber": "9988776459",
          "categoryId": 2,
          "subCategoryIds": [
            2,
            3
          ],
          "organisationName": "Emproto Technologies Pvt Ltd",
          "location": "Bangalore",
          "designationId": 1,
          "url": "https://emproto.com/"
        }
      }
      )
    );
    switch (response.status) {
      case 200:
       
        console.log("primary details done")

    }
  } catch (error) {
    const data = error;
    console.log("error");
    // yield put(setBusinessCategorySuccess(data));
  }
}


function* setCategoryWatcher(): Generator<StrictEffect> {
  yield takeEvery("SET_BUSINESS_CATEGORY", setCategory);
}
function* getBusinessCategoryWatcher(): Generator<StrictEffect> {
  yield takeEvery("GET_BUSINESS_CATEGORY", getCategory);
}

function* setPrimaryDetailsWatcher(): Generator<StrictEffect> {
  yield takeEvery("GET_BUSINESS_CATEGORY", setPrimaryDetails);
}

export default function* postsSaga() {
  yield all([setCategoryWatcher(), getBusinessCategoryWatcher(),setPrimaryDetailsWatcher()]);
}
