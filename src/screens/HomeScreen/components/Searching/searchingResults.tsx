import React, {FC} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {SearchingResultsProps} from "./type";

const SearchingResults: FC<SearchingResultsProps> = props => {
  const {isNotFound, searchCity, navigationHandler} = props;

  return (
    <View style={styles.screen}>
      <Text style={styles.searchText}>SEARCH RESULTS</Text>
      {isNotFound
        ? <View style={styles.notFoundScreen}>
          <Image source={require('../../../../assets/UIImage/NotFound.png')}/>
          <Text style={styles.notFoundText}>NOT FOUND</Text>
        </View>
        : <TouchableOpacity onPress={() => navigationHandler('Details', {title: searchCity.cityName})}>
          <View style={styles.resultContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.cityName}>{searchCity.cityName}</Text>
              <Text
                style={styles.tmp}>{searchCity.temp >= 0 ? '+' : ''}{searchCity.temp} C</Text>
            </View>
            <Image style={{height: 80, width: 80}}
                   source={{uri: `https://openweathermap.org/img/wn/${searchCity.iconId}.png`}}/>
          </View>
        </TouchableOpacity>}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    marginVertical: 0,
  },
  notFoundScreen: {
    flex: 1,
    width: '100%',
    alignItems: "center",
    justifyContent: "center"
  },
  notFoundText: {
    marginVertical: 20
  },
  searchText: {
    fontWeight: '500',
    fontSize: 13,
    marginBottom: 10
  },
  resultContainer: {
    marginVertical: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cityName: {
    fontSize: 20,
    fontWeight: '700',
  },
  nameContainer: {
    flexDirection: "column"
  },
  tmp: {
    fontSize: 17,
    fontWeight: '400',
    paddingVertical: 15
  }
})

export default SearchingResults