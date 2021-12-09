import {
  WeatherListState,
} from "../types/weatherListTypes";
import {createReducer} from "@reduxjs/toolkit";

import {
  closeSearch,
  fetchWeatherBySearchNotFound,
  fetchWeatherBySearchRequest, fetchWeatherBySearchSuccess,
  fetchWeatherListByNameRequest, fetchWeatherListByNameSuccess,
  fetchWeatherListError,
  fetchWeatherListRequest,
  fetchWeatherListSuccess, openSearch
} from "../actions/weather";


const initialState: WeatherListState = {
  weathersList: [],
  currentCity: {
    id: '',
    cityName: '',
    temp: 0,
    weatherType: '',
    iconId: '',
    dt: 0,
    timezone: 0
  },
  searchCity: {
    id: '',
    cityName: '',
    temp: 0,
    weatherType: '',
    iconId: '',
    dt: 0,
    timezone: 0
  },
  isLoading: false,
  isSearching: false,
  isNotFound: false,
  searchText: '',
  isLoadingCurrent: false,
  error: null,
  isLoadingSearch: false,
}


const weatherReducer = createReducer(initialState, (builder) =>
    builder
      .addCase(fetchWeatherListRequest, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchWeatherListSuccess, (state, {payload}) => {
          state.weathersList = payload
          state.isLoading = false
          state.error = null
        }
      )
      .addCase(fetchWeatherListError, (state, {payload}) => {
        state.error = payload
        state.isLoading = false
        state.isLoadingCurrent = false
      })
      .addCase(fetchWeatherListByNameRequest, (state) => {
        state.isLoadingCurrent = true
      })
      .addCase(fetchWeatherListByNameSuccess, (state, {payload}) => {
        state.currentCity = payload
        state.isLoadingCurrent = false
      })
      .addCase(fetchWeatherBySearchRequest, (state) => {
        state.isLoadingSearch = true
      })
      .addCase(fetchWeatherBySearchSuccess, (state, {payload}) => {
        state.searchCity = payload
        state.isLoadingSearch = false
        state.isNotFound = false
      })
      .addCase(fetchWeatherBySearchNotFound, (state) => {
        state.isLoadingSearch = false
        state.isNotFound = true
      })
      .addCase(openSearch, (state) => {
        state.isSearching = true
      })
      .addCase(closeSearch, (state) => {
        state.searchCity = initialState.searchCity
        state.isSearching = false
      })
)

export default weatherReducer