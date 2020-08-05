import { put, call, takeEvery, select } from 'redux-saga/effects'
import { getFormValues } from "redux-form"
import * as actions from "./action"
import { getAllApi } from "./api"

function* getData() {
  const response = yield call(getAllApi)
  yield put(actions.getDashboardData.success(response))
}

export default function* watchSaga() {
  yield takeEvery(actions.getDashboardData.REQUEST, getData)
}