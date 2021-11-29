import React, {FC} from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Card from "./Card";
import {styles} from "./style";
import {WeatherImages} from "../../../../utils/images";
import {WeatherCardProps} from "./type";


const WeatherCard: FC<WeatherCardProps> = props => {
  const {item, temp, navigationHandler} = props;

  return (
    <Card
      navigationHandler={navigationHandler}
      style={styles.inputContainer}
      title={item.cityName}
    >
      <View>
        <Text numberOfLines={1} style={styles.title}>{item.cityName}</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{uri: `https://openweathermap.org/img/wn/${item.iconId}.png`}}/>
      </View>
      <View>
        <Text style={styles.temp}>{temp} C</Text>
      </View>
    </Card>
  )
}

export default WeatherCard;