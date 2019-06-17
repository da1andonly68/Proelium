import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import { randomNum, bot, setDifficulty, resetGame } from './gamecode/Run';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const backgroundColorGlobal = 'white';
const pale = '#fcfbe3';

var unSelectedColor = "grey";
var selectedColor = "red";

export var difficulty = "Normal";

export default class HomeScreen extends React.Component {
  
  startGame(){
    this.setDifficulty();
    resetGame();
    this.botGoesFirst();
  }

  botGoesFirst() {
    var num = randomNum(0, 1);
    if (num === 1) {
      bot();
    }
  }

  getDifficulty(diff){
    difficulty = diff;
    this.setState({dummy: 1});
  }

  setDifficulty(){
    setDifficulty(difficulty);
  }
  render() {

    const { navigate } = this.props.navigation;

    let easy;
    let normal;
    let hard;
    let nightmare;

    if(difficulty === "Easy"){
      easy = <Button title="Easy" color="green" style={styles.difficultyButton}/>
    }else{
      easy = <Button title="Easy" color={unSelectedColor} style={styles.difficultyButton} onPress={this.getDifficulty.bind(this, "Easy")}/>
    }

    if(difficulty === "Normal"){
      normal = <Button title="Normal" color="orange" style={styles.difficultyButton} />
    }else{
      normal = <Button title="Normal" color={unSelectedColor} style={styles.difficultyButton} onPress={this.getDifficulty.bind(this, "Normal")}/>
    }
        
    if(difficulty === "Hard"){
      hard = <Button title="Hard" color={selectedColor} style={styles.difficultyButton} />
    }else{
      hard = <Button title="Hard" color={unSelectedColor} style={styles.difficultyButton} onPress={this.getDifficulty.bind(this, "Hard")}/>
    }
    if(difficulty === "Nightmare"){
      nightmare = <Button title="Nightmare" color="black" style={styles.difficultyButton} />
    }else{
      nightmare = <Button title="Nightmare" color={unSelectedColor} style={styles.difficultyButton} onPress={this.getDifficulty.bind(this, "Nightmare")}/>
    }
    return (
      <View style={styles.page}>

      <View style={styles.top}></View>

      <View style={styles.content}>
        <View style={styles.buttonHolder}>
          <TouchableOpacity
            activeOpacity={0}
            onPress={this.startGame.bind(this)}
            onPressOut={() => navigate('Game')}>
            <Image
              style={styles.logo}
              source={require('./assets/karate-stickman.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.difficultySetting}>
            {easy}
            {normal}
            {hard}
            {nightmare}
        </View>

        <View style={styles.catalogBox}>
          <Button title="View Card Catalog" color="grey" onPress={() => navigate('Catalog')}/>
        </View>

      </View>
           <View style={styles.bottom}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: backgroundColorGlobal,
    alignItems: 'center',
  },
  content:{
    flex: 1,
    backgroundColor: backgroundColorGlobal,
    justifyContent: 'space-between',
  },
  difficultySetting:{
    flex: (0.6 / 701.8) * height,
    justifyContent: 'space-between',
    paddingLeft: (75 / 423.5) * width,
    paddingRight: (75 / 423.5) * width,
  },
  buttonHolder: {
    width: (450 / 423.5) * width,
    height: (300 / 423.5) * width,
    fontSize: 36,
    backgroundColor: backgroundColorGlobal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: (250 / 423.5) * width,
    width: (250 / 423.5) * width,
    borderRadius: 0,
  },
    bottom:{
    flex: 0.1,
    backgroundColor: backgroundColorGlobal,
  },
  top:{
    flex: 0.15,
    backgroundColor: backgroundColorGlobal,
  },
  catalogBox:{
    flex: 0.2,
    backgroundColor: backgroundColorGlobal,
    paddingLeft: (75 / 423.5) * width,
    paddingRight: (75 / 423.5) * width,
    justifyContent: 'center',
  },
  difficultyButton:{
    height: 100,
  }
});
