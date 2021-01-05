import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import {SCREENS} from './src/types';

const navigator = createStackNavigator(
  {
    [SCREENS.Search]: SearchScreen,
  },
  {
    initialRouteName: SCREENS.Search,
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  },
);

export default createAppContainer(navigator);
