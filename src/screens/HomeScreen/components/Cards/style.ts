import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginVertical: 10,
    width: '45%',
    aspectRatio: 150/132,
    flexDirection: 'column',
    justifyContent: "space-between"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  temp: {
    fontSize: 17,
  },
  card: {
    shadowColor: 'black',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    borderRadius: 5
  },
  imgContainer:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  img:{
    height: 80,
    width: 80
  }

})