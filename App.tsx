/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView, StyleSheet,
} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Provider} from "react-redux";
import store from "./src/store/store";
import MyTabs from "./src/navigation/BottomTabNavigator/bottomTab";

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
      <SafeAreaView style={styles.screen}>
        <NavigationContainer theme={MyTheme}>
          <MyTabs/>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

export default App;
