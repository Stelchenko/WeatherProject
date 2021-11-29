import React, {FC, useCallback} from 'react'
import {View, Text, Button, TextInput, FlatList, Image, TouchableOpacity} from "react-native";
import {styles} from "./style";
import {useDispatch} from "react-redux";
import {WeatherListTypes} from "../../../../store/types/weatherListTypes";
import {SearchInputProps} from "./type";

const SearchInput: FC<SearchInputProps> = props => {

  const {openSearch, closeSearch, search} = props;
  const [text, setText] = React.useState<string>("");

  const onChangeText = useCallback((text: string, openSearch: () => void, closeSearch: () => void, search: (text: string) => void, onChange: (text: string) => void) => {
    if (text === '') {
      onChange(text)
      closeSearch()
    } else {
      openSearch()
      onChange(text)
      search.call(this, text)
    }
  }, [text, openSearch, closeSearch])

  return (
    <View style={styles.searchContainer}>
      <Image source={require('../../../../assets/UIImage/Search.png')}/>
      <TextInput style={styles.searchInput}
                 placeholder={'Enter city name...'}
                 onChangeText={text => onChangeText(text, openSearch, closeSearch, search, setText)}
                 value={text}
      />
      <TouchableOpacity onPress={() => {
        setText('');
        closeSearch()
      }}><Image style={styles.closeIcon}
                source={require('../../../../assets/UIImage/CloseIcon.png')}/></TouchableOpacity>
    </View>
  )
}

export default SearchInput
