import React, {FC} from 'react'
import {FlatList, RefreshControl} from "react-native";
import WeatherCard from "../Cards/WeatherCard";
import {styles} from "./style";
import {HomeProps} from "./type";


const Home: FC<HomeProps> = props => {
  const {
    isLoading,
    fetchWeather,
    weathersList,
    navigationHandler,
  } = props
  console.log(weathersList)

  return (
    <FlatList
      columnWrapperStyle={{justifyContent: 'space-between'}}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      style={styles.flatList}
      keyExtractor={(item) => item.id}
      data={weathersList}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={fetchWeather}
        />
      }
      renderItem={itemData => (
        <WeatherCard item={itemData.item} navigationHandler={navigationHandler}
                     temp={itemData.item.temp < 0 ? Math.trunc(itemData.item.temp).toString() : '+' + Math.trunc(itemData.item.temp)}/>)}/>

  )
}

export default Home