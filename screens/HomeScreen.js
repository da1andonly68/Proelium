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
import { randomNum, bot, setDifficulty, resetGame } from '../gamecode/Run';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const backgroundColorGlobal = 'white';
const pale = '#fcfbe3';

var unSelectedColor = "#666666";

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
    let logo;
    if(difficulty === "Easy"){
      easy = <Button title="Easy" color="green" style={styles.difficultyButton}/>;
      logo = <Image style={styles.logo} source={require('../assets/handfire-small.png')}/>
    }else{
      easy = <Button title="Easy" color={unSelectedColor} style={styles.difficultyButton} onPress={this.getDifficulty.bind(this, "Easy")}/>
    }

    if(difficulty === "Normal"){
      normal = <Button title="Normal" color="orange" style={styles.difficultyButton} />
      logo = <Image style={styles.logo} source={require('../assets/handfire-med.png')}/>
    }else{
      normal = <Button title="Normal" color={unSelectedColor} style={styles.difficultyButton} onPress={this.getDifficulty.bind(this, "Normal")}/>
    }
        
    if(difficulty === "Hard"){
      hard = <Button title="Hard" color="red" style={styles.difficultyButton} />
      logo = <Image style={styles.logo} source={require('../assets/handfire-large.png')}/>
    }else{
      hard = <Button title="Hard" color={unSelectedColor} style={styles.difficultyButton} onPress={this.getDifficulty.bind(this, "Hard")}/>
    }
    if(difficulty === "Nightmare"){
      nightmare = <Button title="Nightmare" color="black" style={styles.difficultyButton} />
      logo = <Image style={styles.logo} source={require('../assets/nuke.png')}/>
    }else{
      nightmare = <Button title="Nightmare" color={unSelectedColor} style={styles.difficultyButton} onPress={this.getDifficulty.bind(this, "Nightmare")}/>
    }
    return (
      <View style={styles.page}>

      <View style={styles.top}>
      <Image style={styles.titleLogo} source={require('../assets/title.png')}/>
      </View>


      <View style={styles.content}>
        <View style={styles.buttonHolder}>
          <TouchableOpacity
            activeOpacity={0}
            onPress={this.startGame.bind(this)}
            onPressOut={() => navigate('Game')}>
            {logo}
          </TouchableOpacity>
        </View>

        <View style={styles.spacingMid}></View>

        <View style={styles.difficultySetting}>
            {easy}
            {normal}
            {hard}
            {nightmare}
        </View>

        <View style={styles.menuBox}>
          <View style={styles.menuBubble}>
          <TouchableOpacity activeOpacity={0} onPress={() => navigate('Catalog')}>
          <Image style={styles.bubbleIcon} source={require('../assets/deck.png')} />
          </TouchableOpacity>
          </View>

        <View style={styles.bubbleSpacing}></View>

          <View style={styles.menuBubble}>
          <TouchableOpacity activeOpacity={0} onPress={() => navigate('Instructions')}>
          <Image style={styles.bubbleIcon} source={require('../assets/help.png')} />
          </TouchableOpacity>
          </View>

        <View style={styles.bubbleSpacing}></View>

          <View style={styles.menuBubble}>
          <TouchableOpacity activeOpacity={0} onPress={() => navigate('History')}>
          <Image style={styles.bubbleIcon} source={require('../assets/collection.png')}/>
          </TouchableOpacity>
          </View>
          
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
    height: (260 / 423.5) * width,
    fontSize: 36,
    backgroundColor: backgroundColorGlobal,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  logo: {
    height: (280 / 423.5) * width,
    width: (300 / 423.5) * width,
    borderRadius: 0,
  },
  titleLogo: {
    height: (100 / 423.5) * width,
    width: (300 / 423.5) * width,
    borderRadius: 0,
    zIndex: 6,
  },
    bottom:{
    flex: 0.05,
    backgroundColor: backgroundColorGlobal,
  },
  top:{
    flex: 0.25,
    zIndex: 2,
    justifyContent: 'flex-end',
  },
  menuBox:{
    flex: 0.2,
    paddingLeft: (75 / 423.5) * width,
    paddingRight: (75 / 423.5) * width,
    justifyContent: 'center',
    backgroundColor: backgroundColorGlobal,
    flexDirection: 'row',
  },
  difficultyButton:{
    height: 100,
  },
  spacingMid:{
    height: 0 / 701.8 * height,
    backgroundColor: backgroundColorGlobal,
  },
  menuBubble:{
    width: 70 / 423.5 * width,
    height: 70 / 701.8 * height,
    borderRadius: (70 / 2) / 423.5 * width / 701.8 * height,
    backgroundColor: backgroundColorGlobal,
    zIndex: 6,
  },
  bubbleIcon: {
    height: (70 / 423.5) * width,
    width: (70 / 423.5) * width,
    borderRadius: (70 / 2) / 423.5 * width / 701.8 * height,
  },
  bubbleSpacing:{
    width: 20 / 423.5 * width,
  }
});
