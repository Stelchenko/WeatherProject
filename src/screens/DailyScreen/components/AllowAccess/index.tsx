import React, {FC} from "react";
import {Button, Image, Text, View} from "react-native";
import {AllowAccessProps} from "./type";

const AllowAccess:FC<AllowAccessProps> = props => {
  const {getLocation} = props
  return (
    <View>
      <Image source={require('../../../../assets/UIImage/NotFound.png')}/>
      <Text style={{textAlign: "center"}}>Data is not available</Text>
      <Button title={'Get Lat Lon'} onPress={getLocation}/>
    </View>
  )
}

export default AllowAccess