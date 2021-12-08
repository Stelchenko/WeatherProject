import React, {FC, useEffect} from "react";
import {Text} from "react-native";
import {ResultsProps} from "./type";
import {getWeatherByDayFromApi} from "../../../../../api/weatherApi";

const Results: FC<ResultsProps> = props => {
  const {viewLocation} = props
  useEffect(() => getWeatherByDayFromApi(viewLocation), [])
  return(
    <Text>Lat: {viewLocation?.latitude} Lon: {viewLocation?.longitude}</Text>
  )
}

export default Results