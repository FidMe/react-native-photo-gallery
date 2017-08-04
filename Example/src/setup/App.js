import { StackNavigator } from 'react-navigation';
import { List, Catalog } from '../screens';

const Navigator = StackNavigator({
  List: {
    screen: List,
  },
  Catalog: {
    screen: Catalog,
  },
});

export const App = Navigator;
