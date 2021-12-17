import { all } from 'redux-saga/effects';
import postsSaga from '../actions/business_category/business_category_saga';

export default function* () {

  yield all([postsSaga()]);
}