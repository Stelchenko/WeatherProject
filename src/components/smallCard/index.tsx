import React from "react";
import {Image, Text, View} from "react-native";

const SmallCard = props => {
  const {city} = props
  return (
    <View style={styles.resultContainer}>
      <View style={styles.nameContainer}>
        <Text style={styles.cityName}>{city.cityName}</Text>
        <Text
          style={styles.tmp}>{city.temp >= 0 ? '+' : ''}{city.temp} C</Text>
      </View>
      <Image style={{height: 80, width: 80}}
             source={{uri: `https://openweathermap.org/img/wn/${city.iconId}.png`}}/>
    </View>
  )
}