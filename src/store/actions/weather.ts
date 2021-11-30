import {
  FetchWeatherBySearchSuccessPayload,
  FetchWeatherListByNameSuccessPayload,
  FetchWeatherListErrorPayload,
  FetchWeatherListSuccessPayload,
  WeatherListTypes
} from "../types/weatherListTypes";
import {createAction} from "@reduxjs/toolkit";

// export const fetchWeatherListRequest = ():FetchWeatherListRequest => {
//   return {
//     type: WeatherListTypes.FETCH_WEATHER_LIST_REQUEST,
//   }
// }

export const fetchWeatherListRequest = createAction(WeatherListTypes.FETCH_WEATHER_LIST_REQUEST)

// export const fetchWeatherListSuccess = (payload: FetchWeatherListSuccessPayload):FetchWeatherListSuccess  => {
//   return {
//     type: WeatherListTypes.FETCH_WEATHER_LIST_SUCCESS,
//     payload: payload
//   }
// }

export const fetchWeatherListSuccess = createAction<FetchWeatherListSuccessPayload>(WeatherListTypes.FETCH_WEATHER_LIST_SUCCESS)

// export const fetchWeatherListError = (payload: FetchWeatherListErrorPayload):FetchWeatherListError => {
//   return {
//     type: WeatherListTypes.FETCH_WEATHER_LIST_ERROR,
//     payload: payload
//   }
// }

export const fetchWeatherListError = createAction<FetchWeatherListErrorPayload>(WeatherListTypes.FETCH_WEATHER_LIST_ERROR)

// export const fetchWeatherListByNameRequest = (payload: FetchWeatherListByNameRequestPayload): FetchWeatherListByNameRequest => {
//   return {
//     type: WeatherListTypes.FETCH_WEATHER_LIST_BY_NAME_REQUEST,
//     payload: payload
//   }
// }

export const fetchWeatherListByNameRequest = createAction<string>(WeatherListTypes.FETCH_WEATHER_LIST_BY_NAME_REQUEST)

// export const fetchWeatherListByNameSuccess = (payload: FetchWeatherListByNameSuccessPayload): FetchWeatherListByNameSuccess => {
//   return {
//     type: WeatherListTypes.FETCH_WEATHER_LIST_BY_NAME_SUCCESS,
//     payload: payload
//   }
// }

export const fetchWeatherListByNameSuccess = createAction<FetchWeatherListByNameSuccessPayload>(WeatherListTypes.FETCH_WEATHER_LIST_BY_NAME_SUCCESS)

// export const fetchWeatherBySearchRequest = (payload: FetchWeatherBySearchRequestPayload):FetchWeatherBySearchRequest => {
//   return {
//     type: WeatherListTypes.FETCH_WEATHER_BY_SEARCH_REQUEST,
//     payload: payload
//   }
// }

export const fetchWeatherBySearchRequest = createAction<string>(WeatherListTypes.FETCH_WEATHER_BY_SEARCH_REQUEST)

// export const fetchWeatherBySearchSuccess = (payload: FetchWeatherBySearchSuccessPayload): FetchWeatherBySearchSuccess => {
//   return {
//     type: WeatherListTypes.FETCH_WEATHER_BY_SEARCH_SUCCESS,
//     payload: payload
//   }
// }

export const fetchWeatherBySearchSuccess = createAction<FetchWeatherBySearchSuccessPayload>(WeatherListTypes.FETCH_WEATHER_BY_SEARCH_SUCCESS)

// export const fetchWeatherBySearchNotFound = (): FetchWeatherBySearchNotFound => {
//   return {
//     type: WeatherListTypes.FETCH_WEATHER_BY_SEARCH_NOT_FOUND
//   }
// }

export const fetchWeatherBySearchNotFound = createAction(WeatherListTypes.FETCH_WEATHER_BY_SEARCH_NOT_FOUND)

// export const openSearch = (): OpenSearch => {
//   return {
//     type: WeatherListTypes.OPEN_SEARCH
//   }
// }

export const openSearch = createAction(WeatherListTypes.OPEN_SEARCH)

// export const closeSearch = (): CloseSearch => {
//   return {
//     type: WeatherListTypes.CLOSE_SEARCH
//   }
// }

export const closeSearch = createAction(WeatherListTypes.CLOSE_SEARCH)
