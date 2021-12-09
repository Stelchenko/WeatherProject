import React, {FC, useEffect} from "react";
import {FlatList, View} from "react-native";
import {ResultsProps} from "./type";
import {useDispatch, useSelector} from "react-redux";
import {fetchDailyWeatherRequest} from "../../../../store/actions/weather";
import {RootState} from "../../../../store/store";
import DailyCard from "../DailyCard";
import {styles} from "./style";

const Results: FC<ResultsProps> = props => {
  const {viewLocation} = props
  const dailyInfo = useSelector((state: RootState) => state.daily.dailyInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('!!!!!');
    console.log(dailyInfo)
  }, [dailyInfo])

  const fetchDailyWeather = () => {
    dispatch(fetchDailyWeatherRequest(viewLocation))
  }

  useEffect(() => fetchDailyWeather(), [])

  return (
    <View style={styles.card}>
      <FlatList
        data={dailyInfo}
        renderItem={itemData => (
          <DailyCard dailyInfo={itemData.item}/>)}/>
    </View>
  )
}

export default Results