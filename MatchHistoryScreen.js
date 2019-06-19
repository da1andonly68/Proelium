import React from 'react';
import { StyleSheet, Text, View, Navigator, Dimensions, Button, TouchableOpacity, Image, ScrollView
} from 'react-native';
import CodePush from 'react-native-code-push';
import { GameConsts } from './gamecode/Run';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const backgroundColorGlobal= 'white';
const darkGrey = '#989898';
const infoBoxColor = darkGrey;

export default class MatchHistoryScreen extends React.Component{

  render(){

     const {navigate} = this.props.navigation;

    return(

      <ScrollView style={styles.page} contentContainerStyle={styles.contentContainer}>

        <View style={styles.top}></View>

        <View style={styles.screenTitleBox}>
          <Text style={styles.screenTitle}>Instructions</Text>
        </View>

        <View style={styles.spacing}></View>
        <Text style={styles.paragraph}>Match History is to go here</Text>

        <View style={styles.bottom}></View>

      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  },
  page: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: backgroundColorGlobal,
    paddingVertical: (40 / 701.8) * height,
    alignItems: 'center',
    paddingLeft: 15 / 423.5 * width,
  },
  screenTitleBox:{
    height: 50 / 701.8 * height,
    width: 400 / 423.5 * width,
    backgroundColor: backgroundColorGlobal,
    alignItems: 'center',
  },
  screenTitle:{
      color: 'black',
      fontSize: 50 / 701.8 * height,
      fontWeight: 'bold',
      textAlign: 'center',
  },
  // header:{
  //     color: 'white',
  //     fontSize: 32 / 701.8 * height,
  //     fontWeight: 'bold',
  //     textAlign: 'center',
  // },
  paragraph:{
      color: 'black',
      fontSize: 24 / 701.8 * height,
      textAlign: 'center',
      paddingLeft: 20 / 423.5 * width,
      paddingRight: 20 / 423.5 * width,
      fontWeight: 'bold',
  },
  bottom:{
    flex: 0.05,
    backgroundColor: backgroundColorGlobal,
    zIndex: 1,
  },
  top:{
    flex: 0.05,
    backgroundColor: backgroundColorGlobal,
  },
  spacing:{
    height: 10 / 701.8 * height,
  },
  // card:{
  //   backgroundColor: darkGrey,
  //   width: width - (((20 / 423.5)*width) * 2),
  // },
});