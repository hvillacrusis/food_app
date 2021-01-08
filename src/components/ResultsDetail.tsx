import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {IResultsDetailProps} from '../types/result-details';
const ResultsDetail = ({result}: {result: IResultsDetailProps}) => {
  const {name, image_url, rating, review_count} = result;
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: image_url}} />
      <Text style={styles.nameStyle}>{name}</Text>
      <Text>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
  },
});

export default ResultsDetail;
