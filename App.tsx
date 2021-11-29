/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./src/screens/HomeScreen";
import {Provider, useDispatch} from "react-redux";
import store from "./src/store/store";
import Index from "./src/screens/HomeScreen";
import {WeatherListTypes} from "./src/store/types/weatherListTypes";
import {SafeAreaProvider} from "react-native-safe-area-context";
import MyTabs from "./src/navigation/BottomTabNavigator/bottomTab";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  }
}

const App = () => {


  return (

    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <MyTabs/>
      </NavigationContainer>
    </Provider>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50

  },

  title: {
    backgroundColor: 'red'
  }
});

export default App;
