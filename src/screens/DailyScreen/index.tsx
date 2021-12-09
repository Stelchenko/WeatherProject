import React, {useState} from "react";
import RNLocation from 'react-native-location';
import DailyScreenView from "./dailyScreenView";



const Index = () => {

  const [viewLocation, setViewLocation] = useState<{latitude: number, longitude: number} | null>(null)
  const getLocation = async () => {

    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse' // or 'fine'
      }
    });

    console.log(permission)

    let location;
    if(!permission) {
      permission = await RNLocation.requestPermission({
        ios: "whenInUse",
        android: {
          detail: "coarse",
          rationale: {
            title: "We need to access your location",
            message: "We use your location to show where you are on the map",
            buttonPositive: "OK",
            buttonNegative: "Cancel"
          }
        }
      })
      console.log(permission)
      location = await RNLocation.getLatestLocation({timeout: 100})
      console.log(location)
      setViewLocation(location)

    } else {
      location = await RNLocation.getLatestLocation({timeout: 100})
      console.log(location)
      setViewLocation(location)
    }
  }
  return (
    <DailyScreenView viewLocation={viewLocation} getLocation={getLocation} />
  )
}

export default Index