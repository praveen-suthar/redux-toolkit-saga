// import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// import catReducer from "../slices/catSlice";
// import catSaga from "../saga/catSaga";

// const sagaMiddleware = createSagaMiddleware();

// export const store = configureStore({
//     reducer: {
//        cats:catReducer
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
// })
// sagaMiddleware.run(catSaga);

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import catSaga from "../saga/catSaga";
import { rootSaga } from "../saga";
import user from "../slices/user";
import users from "../slices/users";
import catSlice from "../slices/catSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        user,
        users,
        catSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk:"false"}).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga);