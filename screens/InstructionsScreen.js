import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,  
  Dimensions, 
  ScrollView
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const backgroundColorGlobal= 'white';
const darkGrey = '#666666';

export default class InstructionsScreen extends React.Component{

  render(){

     const {navigate} = this.props.navigation;

    return(

      <ScrollView style={styles.page} contentContainerStyle={styles.contentContainer}>

        <View style={styles.top}></View>

        <View style={styles.screenTitleBox}>
          <Text style={styles.screenTitle}>Instructions</Text>
        </View>

        <View style={styles.spacing}></View>

        <View style={styles.card}>
          <Text style={styles.header}>Overview</Text>
          <Text style={styles.paragraph}>
Proelium is a turn based card game. Click on a card to use it. To see what cards do, see the card catalog. To use a card, tap it. After you select a card, the bot plays his turn and the text above your cards details what card he played on his turn{"\n"}</Text>
        </View>

         <View style={styles.spacing}></View>

        <View style={styles.card}>
          <Text style={styles.header}>Energy Requirements</Text>
        <Text style={styles.paragraph}>
Most cards use either mana or stamina when cast. If you cast a mana draining card with 0 mana, then the cost to cast the card will return to your mana, but the card will not take effect. This is called burning a card. Cards can be burnt at any time if they are held down as opposed to being pressed. This is scaled by mulitpliers from poison and multiplier{"\n"}</Text>
        </View>

         <View style={styles.spacing}></View>

         <View style={styles.card}>
        <Text style={styles.header}>Multipliers</Text>
        <Text style={styles.paragraph}>
The Multiplier card doubles your next cards effect(without altering drain) and these are stackable, so chaining multipliers makes for 4, 8, or 16 times a cards effect{"\n"}
        </Text>
        </View>

        <View style={styles.spacing}></View>

        <View style={styles.card}>
        <Text style={styles.header}>Difficulty</Text>
        <Text style={styles.paragraph}>
In Easy mode, the bot picks cards at random with no strategy.
In Normal mode, the bot picks cards strategically.
In Hard mode, the bot has more health and energy than the player.
Nightmare starts the player off with less health and less energy, so the bot has almost double health at the start and more than double the energy.
After selecting a difficulty, click on the image in the middle of the screen to start a match.{"\n"}
        </Text>
        </View>

        <View style={styles.spacing}></View>

        <View style={styles.card}>
        <Text style={styles.header}>Combo</Text>
        <Text style={styles.paragraph}>
        The combo card allows the user to play multiple turns at once. They may be stacked and are scaled by multiplier cards.
        </Text>
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
  header:{
      color: 'white',
      fontSize: 32 / 701.8 * height,
      fontWeight: 'bold',
      textAlign: 'center',
  },
  paragraph:{
      fontSize: 25 / 701.8 * height,
      color: 'white',
      textAlign: 'center',
      lineHeight: 28 / 701.8 * height,
      paddingLeft: 20 / 423.5 * width,
      paddingRight: 20 / 423.5 * width,
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
  card:{
    backgroundColor: darkGrey,
    width: width - (((20 / 423.5)*width) * 2),
  },
});