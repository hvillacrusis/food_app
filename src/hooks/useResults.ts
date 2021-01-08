import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState<Array<any>>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const searchApi = async ({searchTerm}: {searchTerm: string}) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };
  //call when rendered
  useEffect(() => {
    searchApi({searchTerm: 'las vegas'});
  }, []);

  return [searchApi, results, errorMessage] as const;
};
