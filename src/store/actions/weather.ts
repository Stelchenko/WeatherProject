import {
  CloseSearch,
  FetchWeatherBySearchNotFound,
  FetchWeatherBySearchRequest,
  FetchWeatherBySearchRequestPayload,
  FetchWeatherBySearchSuccess,
  FetchWeatherBySearchSuccessPayload,
  FetchWeatherListByNameRequest,
  FetchWeatherListByNameRequestPayload,
  FetchWeatherListByNameSuccess,
  FetchWeatherListByNameSuccessPayload,
  FetchWeatherListError,
  FetchWeatherListErrorPayload,
  FetchWeatherListRequest,
  FetchWeatherListSuccess,
  FetchWeatherListSuccessPayload, OpenSearch,
  WeatherListTypes
} from "../types/weatherListTypes";

export const fetchWeatherListRequest = ():FetchWeatherListRequest => {
  return {
    type: WeatherListTypes.FETCH_WEATHER_LIST_REQUEST,
  }
}

export const fetchWeatherListSuccess = (payload: FetchWeatherListSuccessPayload):FetchWeatherListSuccess  => {
  return {
    type: WeatherListTypes.FETCH_WEATHER_LIST_SUCCESS,
    payload: payload
  }
}

export const fetchWeatherListError = (payload: FetchWeatherListErrorPayload):FetchWeatherListError => {
  return {
    type: WeatherListTypes.FETCH_WEATHER_LIST_ERROR,
    payload: payload
  }
}

export const fetchWeatherListByNameRequest = (payload: FetchWeatherListByNameRequestPayload): FetchWeatherListByNameRequest => {
  return {
    type: WeatherListTypes.FETCH_WEATHER_LIST_BY_NAME_REQUEST,
    payload: payload
  }
}

export const fetchWeatherListByNameSuccess = (payload: FetchWeatherListByNameSuccessPayload): FetchWeatherListByNameSuccess => {
  return {
    type: WeatherListTypes.FETCH_WEATHER_LIST_BY_NAME_SUCCESS,
    payload: payload
  }
}

export const fetchWeatherBySearchRequest = (payload: FetchWeatherBySearchRequestPayload):FetchWeatherBySearchRequest => {
  return {
    type: WeatherListTypes.FETCH_WEATHER_BY_SEARCH_REQUEST,
    payload: payload
  }
}

export const fetchWeatherBySearchSuccess = (payload: FetchWeatherBySearchSuccessPayload): FetchWeatherBySearchSuccess => {
  return {
    type: WeatherListTypes.FETCH_WEATHER_BY_SEARCH_SUCCESS,
    payload: payload
  }
}

export const fetchWeatherBySearchNotFound = (): FetchWeatherBySearchNotFound => {
  return {
    type: WeatherListTypes.FETCH_WEATHER_BY_SEARCH_NOT_FOUND
  }
}

export const openSearch = (): OpenSearch => {
  return {
    type: WeatherListTypes.OPEN_SEARCH
  }
}

export const closeSearch = (): CloseSearch => {
  return {
    type: WeatherListTypes.CLOSE_SEARCH
  }
}
