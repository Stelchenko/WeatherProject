import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TabImages} from "../../utils/images";
import HomeStackScreen from "../HomeStackScreen/homeStackScreen";
import Index from "../../screens/DailyScreen";
import HourlyScreen from "../../screens/HourlyScreen/hourlyScreen";

const Tab = createBottomTabNavigator()

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ()=> {
          return <Image source={TabImages[route.name]}/>
        },
        headerShown: false,
      })}>
      <Tab.Screen name={'City'} component={HomeStackScreen}/>
      <Tab.Screen name={'Daily'} component={Index}/>
      <Tab.Screen name={'Hourly'} component={HourlyScreen}/>
    </Tab.Navigator>
  )
}

export default MyTabs