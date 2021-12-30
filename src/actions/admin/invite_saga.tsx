import { takeEvery, all, call, put, takeLeading,StrictEffect } from "redux-saga/effects";
import {
    invite,
    inviteSuccess,
} from "./invite";
import { AxiosResponse } from "axios";
import apibaseURL from "../../api";

interface datatype {
  type: string;
  payload: any;
}

function* adminInvite(action:any) {
  try {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoyLCJlbWFpbCI6ImtvdXNoaWtAZW1wcm90by5jb20iLCJyb2xlIjoiMjAwMSIsIm9yZ2FuaXNhdGlvbkRvbWFpbk5hbWUiOiJlbXByb3RvIn0sImlhdCI6MTY0MDg1ODc4MCwiZXhwIjoxNjQxNDYzNTgwfQ.YWNOqqqy02Ep5tVrOg2O3y55Tsk8SrcCwiBnUWqxRDk";

    const headers = {
      'Authorization': 'JWT '+token
    }
    const response: AxiosResponse = yield call(
      apibaseURL.post,
      "/user-management/inviteKayEmployee",action.payload,{
        headers: headers
      }
    );
    switch (response.status) {
      case 200:
        const data:datatype = response.data.data;
        console.log(response);
       yield put(inviteSuccess(data));
    }
  } 
  catch (error) {
    const data = "failed";
    yield put(inviteSuccess(data));
  }
}

function* inviteWatcher():Generator<StrictEffect> {
  yield takeEvery("INVITE", adminInvite);
}

export default function* invitesaga()  {
  yield all([inviteWatcher()]);
}
