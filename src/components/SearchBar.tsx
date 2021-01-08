import React from 'react';
import {StyleSheet, TextInput, TextStyle, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface ISearchBarProps {
  term: string;
  onTermChange(newTerm: string): void;
  onTermSubmit(): void;
}
interface Style {
  backgroundStyle: ViewStyle;
  inputStyle: TextStyle;
  iconStyle: TextStyle;
}
const SearchBar = ({term, onTermChange, onTermSubmit}: ISearchBarProps) => {
  return (
    <View style={styles.backgroundStyle}>
      <Icon name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm: string) => onTermChange(newTerm)}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create<Style>({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 14,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
