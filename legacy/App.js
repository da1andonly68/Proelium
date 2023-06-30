import * as React from 'react';
import { AppRegistry } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import CardCatalogScreen from './screens/CardCatalogScreen';
import InstructionsScreen from './screens/InstructionsScreen';
import HistoryScreen from './screens/HistoryScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Game: {screen: GameScreen},
  Gameover: {screen: GameOverScreen},
  Catalog: {screen: CardCatalogScreen},
  Instructions: {screen: InstructionsScreen},
  History: {screen: HistoryScreen},
},
{
  headerMode: 'none',
});


const App = createAppContainer(MainNavigator);
export default App;
AppRegistry.registerComponent('App', () => App);

