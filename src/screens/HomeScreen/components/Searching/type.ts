import {WeatherListItem} from "../../../../types/weathers";

export type SearchInputProps = {
  search: (text: string) => void,
  closeSearch: () => void,
  openSearch: () => void
}

export type SearchingResultsProps = {
  isNotFound: boolean,
  searchCity: WeatherListItem,
  navigationHandler: (path: string, props: {}) => void
}

export type SearchingTableProps = {
  searchCity: WeatherListItem,
  isNotFound: boolean,
  navigationHandler: (path: string, props: {}) => void,
  isLoadingSearch: boolean
}