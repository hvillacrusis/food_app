import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import yelp from '../api/yelp';
import {IResultProps, RESULTS_PARAMS} from '../types/result-details';

const ResultsShowScreen = ({navigation}: {navigation: NavigationStackProp}) => {
  const [result, setResult] = useState<IResultProps>({
    name: null,
    photos: null,
  });

  const {name, photos} = result;
  const {getParam} = navigation;
  const id = getParam(RESULTS_PARAMS.id);

  const getResult = async ({id}: {id: string}) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult({id});
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text>{name}</Text>
      <FlatList
        data={photos}
        keyExtractor={(photo: string) => photo}
        renderItem={({item}: {item: string}) => {
          return <Image style={styles.image} source={{uri: item}} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
