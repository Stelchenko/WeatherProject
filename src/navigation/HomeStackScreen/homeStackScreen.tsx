import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DetailsScreen from "../../screens/DetailsScreen";
import HomeScreen from "../../screens/HomeScreen";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={'City'} component={HomeScreen}/>
      <HomeStack.Screen options={{headerShown: true, headerTintColor: "black"}} name={'Details'} component={DetailsScreen}/>
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen