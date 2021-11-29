import {WeatherListItem} from "../../../../types/weathers";

export type HomeProps = {
  isLoading: boolean,
  fetchWeather: () => void,
  weathersList: WeatherListItem[],
  navigationHandler: (path:string, props: {}) => void
}