import {generateCoords} from "../src/utils/coordsGenerator";


export const MAIN_URL='https://api.openweathermap.org/data/2.5/find?units=metric&'
export const BY_NAME_URL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
export const API_KEY = 'b4ff9cd7760136e6455768711c688ae7'
export const COUNT_CITIES = 20
export const DAYLI_URL = 'https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly,current,alerts&units=metric'

export const getWeatherFromApi = () => {
  const {lat, lon} = generateCoords()
  return fetch(`${MAIN_URL}lat=${lat}&lon=${lon}&cnt=${COUNT_CITIES}&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((json) => {
      return json.list
    })
    .catch((error) => {
      return error
    })
}

export const getWeatherByNameFromApi = (payload: string) => {
  return fetch(`${BY_NAME_URL}${payload.trim()}&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((json) => {
      return json
    })
    .catch((error) => {
      return error
    })
}

export const getWeatherByDayFromApi = (payload: {latitude: number, longitude: number}) => {
  return fetch(`${DAYLI_URL}&lat=${payload.latitude}&lon=${payload.longitude}&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((json) => {
      return json.daily
    })
    .catch((error) => {
      return error
    })
}