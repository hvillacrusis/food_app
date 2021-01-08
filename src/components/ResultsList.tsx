import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {NavigationStackProp} from 'react-navigation-stack';
import {IResultsDetailProps, RESULTS_PARAMS} from '../types/result-details';
import {SCREENS} from '../types/screens';
import ResultsDetail from './ResultsDetail';

interface IResultsListProps {
  title: string;
  results: Array<any>;
  navigation?: NavigationStackProp;
}

const ResultsList = ({title, results, navigation}: IResultsListProps) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result: any) => result.id}
        renderItem={({item}: {item: IResultsDetailProps}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation?.navigate(SCREENS.ResultsShow, {
                  [RESULTS_PARAMS.id]: item.id,
                })
              }>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList);
