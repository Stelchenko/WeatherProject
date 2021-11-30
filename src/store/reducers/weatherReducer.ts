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
      state.searchCity = null
      state.isSearching = false
    })
)


// const weatherReducer = (state = initialState, action: WeatherListActions) => {
//   switch (action.type){
//     case WeatherListTypes.FETCH_WEATHER_LIST_REQUEST: {
//       return {
//         ...state,
//         weathersList: [...state.weathersList],
//         isLoading: true,
//         error: null
//       }
//     }
//     case WeatherListTypes.FETCH_WEATHER_LIST_SUCCESS: {
//       return {
//         ...state,
//         weathersList: action.payload,
//         isLoading: false,
//         error: null
//       }
//     }
//     case WeatherListTypes.FETCH_WEATHER_LIST_ERROR: {
//       return {
//         ...state,
//         isLoading: false,
//         isLoadingCurrent: false,
//         error: action.payload
//       }
//     }
//     case WeatherListTypes.FETCH_WEATHER_LIST_BY_NAME_REQUEST: {
//       return {
//         ...state,
//         isLoadingCurrent: true,
//       }
//     }
//     case WeatherListTypes.FETCH_WEATHER_LIST_BY_NAME_SUCCESS: {
//       return {
//         ...state,
//         isLoadingCurrent: false,
//         currentCity: action.payload
//       }
//     }
//     case WeatherListTypes.FETCH_WEATHER_BY_SEARCH_REQUEST: {
//       return {
//         ...state,
//         isLoadingSearch: true,
//       }
//     }
//     case WeatherListTypes.FETCH_WEATHER_BY_SEARCH_SUCCESS: {
//       return {
//         ...state,
//         searchCity: action.payload,
//         isLoadingSearch: false,
//         isNotFound: false,
//       }
//     }
//     case WeatherListTypes.FETCH_WEATHER_BY_SEARCH_NOT_FOUND: {
//       return {
//         ...state,
//         isLoadingSearch: false,
//         isNotFound: true
//       }
//     }
//     case WeatherListTypes.OPEN_SEARCH: {
//       return {
//         ...state,
//         isSearching: true
//       }
//     }
//     case WeatherListTypes.CLOSE_SEARCH: {
//       return {
//         ...state,
//         searchCity: {},
//         isSearching: false
//       }
//     }
//     default:
//       return state
//   }
// }

// const handlers = {
//   [WeatherListTypes.FETCH_WEATHER_LIST_REQUEST]: (state: WeatherListState) => ({
//     ...state,
//     weathersList: [...state.weathersList],
//     isLoading: true,
//     error: null
//   }),
//   [WeatherListTypes.FETCH_WEATHER_LIST_SUCCESS]: (state: WeatherListState, {payload}: any) => ({
//     ...state,
//     weathersList: payload,
//     isLoading: false,
//     error: null
//   }),
//   [WeatherListTypes.FETCH_WEATHER_LIST_ERROR]: (state: WeatherListState, {payload}: any) => ({
//     ...state,
//     isLoading: false,
//     isLoadingCurrent: false,
//     error: payload
//   }),
//   [WeatherListTypes.FETCH_WEATHER_LIST_BY_NAME_REQUEST]: (state: WeatherListState) => ({
//     ...state,
//     isLoadingCurrent: true,
//   }),
//   [WeatherListTypes.FETCH_WEATHER_LIST_BY_NAME_SUCCESS]: (state: WeatherListState, {payload}: any) => ({
//     ...state,
//     isLoadingCurrent: false,
//     currentCity: payload
//   }),
//   [WeatherListTypes.FETCH_WEATHER_BY_SEARCH_REQUEST]: (state: WeatherListState) => ({
//     ...state,
//     isLoadingSearch: true,
//   }),
//   [WeatherListTypes.FETCH_WEATHER_BY_SEARCH_SUCCESS]: (state: WeatherListState, {payload}: any) => ({
//     ...state,
//     searchCity: payload,
//     isLoadingSearch: false,
//     isNotFound: false,
//   }),
//   [WeatherListTypes.FETCH_WEATHER_BY_SEARCH_NOT_FOUND]: (state: WeatherListState) => ({
//     ...state,
//     isLoadingSearch: false,
//     isNotFound: true
//   }),
//   [WeatherListTypes.OPEN_SEARCH]: (state: WeatherListState) => ({
//     ...state,
//     isSearching: true
//   }),
//   [WeatherListTypes.CLOSE_SEARCH]: (state: WeatherListState) => ({
//     ...state,
//     searchCity: {},
//     isSearching: false
//   }),
//   'DEFAULT': (state: WeatherListState) => state
// }
//
//
// const weatherReducer = (state = initialState, action: WeatherListActions) => {
//   const handler = handlers[action.type] || handlers['DEFAULT']
//   return handler(state, action)
// }

export default weatherReducer