import React, {FC, useEffect} from "react";
import {Button, Text, View} from "react-native";
import {ResultsProps} from "./type";
import {getWeatherByDayFromApi} from "../../../../../api/weatherApi";
import {useDispatch, useSelector} from "react-redux";
import {fetchDailyWeatherRequest, fetchWeatherListRequest} from "../../../../store/actions/weather";
import {RootState} from "../../../../store/store";

const Results: FC<ResultsProps> = props => {
  const {viewLocation} = props
  const dailyInfo = useSelector((state: RootState) => state.weather.dailyInfo);
  const dispatch = useDispatch();
  useEffect(() => {console.log('!!!!!'); console.log(dailyInfo)}, [dailyInfo])
  const fetchDailyWeather = () => {
    dispatch(fetchDailyWeatherRequest(viewLocation))
  }
  // TODO Не эффектит
  useEffect(() => fetchDailyWeather, [])
  return(
    <View>
      <Text>Lat: {viewLocation?.latitude} Lon: {viewLocation?.longitude}</Text>
      <Button title={'press'} onPress={fetchDailyWeather}/>
    </View>
  )
}

export default Results