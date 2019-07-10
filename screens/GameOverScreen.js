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
  AsyncStorage,
} from 'react-native';
import Constants from 'expo-constants';
import { winner, Fighter1, resetGame, getDifficulty } from '../gamecode/Run';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const backgroundColorGlobal= 'white';
const pale = '#fcfbe3';

export default class GameOverScreen extends React.Component{
    state = {
      'broze': '',
      'silver': '',
      'gold': '',
      'trophy': '',
      'bronzeSkulls':'',
      'silverSkulls':'',
      'goldSkulls':'',
      'trophySkulls':'',
   }
    componentDidMount(){
      AsyncStorage.getItem('broze').then((value) => this.setState({ 'broze': value }))
      AsyncStorage.getItem('silver').then((value) => this.setState({ 'silver': value }))
      AsyncStorage.getItem('gold').then((value) => this.setState({ 'gold': value }))
      AsyncStorage.getItem('trophy').then((value) => this.setState({ 'trophy': value }))
      AsyncStorage.getItem('brozeSkulls').then((value) => this.setState({ 'brozeSkulls': value }))
      AsyncStorage.getItem('silverSkulls').then((value) => this.setState({ 'silverSkulls': value }))
      AsyncStorage.getItem('goldSkulls').then((value) => this.setState({ 'goldSkulls': value }))
      AsyncStorage.getItem('trophySkulls').then((value) => this.setState({ 'trophySkulls': value }))
    }
    
    resetGG(){
      if(getDifficulty === "Easy"){
        //do a thing
      }
      resetGame();//sets all game values back to start and generates new hands
      this.setState({dummy: 1});//refreshes the screen
     }
     
   setBronze = (value) => {
      AsyncStorage.setItem('broze', value);
      this.setState({ 'broze': value });
   }
  render(){

     const {navigate} = this.props.navigation;

     let img;
     
     if(winner === Fighter1.name){
      if(getDifficulty() === "Easy"){
        img = <Image style={styles.logo} source={require('../assets/bronze.png')} />
      }else if(getDifficulty() === "Normal"){
        img = <Image style={styles.logo} source={require('../assets/silver.png')} />
      }else if(getDifficulty() === "Hard"){
        img = <Image style={styles.logo} source={require('../assets/gold.png')} />
      }else if(getDifficulty() === "Nightmare"){
        img = <Image style={styles.logo} source={require('../assets/trophy.png')} />
      }else{
        img =  <Image style={styles.logo} source={require('../assets/skull.png')} />
      }
     }else{
       img =  <Image style={styles.logo} source={require('../assets/skull.png')} />
     }

    return(
      <View style={styles.page}>
        <View style={styles.buttonHolder}>
            <TouchableOpacity activeOpacity={0} onPress={this.resetGG.bind(this)} onPressOut={() => navigate('Home')}>
                {img}
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: backgroundColorGlobal,
    justifyContent: 'center',
    alignItems: 'center',
  },
    buttonHolder:{
    width: 350 / 423.5 * width,
    height: 350 / 423.5 * width,
    fontSize: 36,
    backgroundColor: backgroundColorGlobal,
    justifyContent: 'center',
    borderRadius: (350 / 2) / 423.5 * width,
    shadowOffset: { width: 10, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 30,
    shadowColor: 'black',
    elevation: 10,
    alignItems: 'center',
  },
    logo: {
    height: 350 / 423.5 * width,
    width: 350 / 423.5 * width,
    borderRadius: (350 / 2) / 423.5 * width,
  },

});