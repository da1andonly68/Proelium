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
  ScrollView
} from 'react-native';
import CodePush from 'react-native-code-push';
import { GameConsts } from '../gamecode/Run';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const backgroundColorGlobal= 'white';
const darkGrey = '#666666';
const infoBoxColor = darkGrey;
const limeGreen = '#32CD32';


export default class CardCatalogScreen extends React.Component{

  render(){

     const {navigate} = this.props.navigation;

    return(

      <ScrollView style={styles.page} contentContainerStyle={styles.contentContainer}>

        <View style={styles.top}></View>

        <View style={styles.headerBox}>
          <Text style={styles.header}>Card Catalog</Text>
        </View>

        <View style={styles.spacing}></View>

          <View style={styles.contentBox}>
            <View style={styles.imgBox}><Image style={styles.imgBox} source={require('../assets/fist.png')} /></View>
              <View style={styles.infoBox}>
                <View style={styles.cardNameBox}>
                  <Text style={styles.cardName}>PUNCH</Text>
                </View>
                <View style={styles.descriptionBox}>
                  <Text style={styles.description}>Deals {GameConsts.punchDamage} damage to opponent</Text>
                </View>
                <View style={styles.drainBox}>
                  <Text style={styles.drainStam}>DRAIN: {GameConsts.punchDrain} stanima </Text>
                </View>
              </View>
          </View>

        <View style={styles.spacing}></View>  

        <View style={styles.contentBox}>
            <View style={styles.imgBox}><Image style={styles.imgBox} source={require('../assets/boot.png')} /></View>
              <View style={styles.infoBox}>
                <View style={styles.cardNameBox}>
                  <Text style={styles.cardName}>KICK</Text>
                </View>
                <View style={styles.descriptionBox}>
                  <Text style={styles.description}>Deals {GameConsts.kickDamage} damage to opponent</Text>
                </View>
                <View style={styles.drainBox}>
                  <Text style={styles.drainStam}>DRAIN: {GameConsts.kickDrain} stanima </Text>
                </View>
              </View>
          </View>
        <View style={styles.spacing}></View>   

        <View style={styles.contentBox}>
            <View style={styles.imgBox}><Image style={styles.imgBox} source={require('../assets/poison.png')} /></View>
              <View style={styles.infoBox}>
                <View style={styles.cardNameBox}>
                  <Text style={styles.cardName}>POISON</Text>
                </View>
                <View style={styles.descriptionBox}>
                  <Text style={styles.descriptionPoison}>Scales opponents next action by {GameConsts.poisonScaler} and deals                                    {GameConsts.poisonDamage} damage</Text>
                </View>
                <View style={styles.drainBox}>
                  <Text style={styles.drainMana}>DRAIN: {GameConsts.poisonDrain} mana </Text>
                </View>
              </View>
        </View>
          <View style={styles.spacing}></View>

          <View style={styles.contentBox}>
            <View style={styles.imgBox}><Image style={styles.imgBox} source={require('../assets/bat.png')} /></View>
              <View style={styles.infoBox}>
                <View style={styles.cardNameBox}>
                  <Text style={styles.cardName}>LEECH</Text>
                </View>
                <View style={styles.descriptionBox}>
                  <Text style={styles.description}>Steals {GameConsts.leechTransfer} health from opponent</Text>
                </View>
                <View style={styles.drainBox}>
                  <Text style={styles.drainMana}>DRAIN: {GameConsts.leechDrain} mana </Text>
                </View>
              </View>
          </View>  

        <View style={styles.spacing}></View>   

        <View style={styles.contentBox}>
          <View style={styles.imgBox}><Image style={styles.imgBox} source={require('../assets/heal.png')} /></View>
            <View style={styles.infoBox}>
                <View style={styles.cardNameBox}>
                  <Text style={styles.cardName}>HEAL</Text>
                </View>
                <View style={styles.descriptionBox}>
                  <Text style={styles.description}>Restores {-GameConsts.healthBoost} health points</Text>
                </View>
                <View style={styles.drainBox}>
                  <Text style={styles.drainMana}>DRAIN: {GameConsts.healDrain} mana </Text>
                </View>
            </View>
        </View>

        <View style={styles.spacing}></View>        

        <View style={styles.contentBox}>
            <View style={styles.imgBox}><Image style={styles.imgBox} source={require('../assets/fireball.png')} /></View>
              <View style={styles.infoBox}>
                <View style={styles.cardNameBox}>
                  <Text style={styles.cardName}>FIREBALL</Text>
                </View>
                <View style={styles.descriptionBox}>
                  <Text style={styles.description}>Deals {GameConsts.fireballDamage} damage to opponent</Text>
                </View>
                <View style={styles.drainBox}>
                  <Text style={styles.drainMana}>DRAIN: {GameConsts.fireballDrain} mana </Text>
                </View>
              </View>
        </View>

        <View style={styles.spacing}></View>  

        <View style={styles.contentBox}>
            <View style={styles.imgBox}><Image style={styles.imgBox} source={require('../assets/freeze.png')} /></View>
              <View style={styles.infoBox}>
                <View style={styles.cardNameBox}>
                  <Text style={styles.cardName}>FREEZE</Text>
                </View>
                <View style={styles.descriptionBox}>
                  <Text style={styles.description}>Reduces opponents stamina by {GameConsts.freezeDamage}</Text>
                </View>
                <View style={styles.drainBox}>
                  <Text style={styles.drainMana}>DRAIN: {GameConsts.freezeDrain} mana </Text>
                </View>
              </View>
        </View>

        <View style={styles.spacing}></View>        

        <View style={styles.contentBox}>
            <View style={styles.imgBox}><Image style={styles.imgBox} source={require('../assets/rest.png')} /></View>
              <View style={styles.infoBox}>
                <View style={styles.cardNameBox}>
                  <Text style={styles.cardName}>REST</Text>
                </View>
                <View style={styles.descriptionBox}>
                  <Text style={styles.description}>Restores {GameConsts.restBoost} mana and stamina</Text>
                </View>
                <View style={styles.drainBox}>
                  <Text style={styles.drain}>DRAIN: none </Text>
                </View>
              </View>
        </View> 

        <View style={styles.spacing}></View>   

        <View style={styles.contentBox}>
            <View style={styles.imgBox}><Image style={styles.imgBox} source={require('../assets/multiplier.png')} /></View>
              <View style={styles.infoBox}>
                <View style={styles.cardNameBox}>
                  <Text style={styles.cardName}>MULTIPLIER</Text>
                </View>
                <View style={styles.descriptionBox}>
                  <Text style={styles.description}>Scales the next turns action by {GameConsts.multiplierScaler}</Text>
                </View>
                <View style={styles.drainBox}>
                  <Text style={styles.drain}>DRAIN: none </Text>
                </View>
              </View>
        </View>

        <View style={styles.spacing}></View>    
        <View style={styles.spacing}></View>

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
  },
  headerBox:{
    height: 50 / 701.8 * height,
    width: 400 / 423.5 * width,
    backgroundColor: backgroundColorGlobal,
    alignItems: 'center',
  },
    header:{
      color: 'black',
      fontSize: 50 / 701.8 * height,
      fontWeight: 'bold',
      fontStyle: 'underline',
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
  contentBox:{
    height: 150 / 701.8 * height,
    width: 400 / 423.5 * width,
    backgroundColor: infoBoxColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10 / 423.5 * width,
  },
  imgBox:{
    width: 128  / 423.5 * width,
    height: 128 / 701.8 * height,
    backgroundColor: infoBoxColor,
  },
  infoBox:{
    backgroundColor: infoBoxColor,
    height: 150 / 701.8 * height,
    width: 250 / 423.5 * width,
  },
  spacing:{
    height: 20 / 701.8 * height,
  },
  cardNameBox: {
    height: 40 / 701.8 * height,
    backgroundColor: infoBoxColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardName:{
    textAlign: 'center',
    fontSize: 40 / 701.8 * height,
    fontWeight: 'bold',
    color: 'white',
  },
  descriptionBox:{
    height: 60 / 701.8 * height,
    backgroundColor: infoBoxColor,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  description:{
    fontSize: 25 / 701.8 * height,
    color: 'white',
    textAlign: 'center',
    lineHeight: 28 / 701.8 * height,
  },
  descriptionPoison:{
    fontSize: 20 / 701.8 * height,
    color: 'white',
    textAlign: 'center',
    lineHeight: 20 / 701.8 * height,
  },
  drainBox:{
    height: 50 / 701.8 * height,
    backgroundColor: infoBoxColor,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  drain:{
    fontSize: 25 / 701.8 * height,
    color: 'white',
    fontWeight: 'bold',
  },
  drainMana:{
    fontSize: 25 / 701.8 * height,
    color: 'blue',
    fontWeight: 'bold',
  },
  drainStam:{
    fontSize: 25 / 701.8 * height,
    color: limeGreen,
    fontWeight: 'bold',
  }
});