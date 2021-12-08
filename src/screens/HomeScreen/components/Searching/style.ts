import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  searchInput: {
    width: '80%',
    height: 45,
    paddingHorizontal: 10,
    fontSize: 18,
    color: 'black'
  },
  searchContainer: {

    flexDirection: 'row',
    width: '100%',

    borderWidth: 1,
    borderColor: '#CDCDCD',
    borderRadius: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 0,
  },
  closeIcon: {
    marginRight: 10
  },
  searchIcon: {
    marginLeft: 10
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})