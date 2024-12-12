import { getUserAPI , createUserAPI, updateUserAPI, deleteUserAPI, getUserByIdAPI } from "../../apis"
import { getUsersSlice,deleteUsersSlice, editUsersSlice, addUsersSlice} from "../slices/users"
import { setUserSlice } from "../slices/user"
import { takeEvery, put } from "redux-saga/effects"
import { GET_USERS, GET_USERS_BY_ID, CREATE_USER, DELETE_USER_BY_ID, UPDATE_USER_BY_ID } from "../types"; 

export function* getUsersSaga () { 
    const users = yield getUserAPI() 
    console.log("get API---", users)
    yield put(getUsersSlice(users.data))  
}

export function* getUserByIdSaga  (action) {    
    yield getUserByIdAPI(action.id)
    yield put(setUserSlice(action.id))  
}

export function* createUserSaga(action) {  
    console.log('Hello')
    yield createUserAPI(action.user) 
    yield put(addUsersSlice(action.user))  
}

export function* udpateUserSaga  (action) {    
    yield updateUserAPI(action.user)
    yield put(editUsersSlice(action.user))  
}

export function* deleteUserByIdSaga(action) {  
    console.log("action", action.id)
    yield deleteUserAPI(action.id)
    yield put(deleteUsersSlice(action.id))  
}
export function* watchUsersAsync () {
    yield takeEvery(GET_USERS, getUsersSaga);
    yield takeEvery(GET_USERS_BY_ID, getUserByIdSaga);
    yield takeEvery(CREATE_USER, createUserSaga);
    yield takeEvery(UPDATE_USER_BY_ID, udpateUserSaga);
    yield takeEvery(DELETE_USER_BY_ID, deleteUserByIdSaga);
}
