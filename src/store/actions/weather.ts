import {
  FetchWeatherBySearchSuccessPayload,
  FetchWeatherListByNameSuccessPayload,
  FetchWeatherListErrorPayload,
  FetchWeatherListSuccessPayload,
  WeatherListTypes
} from "../types/weatherListTypes";
import {createAction} from "@reduxjs/toolkit";


export const fetchWeatherListRequest = createAction(WeatherListTypes.FETCH_WEATHER_LIST_REQUEST)
export const fetchWeatherListSuccess = createAction<FetchWeatherListSuccessPayload>(WeatherListTypes.FETCH_WEATHER_LIST_SUCCESS)
export const fetchWeatherListError = createAction<FetchWeatherListErrorPayload>(WeatherListTypes.FETCH_WEATHER_LIST_ERROR)
export const fetchWeatherListByNameRequest = createAction<string>(WeatherListTypes.FETCH_WEATHER_LIST_BY_NAME_REQUEST)
export const fetchWeatherListByNameSuccess = createAction<FetchWeatherListByNameSuccessPayload>(WeatherListTypes.FETCH_WEATHER_LIST_BY_NAME_SUCCESS)
export const fetchWeatherBySearchRequest = createAction<string>(WeatherListTypes.FETCH_WEATHER_BY_SEARCH_REQUEST)
export const fetchWeatherBySearchSuccess = createAction<FetchWeatherBySearchSuccessPayload>(WeatherListTypes.FETCH_WEATHER_BY_SEARCH_SUCCESS)
export const fetchWeatherBySearchNotFound = createAction(WeatherListTypes.FETCH_WEATHER_BY_SEARCH_NOT_FOUND)
export const openSearch = createAction(WeatherListTypes.OPEN_SEARCH)
export const closeSearch = createAction(WeatherListTypes.CLOSE_SEARCH)
export const fetchDailyWeatherRequest = createAction<{latitude: number, longitude: number}>(WeatherListTypes.FETCH_DAILY_WEATHER_REQUEST)
export const fetchDailyWeatherSuccess = createAction<[]>(WeatherListTypes.FETCH_DAILY_WEATHER_SUCCESS)
