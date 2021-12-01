import React, {FC, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {convertDate} from "../../utils/dateUtils";
import DetailsScreenView from "./detailsScreenView";
import {fetchWeatherListByNameRequest} from "../../store/actions/weather";
import {DetailsScreenProps} from "./type";

const DetailsScreen: FC<DetailsScreenProps> = ({route}) => {
  const {title} = route.params

  const dispatch = useDispatch();
  useEffect(() => fetchWeatherByName(), [])
  const currentCity = useSelector((state: RootState) => state.weather.currentCity)
  const isLoading = useSelector((state: RootState) => state.weather.isLoadingCurrent)
  const fetchWeatherByName = () => {
    dispatch(fetchWeatherListByNameRequest(title))
  }
  const date = convertDate((currentCity.dt + currentCity.timezone - 10800))

  return (
    <DetailsScreenView
      currentCity={currentCity}
      isLoading={isLoading}
      date={date}
    />
  )
}

export default DetailsScreen