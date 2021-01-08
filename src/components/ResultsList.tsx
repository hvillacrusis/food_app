import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {IResultsDetailProps} from '../types/result-details';
import ResultsDetail from './ResultsDetail';
interface IResultsListProps {
  title: string;
  results: Array<any>;
}
const ResultsList = ({title, results}: IResultsListProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result: any) => result.id}
        renderItem={({item}: {item: IResultsDetailProps}) => {
          return <ResultsDetail result={item} />;
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

export default ResultsList;
