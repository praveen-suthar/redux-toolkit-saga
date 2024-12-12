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
  // actions name with state 
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch)
}

export default catSaga; 

// saga file me action ko call karna rahega
// api calling in saga file
// api ki file ko seprate bhi kar sakte h.// fecth or axios

// takeEvery => listens for every occurrence.
// put => effect dispatches an action to the Redux store.
// call => effect is used to invoke a function, which may return a promise, and waits for it to resolve.
