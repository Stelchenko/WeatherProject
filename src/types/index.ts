export type Lon = number
export type Lat = number
export type Id = string
export type Main = string
export type Description = string
export type City = string
export type WeatherType = string
export type Dt = number
export type Base = string
export type Timezone = number
export type Cod = number
export type IconId = string
export type Temperature = number

export type CoordsItem = {
  lat: number,
  lon: number
}

export type MainItem = {
  temp: number,
  feelsLike: number,
  tempMin: number,
  tempMax: number,
  pressure: number,
  humidity: number,
  seaLvl: number,
  grndLvl: number
}

export type WeatherDataItem = {
  id: number,
  main: string,
  description: string,
  icon: string
}

export type WindItem = {
  speed: number,
  deg: number,
  gust?: string
}

export type CloudsItem = {
  all: number
}

export type RainItem = {
  '1h'?: number,
  '3h'?: number
}

export type SnowItem = {
  '1h'?: number,
  '3h'?: number
}

export type SysItem = {
  country?: string,
  id?: number,
  message?: string,
  sunrise?: number,
  sunset?: number
}