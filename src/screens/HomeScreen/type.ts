import {WeatherListItem} from "../../types/weathers";

export type HomeScreenViewProps = {
  openSearchingHandler: () => void,
  fetchWeather: () => void,
  closeSearchingHandler: () => void,
  searchHandler: (cityName: string) => void,
  navigationHandler: (path:string, props: {}) => void,
  weathersList: WeatherListItem[],
  isLoading: boolean,
  isSearching: boolean,
  searchCity: WeatherListItem,
  isNotFound: boolean,
  isLoadingSearch: boolean,
}

export type HomeScreenProps = {
  navigation: {navigate: (path: string, props: {}) => void}
}