import {combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga'
import weatherReducer from "./reducers/weatherReducer";
import mySaga from "../saga/saga";
import {configureStore} from "@reduxjs/toolkit";
import dailyReducer from "./reducers/dailyReducer";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  weather: weatherReducer,
  daily: dailyReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)),
})

sagaMiddleware.run(mySaga)

export default store;