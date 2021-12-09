import {WeatherListItem} from "../../types/weathers";

export enum WeatherListTypes {
  FETCH_WEATHER_LIST_REQUEST = 'WEATHER_LIST/FETCH_WEATHER_LIST_REQUEST',
  FETCH_WEATHER_LIST_SUCCESS = 'WEATHER_LIST/FETCH_WEATHER_LIST_SUCCESS',
  FETCH_WEATHER_LIST_ERROR = 'WEATHER_LIST/FETCH_WEATHER_LIST_ERROR',
  FETCH_WEATHER_LIST_BY_NAME_REQUEST = 'WEATHER_LIST/FETCH_WEATHER_LIST_BY_NAME_REQUEST',
  FETCH_WEATHER_LIST_BY_NAME_SUCCESS = 'WEATHER_LIST/FETCH_WEATHER_LIST_BY_NAME_SUCCESS',
  FETCH_WEATHER_BY_SEARCH_REQUEST = 'WEATHER_LIST/FETCH_WEATHER_BY_SEARCH_REQUEST',
  FETCH_WEATHER_BY_SEARCH_SUCCESS = 'WEATHER_LIST/FETCH_WEATHER_BY_SEARCH_SUCCESS',
  FETCH_WEATHER_BY_SEARCH_NOT_FOUND = 'WEATHER_LIST/FETCH_WEATHER_BY_SEARCH_NOT_FOUND',
  FETCH_DAILY_WEATHER_REQUEST = 'WEATHER_LIST/FETCH_DAILY_WEATHER_REQUEST',
  FETCH_DAILY_WEATHER_SUCCESS = 'WEATHER_LIST/FETCH_DAILY_WEATHER_SUCCESS',
  CLOSE_SEARCH = 'CLOSE_SEARCH',
  OPEN_SEARCH = 'OPEN_SEARCH'
}

export type WeatherListState = {
  weathersList: WeatherListItem[],
  currentCity: WeatherListItem,
  searchCity: WeatherListItem,
  isLoading: boolean,
  isSearching: boolean,
  searchText: string,
  isNotFound: boolean,
  isLoadingSearch: boolean,
  isLoadingCurrent: boolean,
  error: null | string,
}

export type DailyState = {
  dailyInfo: [],
  isLoadingDaily: boolean,
}

export type FetchWeatherListSuccessPayload = WeatherListItem[]
export type FetchWeatherListErrorPayload = string
export type FetchWeatherListByNameSuccessPayload = WeatherListItem
export type FetchWeatherListByNameRequestPayload = string
export type FetchWeatherBySearchRequestPayload = string
export type FetchWeatherBySearchSuccessPayload = WeatherListItem


export type OpenSearch = {
  type: WeatherListTypes.OPEN_SEARCH
}

export type CloseSearch = {
  type: WeatherListTypes.CLOSE_SEARCH
}





