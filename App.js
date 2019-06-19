import * as React from 'react';
import { AppRegistry } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './HomeScreen';
import GameScreen from './GameScreen';
import GameOverScreen from './GameOverScreen';
import CardCatalogScreen from './CardCatalogScreen';
import InstructionsScreen from './InstructionsScreen';
import MatchHistoryScreen from './MatchHistoryScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Game: {screen: GameScreen},
  Gameover: {screen: GameOverScreen},
  Catalog: {screen: CardCatalogScreen},
  Instructions: {screen: InstructionsScreen},
  History: {screen: MatchHistoryScreen},
},
{
  headerMode: 'none',
});


const App = createAppContainer(MainNavigator);
export default App;
AppRegistry.registerComponent('App', () => App);

