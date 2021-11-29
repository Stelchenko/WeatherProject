import React, {FC, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {
  closeSearch,
  fetchWeatherBySearchRequest,
  fetchWeatherListRequest,
  openSearch,
} from "../../store/actions/weather";
import {RootState} from "../../store/store";
import HomeScreenView from "./homeScreenView";
import {HomeScreenProps} from "./type";

const HomeScreen: FC<HomeScreenProps> = props => {

  const {navigation} = props

  const navigationHandler = (path: string, props: {}) => {
    navigation.navigate(path, props)
  }

  const dispatch = useDispatch();
  const weathersList = useSelector((state: RootState) => state.weather.weathersList);
  const isLoading = useSelector((state: RootState) => state.weather.isLoading);
  const searchText = useSelector((state: RootState) => state.weather.searchText);
  const isSearching = useSelector((state: RootState) => state.weather.isSearching);
  const searchCity = useSelector((state: RootState) => state.weather.searchCity);
  const isNotFound = useSelector((state: RootState) => state.weather.isNotFound);
  const isLoadingSearch = useSelector((state: RootState) => state.weather.isLoadingSearch)

  const fetchWeather = () => {
    dispatch(fetchWeatherListRequest())
  }
  useEffect(() => fetchWeather(), [])

  const openSearchingHandler = () => {
    dispatch(openSearch())
  }

  const searchHandler = (cityName: string) => {
    dispatch(fetchWeatherBySearchRequest(cityName))
  }

  const closeSearchingHandler = () => {
    dispatch(closeSearch())
  }

  return (
    <HomeScreenView
      openSearchingHandler={openSearchingHandler}
      fetchWeather={fetchWeather}
      closeSearchingHandler={closeSearchingHandler}
      searchHandler={searchHandler}
      navigationHandler={navigationHandler}
      weathersList={weathersList}
      isLoading={isLoading}
      isSearching={isSearching}
      searchCity={searchCity}
      isNotFound={isNotFound}
      isLoadingSearch={isLoadingSearch}
    />
  )
}



export default HomeScreen