import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SearchScreen from './src/screens/SearchScreen';
import {SCREENS} from './src/types/screens';

const navigator = createStackNavigator(
  {
    [SCREENS.Search]: SearchScreen,
    [SCREENS.ResultsShow]: ResultsShowScreen,
  },
  {
    initialRouteName: SCREENS.Search,
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  },
);

export default createAppContainer(navigator);
