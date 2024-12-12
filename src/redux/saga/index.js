import { watchUsersAsync } from "./user"
import {all} from "redux-saga/effects"


export function* rootSaga() {
    yield all([
        watchUsersAsync()
    ])
}

// first create rootSaga generator function and called in store then run: