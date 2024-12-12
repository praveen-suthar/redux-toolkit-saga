import { call, put, takeEvery } from "redux-saga/effects"
import { getCatsSuccess } from "../slices/catSlice"

function* workGetCatsFetch() {
  const cats = yield call(() => fetch("https://66f24f2b71c84d805874b833.mockapi.io/crud"))
  const formattedCats = yield cats.json()
  console.log("saga", formattedCats)
  const formattedCatsShortened = formattedCats.slice(0, 10);

  yield put(getCatsSuccess(formattedCatsShortened))
}

function* catSaga() {
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch)
}

export default catSaga; 
