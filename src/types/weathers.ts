import {
  Id,
  City,
  WeatherType,
  Temperature,
  CoordsItem,
  WeatherDataItem,
  Base,
  MainItem,
  WindItem,
  CloudsItem,
  RainItem,
  SnowItem,
  Dt,
  SysItem,
  Timezone, Cod, IconId
} from "./index";

export type WeatherListItem = {
  id: Id,
  cityName: City,
  temp: Temperature,
  weatherType: WeatherType,
  iconId: IconId,
  dt: Dt,
  timezone: Timezone
}

export type DraftWeatherListItem = {
  cord: CoordsItem,
  weather: WeatherDataItem[],
  base?: Base
  main: MainItem,
  wind?: WindItem,
  clouds?: CloudsItem,
  rain: RainItem | null
  snow: SnowItem | null
  dt: Dt,
  sys?: SysItem,
  timezone: Timezone,
  id: Id
  name: City,
  cod?: Cod
}