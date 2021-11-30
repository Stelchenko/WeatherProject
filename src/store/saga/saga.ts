import {call, put, takeEvery, debounce} from 'redux-saga/effects'
import * as Api from "../../../api/weatherApi";
import {
  fetchWeatherBySearchNotFound,
  fetchWeatherBySearchSuccess,
  fetchWeatherListByNameSuccess,
  fetchWeatherListError,
  fetchWeatherListSuccess,

} from "../actions/weather";
import {WeatherListTypes} from "../types/weatherListTypes";
import {currentCityWeather, mapWeathersList} from "../../utils/mapUtils";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))


function* fetchWeather(): any {

  try {
    const result = yield call(Api.getWeatherFromApi);
    yield delay(100)
    console.log('!!!!')
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
    console.log('!!!!')
    console.log(result)
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


function* mySaga() {
  yield takeEvery(WeatherListTypes.FETCH_WEATHER_LIST_BY_NAME_REQUEST, fetchWeatherByName)
  yield takeEvery(WeatherListTypes.FETCH_WEATHER_LIST_REQUEST, fetchWeather)
  yield debounce(500, WeatherListTypes.FETCH_WEATHER_BY_SEARCH_REQUEST, searchWeatherByName)
}

export default mySaga
