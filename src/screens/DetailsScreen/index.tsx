import React, {FC, useEffect, useState} from 'react'
import {StyleSheet} from "react-native";
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


  const date = convertDate((currentCity.dt + currentCity.timezone))

  console.log(Date.now())
  console.log(currentCity.dt)
  console.log(currentCity.timezone)
  console.log(currentCity.iconId)

  return(
    <DetailsScreenView
      currentCity={currentCity}
      isLoading={isLoading}
      date={date}
    />

  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: "center"
  },
  img: {
    width: 111,
    height: 111,
    marginVertical: 50
  }
})

export default DetailsScreen