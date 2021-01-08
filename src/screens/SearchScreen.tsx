import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

type price = '$' | '$$' | '$$$' | '$$$$';

const SearchScreen = () => {
  const [term, setTerm] = useState<string>('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = ({price}: {price: price}): Array<any> => {
    return results.filter((result: any) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm: string) => setTerm(newTerm)}
        onTermSubmit={() => searchApi({searchTerm: term})}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice({price: '$'})}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice({price: '$$'})}
          title="Bit Pricier"
        />
        <ResultsList
          results={filterResultsByPrice({price: '$$$'})}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
