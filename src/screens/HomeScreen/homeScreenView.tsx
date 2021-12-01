import React, {FC} from "react";
import {Keyboard, TouchableWithoutFeedback, View} from "react-native";
import SearchInput from "./components/Searching/searchInput";
import SearchingTable from "./components/Searching/searchingTable";
import Home from "./components/Home";
import {styles} from "./style";
import {HomeScreenViewProps} from "./type";

const HomeScreenView: FC<HomeScreenViewProps> = props => {
  const {
    openSearchingHandler,
    fetchWeather,
    closeSearchingHandler,
    searchHandler,
    navigationHandler,
    weathersList,
    isLoading,
    isSearching,
    searchCity,
    isNotFound,
    isLoadingSearch
  } = props

  return (
    <View style={styles.screen}>
      <SearchInput openSearch={openSearchingHandler} closeSearch={closeSearchingHandler} search={searchHandler}/>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {isSearching
          ? <SearchingTable searchCity={searchCity} isNotFound={isNotFound} isLoadingSearch={isLoadingSearch}
                            navigationHandler={navigationHandler}/>
          : <Home fetchWeather={fetchWeather} weathersList={weathersList} isLoading={isLoading}
                  navigationHandler={navigationHandler}/>
        }
      </TouchableWithoutFeedback>

    </View>
  )
}

export default HomeScreenView