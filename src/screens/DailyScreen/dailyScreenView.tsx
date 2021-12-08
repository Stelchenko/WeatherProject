import React, {FC} from "react";
import {View} from "react-native";
import {styles} from "./style";
import AllowAccess from "./components/AllowAccess";
import {DailyScreenViewProps} from "./type";
import Results from "./components/Results";

const DailyScreenView: FC<DailyScreenViewProps> = props => {
  const {viewLocation, getLocation} = props
  return (
    <View style={styles.screen}>
      {
        viewLocation
          ? <Results viewLocation={viewLocation}/>
          : <AllowAccess getLocation={getLocation}/>
      }
    </View>
  )
}

export default DailyScreenView