import {DraftWeatherListItem, WeatherListItem} from "../types/weathers";

export function mapWeathersList(draftWeathersList: DraftWeatherListItem[] | undefined): WeatherListItem[]{
  if (draftWeathersList)
    return draftWeathersList.map((item) => ({
      id: item.id,
      cityName: item.name,
      temp: item.main.temp,
      weatherType: item.weather[0].main,
      iconId: item.weather[0].icon,
      dt: item.dt,
      timezone: item.timezone
    }))
  else return []
}

export function currentCityWeather(draftWeather: DraftWeatherListItem | undefined): WeatherListItem | null{
  if (draftWeather){
    return {id: draftWeather.id,
      cityName: draftWeather.name,
      temp: Math.trunc(draftWeather.main.temp),
      weatherType: draftWeather.weather[0].main,
      iconId: draftWeather.weather[0].icon,
      dt: draftWeather.dt,
      timezone: draftWeather.timezone}}
  else return null
}