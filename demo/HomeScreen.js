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

    let button1;
    let button2;
    let button3;

    if(difficulty === "Easy"){
      button1 = <Button title="Easy" color={selectedColor}/>
    }else{
      button1 = <Button title="Easy" color={unSelectedColor} onPress={this.getDifficulty.bind(this, "Easy")}/>
    }

    if(difficulty === "Normal"){
      button2 = <Button title="Normal" color={selectedColor}/>
    }else{
      button2 = <Button title="Normal" color={unSelectedColor} onPress={this.getDifficulty.bind(this, "Normal")}/>
    }
        
    if(difficulty === "Hard"){
      button3 = <Button title="Hard" color={selectedColor}/>
    }else{
      button3 = <Button title="Hard" color={unSelectedColor} onPress={this.getDifficulty.bind(this, "Hard")}/>
    }
    return (
      <View style={styles.page}>

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
            {button1}
            {button2}
            {button3}
        </View>

      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: backgroundColorGlobal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content:{
  },
  difficultySetting:{
    flex: 0.5,
    justifyContent: 'space-between',
    paddingLeft: 75 / 423.5 * width,
    paddingRight: 75 / 423.5 * width,
  },
  buttonHolder: {
    width: (450 / 423.5) * width,
    height: (450 / 423.5) * width,
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
});
