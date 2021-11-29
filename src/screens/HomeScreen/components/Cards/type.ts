import {WeatherListItem} from "../../../../types/weathers";

export type CardProps = {
  navigationHandler: (path:string, props: {}) => void,
  title: string,
  style: {}
}

export type WeatherCardProps = {
  item: WeatherListItem,
  temp: string,
  navigationHandler: (path:string, props: {}) => void
}