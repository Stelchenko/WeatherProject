import {DailyState} from "../types/weatherListTypes";
import {createReducer} from "@reduxjs/toolkit";
import {fetchDailyWeatherRequest, fetchDailyWeatherSuccess} from "../actions/weather";

const initialState: DailyState = {
  dailyInfo: [],
  isLoadingDaily: false,
}

const dailyReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(fetchDailyWeatherRequest, (state) => {
      state.isLoadingDaily = true
    })
    .addCase(fetchDailyWeatherSuccess, (state, {payload}) => {
      state.isLoadingDaily = false
      state.dailyInfo = payload
    })
)

export default dailyReducer