import {ImageSourcePropType} from "react-native";

export const WeatherImages = {
  Clouds: require('../assets/weatherImage/Clouds.png'),
  Rain: require('../assets/weatherImage/Rain.png'),
  Storm: require('../assets/weatherImage/Storm.png'),
  Clear: require('../assets/weatherImage/Sun.png')
}

type TabImagesArray = {
  [x: string]: ImageSourcePropType,
}

export const TabImages:TabImagesArray = {
  City: require('../assets/UIImage/City.png'),
  Daily: require('../assets/UIImage/Daily.png'),
  Hourly: require('../assets/UIImage/Hourly.png')
}