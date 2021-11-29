import {WeatherListItem} from "../../types/weathers";

export type DetailsScreenViewProps = {
  currentCity: WeatherListItem,
  isLoading: boolean,
  date: { date: string, time: string }
}

export type DetailsScreenProps = {
  route: { params: { title: string } }
}