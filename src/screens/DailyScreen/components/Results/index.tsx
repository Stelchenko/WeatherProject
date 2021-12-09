import React, {FC, useEffect} from "react";
import {FlatList, RefreshControl, View} from "react-native";
import {ResultsProps} from "./type";
import {useDispatch, useSelector} from "react-redux";
import {fetchDailyWeatherRequest} from "../../../../store/actions/weather";
import {RootState} from "../../../../store/store";
import DailyCard from "../DailyCard";
import {styles} from "./style";

const Results: FC<ResultsProps> = props => {
  const {viewLocation} = props
  const dailyInfo = useSelector((state: RootState) => state.daily.dailyInfo);
  const isLoading = useSelector((state: RootState) => state.daily.isLoadingDaily);

  const dispatch = useDispatch();

  const fetchDailyWeather = () => {
    dispatch(fetchDailyWeatherRequest(viewLocation))
  }

  useEffect(() => fetchDailyWeather(), [])

  return (
    <View style={styles.flatList}>
      <FlatList
        data={dailyInfo}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={fetchDailyWeather}
          />
        }
        showsVerticalScrollIndicator={false}
        renderItem={itemData => (
          <DailyCard dailyInfo={itemData.item}/>)}/>
    </View>
  )
}

export default Results