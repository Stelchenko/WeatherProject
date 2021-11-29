import {generateCoords} from "../src/utils/coordsGenerator";


export const MAIN_URL='https://api.openweathermap.org/data/2.5/find?units=metric&'
export const BY_NAME_URL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
export const API_KEY = '17c13f643e2d64dc2a8c012be038cc53'
export const COUNT_CITIES = 8


export const getWeatherFromApi = () => {
  const {lat, lon} = generateCoords()
  return fetch(`${MAIN_URL}lat=${lat}&lon=${lon}0&cnt=${COUNT_CITIES}&appid=${API_KEY}`)
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
      console.log('json')
      console.log(json)
      return json
    })
    .catch((error) => {
      return error
    })
}