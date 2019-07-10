import * as React from 'react';
import { AppRegistry } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import * as firebase from 'firebase';
import '@firebase/firestore';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import CardCatalogScreen from './screens/CardCatalogScreen';
import InstructionsScreen from './screens/InstructionsScreen';


  const firebaseConfig = {
    apiKey: "AIzaSyA1clRy02TBoHL68wgmGrjrlViOamMkcaE",
    authDomain: "proelium-364.firebaseapp.com",
    databaseURL: "https://proelium-364.firebaseio.com",
    storageBucket: "gs://proelium-364.appspot.com"
  };

  firebase.initializeApp(firebaseConfig);
  export var database = firebase.firestore();


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Game: {screen: GameScreen},
  Gameover: {screen: GameOverScreen},
  Catalog: {screen: CardCatalogScreen},
  Instructions: {screen: InstructionsScreen},
},
{
  headerMode: 'none',
});


const App = createAppContainer(MainNavigator);
export default App;
AppRegistry.registerComponent('App', () => App);

