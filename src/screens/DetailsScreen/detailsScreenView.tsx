import React, {FC} from "react";
import {ActivityIndicator, Image, Text, View} from "react-native";
import {styles} from "./style";
import {DetailsScreenViewProps} from "./type";

const DetailsScreenView: FC<DetailsScreenViewProps> = props => {
  const {currentCity, isLoading, date} = props

  return (
    isLoading
      ? <View style={styles.screen}><ActivityIndicator/></View>
      : <View style={styles.screen}>
        <Text style={styles.text}>{date.date} {"\n"} {date.time} </Text>
        <Image style={styles.img} source={{uri: `https://openweathermap.org/img/wn/${currentCity.iconId}.png`}}/>
        <Text style={styles.text}>{currentCity.temp >= 0 ? '+' + currentCity.temp : currentCity.temp} C</Text>
      </View>
  )
}

export default DetailsScreenView