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
import { winner, Fighter1, resetGame, getDifficulty } from '../gamecode/Run';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const backgroundColorGlobal= 'white';

export default class GameOverScreen extends React.Component{
    state = {
      medals: 0,
   }
    componentDidMount(){
      this.getMedals();
    }

    getMedals(){
      switch(getDifficulty()){
        case "Easy":
          this.retreive("Bronze");
        break;
        case "Normal":
          this.retreive("Silver");
        break;
        case "Hard":
          this.retreive("Gold");
        break;
        case "Nightmare":
          this.retreive("Trophy");
        break;
      }
    }
    retreive = async (type) => {
      try {
          const value = await AsyncStorage.getItem(type);
          if(value === null){
              this.store(type, "0");
          }else{
              this.state.medals = parseInt(value);
              this.setState({dummy: 1});
          }

      }catch(err){
          throw(err);
      }
      if(winner === Fighter1.name){
        this.state.medals++;
        this.state.medals = this.state.medals.toString();
        try {
          await AsyncStorage.setItem(type, this.state.medals);
        } catch (err){
          console.log("Regarding storage: " + err);
        }
      }
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