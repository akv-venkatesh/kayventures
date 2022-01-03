import { takeEvery, all, call, put, takeLeading, StrictEffect } from "redux-saga/effects";
import {
  adminEditProfileSuccess, adminEditProfileailed
} from "./editprofile"
import { AxiosError, AxiosResponse } from "axios";
import apibaseURL from "../../api";

interface datatype {
  type: string;
  payload: any;
}

function* adminEditProfile(action: any) {

  console.log("password edit page");
  console.log(action.payload);
  const token = action.payload.token;
  const headerParams = {
    'Authorization':token
  };

// var editfile = {
//   "name": action.payload.values.first_name+action.payload.values.middle_name+action.payload.values.last_name,
//   "profileImage": {
//     "name": action.payload.imageFile.name,
//     "key": "s3-manufacturer-key",
//     "value": {
//       "imageType": action.payload.imageFile.type,
//       "size": "1MB",
//       "width": "100px",
//       "height": "100px",
//       "url": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595"
//     }
//   },
//   "address": action.payload.values.address,
//   "description": action.payload.values.phone
// }
  var editfile = {
    "name": "test2nbvbvbv",
    "profileImage": {
      "name": "manufacturer.jpeg",
      "key": "s3-manufacturer-key",
      "value": {
        "imageType": "jpeg",
        "size": "1MB",
        "width": "100px",
        "height": "100px",
        "url": "https://www.shutterstock.com/image-photo/interior-garment-factory-shop-closes-making-724014595"
      }
    },
    "address": "test",
    "description": "test"
  }
  // yield put(adminEditProfileSuccess("4"));     
  try {
    const response: AxiosResponse = yield call(
      apibaseURL.put,
      "/user-management/users/" + action.payload.id, { editfile }, { headers: headerParams }
    );
    // yield put(adminEditProfileSuccess("4")); 
    console.log(response)
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
    console.log(err.response)
    yield put(adminEditProfileSuccess(err.response));
  }
}

function* adminEditProfileWatcher(): Generator<StrictEffect> {
  yield takeEvery("ADMIN_EDIT_PROFILE", adminEditProfile);
}

export default function* adminEditProfileSaga() {
  yield all([adminEditProfileWatcher()]);
}
