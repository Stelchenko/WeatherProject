import React, {FC} from "react";
import {Image, Text, View} from "react-native";
import {styles} from "./style";
import {convertDate} from "../../../../utils/dateUtils";
import {DailyCardProps} from "./type";

const DailyCard: FC<DailyCardProps> = props => {
  const {dailyInfo} = props

  return (
      <View style={styles.resultContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.cityName}>{convertDate(dailyInfo.dt).date}</Text>
          <Text
            style={styles.tmp}>{dailyInfo.temp.day >= 0 ? '+' : ''}{Math.trunc(dailyInfo.temp.day)} C</Text>
        </View>
        <Image style={{height: 80, width: 80}}
               source={{uri: `https://openweathermap.org/img/wn/${dailyInfo.weather[0].icon}.png`}}/>
      </View>
  )
}


export default DailyCard