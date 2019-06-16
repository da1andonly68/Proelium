import React from 'react';
import { StyleSheet, Text, View, Navigator, Dimensions, Button, TouchableOpacity, Image
} from 'react-native';
import Constants from 'expo-constants';
import {randomNum, bot} from './gamecode/Run';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const backgroundColorGlobal= 'white';
const pale = '#fcfbe3';

export default class HomeScreen extends React.Component{
  botGoesFirst(){
    var num = randomNum(0, 1);
    if(num === 1){
      bot();
    }
  }
  render(){
    
      const {navigate} = this.props.navigation;

    return(
      <View style={styles.page}>
                <View style={styles.buttonHolder}>
                  <TouchableOpacity activeOpacity={0} onPress={this.botGoesFirst.bind(this)} onPressOut={() => navigate('Game')}>
                    <Image style={styles.logo} source={require('./assets/karate-stickman.png')} />
                  </TouchableOpacity>
                </View>
      </View>   
    )
  }
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: backgroundColorGlobal,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    // padding: 1,
    alignItems: 'center',
  },
    buttonHolder:{
    width: 450 / 423.5 * width,
    height: 450 / 423.5 * width,
    fontSize: 36,
    backgroundColor: backgroundColorGlobal,
    justifyContent: 'center',
    alignItems: 'center',
  },
    logo: {
    height: 300 / 423.5 * width,
    width: 300 / 423.5 * width,
    borderRadius: 0,
  },

});