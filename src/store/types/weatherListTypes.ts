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

export type FetchWeatherListSuccessPayload = WeatherListItem[]
export type FetchWeatherListErrorPayload = string
export type FetchWeatherListByNameSuccessPayload = WeatherListItem | null
export type FetchWeatherListByNameRequestPayload = string
export type FetchWeatherBySearchRequestPayload = string
export type FetchWeatherBySearchSuccessPayload = WeatherListItem | null


export type OpenSearch = {
  type: WeatherListTypes.OPEN_SEARCH
}

export type CloseSearch = {
  type: WeatherListTypes.CLOSE_SEARCH
}

export type FetchWeatherBySearchNotFound = {
  type: WeatherListTypes.FETCH_WEATHER_BY_SEARCH_NOT_FOUND
}

export type FetchWeatherBySearchSuccess = {
  type: WeatherListTypes.FETCH_WEATHER_BY_SEARCH_SUCCESS,
  payload: FetchWeatherBySearchSuccessPayload
}

export type FetchWeatherBySearchRequest = {
  type: WeatherListTypes.FETCH_WEATHER_BY_SEARCH_REQUEST,
  payload: FetchWeatherBySearchRequestPayload
}

export type FetchWeatherListRequest = {
  type: WeatherListTypes.FETCH_WEATHER_LIST_REQUEST
}

export type FetchWeatherListByNameRequest = {
  type: WeatherListTypes.FETCH_WEATHER_LIST_BY_NAME_REQUEST
  payload: FetchWeatherListByNameRequestPayload
}

export type FetchWeatherListByNameSuccess = {
  type: WeatherListTypes.FETCH_WEATHER_LIST_BY_NAME_SUCCESS,
  payload: FetchWeatherListByNameSuccessPayload
}

export type FetchWeatherListSuccess = {
  type: WeatherListTypes.FETCH_WEATHER_LIST_SUCCESS,
  payload: FetchWeatherListSuccessPayload
}

export type FetchWeatherListError = {
  type: WeatherListTypes.FETCH_WEATHER_LIST_ERROR,
  payload: FetchWeatherListErrorPayload
}

export type WeatherListActions =
  | FetchWeatherListError
  | FetchWeatherListRequest
  | FetchWeatherListSuccess
  | FetchWeatherListByNameSuccess
  | FetchWeatherListByNameRequest
  | FetchWeatherBySearchRequest
  | FetchWeatherBySearchSuccess
  | FetchWeatherBySearchNotFound
  | CloseSearch
  | OpenSearch



