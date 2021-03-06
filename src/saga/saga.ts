import {call, put, takeEvery, debounce} from 'redux-saga/effects'
import * as Api from "../../api/weatherApi";
import {
  fetchDailyWeatherSuccess,
  fetchWeatherBySearchNotFound,
  fetchWeatherBySearchSuccess,
  fetchWeatherListByNameSuccess,
  fetchWeatherListError,
  fetchWeatherListSuccess,

} from "../store/actions/weather";
import {WeatherListTypes} from "../store/types/weatherListTypes";
import {currentCityWeather, mapWeathersList} from "../utils/mapUtils";


function* fetchWeather(): any {
  try {
    const result = yield call(Api.getWeatherFromApi);
    yield put(fetchWeatherListSuccess(mapWeathersList(result)))
  } catch (e: unknown) {
    if (typeof e === "string")
      yield put(fetchWeatherListError(e))
    else if (e instanceof Error)
      yield put(fetchWeatherListError(e.message))
  }
}

function* fetchWeatherByName(action: any): any {
  try {
    const result = yield call(Api.getWeatherByNameFromApi, action.payload);
    yield put(fetchWeatherListByNameSuccess(currentCityWeather(result)))
  } catch (e: unknown) {
    if (typeof e === "string")
      yield put(fetchWeatherListError(e))
    else if (e instanceof Error)
      yield put(fetchWeatherListError(e.message))
  }
}

function* searchWeatherByName(action: any): any {
  try {
    const result = yield call(Api.getWeatherByNameFromApi, action.payload);
    if (result.cod == 404 || result.cod == 400)
      yield put(fetchWeatherBySearchNotFound())
    else
      yield put(fetchWeatherBySearchSuccess(currentCityWeather(result)))
  } catch (e: unknown) {
    if (typeof e === "string")
      yield put(fetchWeatherListError(e))
    else if (e instanceof Error)
      yield put(fetchWeatherListError(e.message))
  }
}

function* fetchDailyWeather(action: any): any {
  try {
    const result = yield call(Api.getWeatherByDayFromApi, action.payload);
    yield put(fetchDailyWeatherSuccess(result))
  } catch (e: unknown) {
    if (typeof e === "string")
      yield put(fetchWeatherListError(e))
    else if (e instanceof Error)
      yield put(fetchWeatherListError(e.message))
  }
}


function* mySaga() {
  yield takeEvery(WeatherListTypes.FETCH_WEATHER_LIST_BY_NAME_REQUEST, fetchWeatherByName)
  yield takeEvery(WeatherListTypes.FETCH_WEATHER_LIST_REQUEST, fetchWeather)
  yield takeEvery(WeatherListTypes.FETCH_DAILY_WEATHER_REQUEST, fetchDailyWeather)
  yield debounce(500, WeatherListTypes.FETCH_WEATHER_BY_SEARCH_REQUEST, searchWeatherByName)
}

export default mySaga
