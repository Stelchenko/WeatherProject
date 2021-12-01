import React, {FC, useCallback} from 'react'
import {View, TextInput, Image, TouchableOpacity} from "react-native";
import {styles} from "./style";
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
      <Image style={styles.searchIcon} source={require('../../../../assets/UIImage/Search.png')}/>
      <View style={styles.inputContainer}>
        <TextInput style={styles.searchInput}
                   placeholder={'Enter city name...'}
                   onChangeText={text => onChangeText(text, openSearch, closeSearch, search, setText)}
                   value={text}
        />
        <TouchableOpacity onPress={() => {
          setText('');
          closeSearch()
        }}>
          {
            text ? <Image style={styles.closeIcon} source={require('../../../../assets/UIImage/CloseIcon.png')}/>
              : null
          }
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default SearchInput
