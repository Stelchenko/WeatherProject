import React, {FC} from "react";
import {View, StyleSheet, ActivityIndicator} from "react-native";
import SearchingResults from "./searchingResults";
import {SearchingTableProps} from "./type";

const SearchingTable: FC<SearchingTableProps> = props => {
  const {searchCity, isNotFound, navigationHandler, isLoadingSearch} = props

  return (
    <View style={styles.screen}>
      {
        isLoadingSearch
          ? <View style={styles.indicator}><ActivityIndicator size={'large'}/></View>
          : <SearchingResults searchCity={searchCity} isNotFound={isNotFound} navigationHandler={navigationHandler}/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    marginVertical: 20,
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
  },
  resultContainer: {
    marginVertical: 20,
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

export default SearchingTable