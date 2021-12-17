import { takeEvery, all, call, put, takeLeading } from 'redux-saga/effects';
import { setBusinessCategory, setBusinessCategorySuccess } from './business_category';

function* setCategory() {
  try {
    console.log('error');
    const data = 'success';
    yield put(setBusinessCategorySuccess(data));
  } catch (error) {
    const data = 'failed';
    yield put(setBusinessCategorySuccess(data));
  }
}

function* setCategoryWatcher() {
  yield takeEvery('SET_BUSINESS_CATEGORY', setCategory);
}

export default function* postsSaga() {
  yield all([setCategoryWatcher()]);
}