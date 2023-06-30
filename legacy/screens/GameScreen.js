import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  Image, 
  Dimensions, 
  TouchableOpacity 
  } from 'react-native';
import { Fighter1, Fighter2, useCard, burnCard, bot, gameOver, opponentDisabled} from '../gamecode/Run';
import { Audio } from 'expo';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
var backgroundColorGlobal = 'white';
export const music = new Audio.Sound();

export default class GameScreen extends React.Component {

playCard(cardNum){
  this.setState({dummy: 1});
  useCard(Fighter1, cardNum);
  if(!gameOver(Fighter1, Fighter2)){
    bot();
  }
}
burnCard(cardNum){
  burnCard(Fighter1, cardNum);
  if(!gameOver(Fighter1, Fighter2)){
  bot();
  }
  this.setState({dummy: 1});
}
componentDidMount(){
  this.setLoop();
}
async setLoop(){
  try{
    await music.setIsLoopingAsync(true);
  }catch(error){
    console.log("Error setting the music to loop:" + error);
  }
}

async stopMusic(){
  try{
    await music.unloadAsync();
  }catch(error){
    console.log("Errow with stopping music: " + error);
  }

}
  render() {
    
    const {navigate} = this.props.navigation;

    if(gameOver(Fighter1, Fighter2)){
      this.stopMusic();
      navigate("Gameover");
    }

    let img1;
    let img2;
    let img3;
    let img4;
    let img5;

    let p0 = Fighter1.deck[0];
    let p1 = Fighter1.deck[1];
    let p2 = Fighter1.deck[2];
    let p3 = Fighter1.deck[3];
    let p4 = Fighter1.deck[4];

      if((p0 === 0) || (p0 === 1) || (p0 === 2) || (p0 === 3) || (p0 === 4)){  
          img1 = <Image style={styles.logo} source={require('../assets/fist.png')} />
          }else if((p0 === 5) || (p0 === 6) || (p0 === 7) || (p0 === 8)){
          img1 = <Image style={styles.logo} source={require('../assets/boot.png')} />
          }else if(p0 === 9){
           img1 = <Image style={styles.logo} source={require('../assets/fireball.png')} />
          }else if(p0 === 10){
           img1 = <Image style={styles.logo} source={require('../assets/heal.png')} />
          }else if(p0 === 11){
           img1 = <Image style={styles.logo} source={require('../assets/rest.png')} />
          }else if(p0 === 12){
           img1 = <Image style={styles.logo} source={require('../assets/multiplier.png')} />
          }else if(p0 === 13){
           img1 = <Image style={styles.logo} source={require('../assets/poison.png')} />
          }else if(p0 === 14){
           img1 = <Image style={styles.logo} source={require('../assets/freeze.png')} />
          }else if(p0 === 15){
           img1 = <Image style={styles.logo} source={require('../assets/bat.png')} />
          }else if(p0 === 16){
            img1 = <Image style={styles.logo} source={require('../assets/combo.png')} />
          }else if(p0 === 17){
            img1 = <Image style={styles.logo} source={require('../assets/shock.png')} />
          }else if(p0 === 18){
            img1 = <Image style={styles.logo} source={require('../assets/magnet.png')} />
          }else{
          img1 = <Text activeOpacity={0} style={styles.buttonText}>
                 {Fighter1.cards[0]}
                </Text>
          }
      if((p1 === 0) || (p1 === 1) || (p1 === 2) || (p1 === 3) || (p1 === 4)){  
          img2 = <Image style={styles.logo} source={require('../assets/fist.png')} />
          }else if((p1 === 5) || (p1 === 6) || (p1 === 7) || (p1 === 8)){
          img2 = <Image style={styles.logo} source={require('../assets/boot.png')} />
          }else if(p1 === 9){
           img2 = <Image style={styles.logo} source={require('../assets/fireball.png')} />
          }else if(p1 === 10){
           img2 = <Image style={styles.logo} source={require('../assets/heal.png')} />
          }else if(p1 === 11){
           img2 = <Image style={styles.logo} source={require('../assets/rest.png')} />
          }else if(p1 === 12){
           img2 = <Image style={styles.logo} source={require('../assets/multiplier.png')} />
          }else if(p1 === 13){
           img2 = <Image style={styles.logo} source={require('../assets/poison.png')} />
          }else if(p1 === 14){
           img2 = <Image style={styles.logo} source={require('../assets/freeze.png')} />
          }else if(p1 === 15){
           img2 = <Image style={styles.logo} source={require('../assets/bat.png')} />
          }else if(p1 === 16){
            img2 = <Image style={styles.logo} source={require('../assets/combo.png')} />
          }else if(p1 === 17){
            img2 = <Image style={styles.logo} source={require('../assets/shock.png')} />
          }else if(p1 === 18){
            img2 = <Image style={styles.logo} source={require('../assets/magnet.png')} />
          }else{
          img2 = <Text activeOpacity={0} style={styles.buttonText}>
                 {Fighter1.cards[1]}
                </Text>
          }
      if((p2 === 0) || (p2 === 1) || (p2 === 2) || (p2 === 3) || (p2 === 4)){  
          img3 = <Image style={styles.logo} source={require('../assets/fist.png')} />
          }else if((p2 === 5) || (p2 === 6) || (p2 === 7) || (p2 === 8)){
          img3 = <Image style={styles.logo} source={require('../assets/boot.png')} />
          }else if(p2 === 9){
           img3 = <Image style={styles.logo} source={require('../assets/fireball.png')} />
          }else if(p2 === 10){
           img3 = <Image style={styles.logo} source={require('../assets/heal.png')} />
          }else if(p2 === 11){
           img3 = <Image style={styles.logo} source={require('../assets/rest.png')} />
          }else if(p2 === 12){
           img3 = <Image style={styles.logo} source={require('../assets/multiplier.png')} />
          }else if(p2 === 13){
           img3 = <Image style={styles.logo} source={require('../assets/poison.png')} />
          }else if(p2 === 14){
           img3 = <Image style={styles.logo} source={require('../assets/freeze.png')} />
          }else if(p2 === 15){
           img3 = <Image style={styles.logo} source={require('../assets/bat.png')} />
          }else if(p2 === 16){
            img3 = <Image style={styles.logo} source={require('../assets/combo.png')} />
          }else if(p2 === 17){
            img3 = <Image style={styles.logo} source={require('../assets/shock.png')} />
          }else if(p2 === 18){
            img3 = <Image style={styles.logo} source={require('../assets/magnet.png')} />
          }else{
          img3 = <Text activeOpacity={0} style={styles.buttonText}>
                 {Fighter1.cards[2]}
                </Text>
          }
      if((p3 === 0) || (p3 === 1) || (p3 === 2) || (p3 === 3) || (p3 === 4)){  
          img4 = <Image style={styles.logo} source={require('../assets/fist.png')} />
          }else if((p3 === 5) || (p3 === 6) || (p3 === 7) || (p3 === 8)){
          img4 = <Image style={styles.logo} source={require('../assets/boot.png')} />
          }else if(p3 === 9){
           img4 = <Image style={styles.logo} source={require('../assets/fireball.png')} />
          }else if(p3 === 10){
           img4 = <Image style={styles.logo} source={require('../assets/heal.png')} />
          }else if(p3 === 11){
           img4 = <Image style={styles.logo} source={require('../assets/rest.png')} />
          }else if(p3 === 12){
           img4 = <Image style={styles.logo} source={require('../assets/multiplier.png')} />
          }else if(p3 === 13){
           img4 = <Image style={styles.logo} source={require('../assets/poison.png')} />
          }else if(p3 === 14){
           img4 = <Image style={styles.logo} source={require('../assets/freeze.png')} />
          }else if(p3 === 15){
           img4 = <Image style={styles.logo} source={require('../assets/bat.png')} />
          }else if(p3 === 16){
            img4 = <Image style={styles.logo} source={require('../assets/combo.png')} />
          }else if(p3 === 17){
            img4 = <Image style={styles.logo} source={require('../assets/shock.png')} />
          }else if(p3 === 18){
            img4 = <Image style={styles.logo} source={require('../assets/magnet.png')} />
          }else{
          img4 = <Text activeOpacity={0} style={styles.buttonText}>
                 {Fighter1.cards[3]}
                </Text>
          }
      if((p4 === 0) || (p4 === 1) || (p4 === 2) || (p4 === 3) || (p4 === 4)){  
          img5 = <Image style={styles.logo} source={require('../assets/fist.png')} />
          }else if((p4 === 5) || (p4 === 6) || (p4 === 7) || (p4 === 8)){
          img5 = <Image style={styles.logo} source={require('../assets/boot.png')} />
          }else if(p4 === 9){
           img5 = <Image style={styles.logo} source={require('../assets/fireball.png')} />
          }else if(p4 === 10){
           img5 = <Image style={styles.logo} source={require('../assets/heal.png')} />
          }else if(p4 === 11){
           img5 = <Image style={styles.logo} source={require('../assets/rest.png')} />
          }else if(p4 === 12){
           img5 = <Image style={styles.logo} source={require('../assets/multiplier.png')} />
          }else if(p4 === 13){
           img5 = <Image style={styles.logo} source={require('../assets/poison.png')} />
          }else if(p4 === 14){
           img5 = <Image style={styles.logo} source={require('../assets/freeze.png')} />
          }else if(p4 === 15){
           img5 = <Image style={styles.logo} source={require('../assets/bat.png')} />
          }else if(p4 === 16){
            img5 = <Image style={styles.logo} source={require('../assets/combo.png')} />
          }else if(p4 === 17){
            img5 = <Image style={styles.logo} source={require('../assets/shock.png')} />
          }else if(p4 === 18){
            img5 = <Image style={styles.logo} source={require('../assets/magnet.png')} />
          }else{
          img5 = <Text activeOpacity={0} style={styles.buttonText}>
                 {Fighter1.cards[4]}
                </Text>
          }
    let oppDisplay;
    if(opponentDisabled === true){
      oppDisplay =  <View style={styles.statBox}>   
                        <View style={styles.oppHealthBox}>
                        <Text style={styles.ohealthDisabled}>{Fighter2.health}</Text>
                        </View>

                    </View>
      
    }else{
      oppDisplay =  <View style={styles.statBox}>   
                      <View style={styles.oppHealthBox}>
                        <Text style={styles.ohealth}>{Fighter2.health}</Text>
                      </View>
                    </View>
    }
      let card1 =   <View style={styles.buttonHolder}>
                <TouchableOpacity activeOpacity={0} onPress={this.playCard.bind(this, 0)} onLongPress={this.burnCard.bind(this, 0)}>
                {img1}
                </TouchableOpacity>
                </View>
      let card2 =   <View style={styles.buttonHolder}>
                <TouchableOpacity activeOpacity={0} onPress={this.playCard.bind(this, 1)} onLongPress={this.burnCard.bind(this, 1)}>
                {img2}
                </TouchableOpacity>
                </View>
      let card3 =   <View style={styles.buttonHolder}>
                <TouchableOpacity activeOpacity={0} onPress={this.playCard.bind(this, 2)} onLongPress={this.burnCard.bind(this, 2)} on>
                {img3}
                </TouchableOpacity>
                </View>
      let card4 =   <View style={styles.buttonHolder}>
                <TouchableOpacity activeOpacity={0} onPress={this.playCard.bind(this, 3)} onLongPress={this.burnCard.bind(this, 3)}>
                {img4}
                </TouchableOpacity>
                </View>
      let card5 =   <View style={styles.buttonHolder}>
                <TouchableOpacity activeOpacity={0} onPress={this.playCard.bind(this, 4)} onLongPress={this.burnCard.bind(this, 4)}>
                {img5}
                </TouchableOpacity>
                </View>
      let playerH;
        if(Fighter1.health >= 100){
          playerH = <Text style={styles.phealth2}>{Fighter1.health}</Text>
        }else{
          playerH = <Text style={styles.phealth}>{Fighter1.health}</Text>
        }   
                
    
    return (
  <View style={styles.container}>
        <View style={styles.top}>        
        </View>
        {oppDisplay}


    <View style={styles.messageBox}>
      <Text style={styles.message}> {Fighter2.screenMessage}</Text>
    </View>

    <View style={styles.handBox1}>
      {card1}
    </View>

    <View style={styles.handBox2}>
      {card2}
      <View style={styles.playerStat}>

          <View style={styles.playerHealth}>
            {playerH}
          </View>

          <View style={styles.playerEnergy}>
            <Text style={styles.stanima}>{Fighter1.stanima}</Text>
            <Text style={styles.mana}>{Fighter1.mana}</Text>
          </View>

    </View>
      {card3}
    </View>
    <View style={styles.handBox3}>
      {card4}
      {card5}
    </View>

    <View style={styles.bottom}>
    </View>
  </View>
    );
  }
  
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColorGlobal,
  },
  statBox:{
    flex: 0.00040 * height,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  messageBox:{
    flex: 0.08,
    alignItems: 'center',
    padding: 2,
  },
  message:{
    fontFamily: 'Verdana',
   fontSize: 24 / 701.8 * height,
    textAlign: 'center',
  },
  ohealth:{
    fontFamily: 'Verdana',
    color: 'red',
    textAlign: 'center',
    fontSize: 150 / 701.8 * height,
    fontWeight: 'bold',
  },
  ohealthDisabled:{
    fontFamily: 'Verdana',
    color: '#2F4F4F',
    textAlign: 'center',
    fontSize: 150 / 701.8 * height,
    fontWeight: 'bold',
  },
  phealth:{
    fontFamily: 'Verdana',
    color: 'red',
    textAlign: 'center',
    fontSize: 95 / 701.8 * height,
    fontWeight: 'bold',
    zIndex: 7,
  },
    phealth2:{
    fontFamily: 'Verdana',
    color: 'red',
    textAlign: 'center',
    fontSize: 60 / 701.8 * height,
    fontWeight: 'bold',
    zIndex: 7,
  },
  stanima:{
    color: 'green',
    fontSize: 0.07 * width,
    fontWeight: 'bold',
    textAlign: 'center',
     fontFamily: 'Verdana',
  },
  mana: {
    color: 'blue',
    fontSize: 0.07 * width,
    fontWeight: 'bold',
    textAlign: 'center',
     fontFamily: 'Verdana',
  },
  handBox1:{
    flex: 0.23,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: -5,
    zIndex: 4,
  },
    handBox2:{
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 10 / 423.5 * width,
    paddingRight: 20 / 423.5 * width,
    paddingTop: 0,
    zIndex: 3,
  },
    handBox3:{
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 75 / 423.5 * width,
    paddingRight: 75 / 423.5 * width,
    paddingTop: 0,
    paddingBottom: 0,
    zIndex: 2,
  },
    buttonHolder:{
    width: 128 / 423.5 * width,
    height: 128 / 701.8 * height,
    fontSize: 36,
    justifyContent: 'center',
    borderRadius: ((128 / 2) / 423.5 * width),
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 1 / 423.5 * width,
    shadowColor: 'black',
    elevation: 1,
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 48,
    color: "black",
     fontFamily: 'Verdana',
  },
  playerEnergy:{
    flexDirection: 'row',
    flex: 0.20,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems:'center',
    zIndex: 1,
  },
  oppHealthBox:{
    flex: 0.4
  },
  bottom:{
    flex: 0.05,
    zIndex: 1,
  },
  top:{
    flex: 0.05,
  },
  playerStat:{
    width: 100,
    height: 120,
    justifyContent: 'space-between',
  },
  playerHealth:{
    flex: 0.8,
    justifyContent: 'center',
    paddingTop: 10,
    zIndex: 6,
  },
    logo: {
    height: 128  / 423.5 * width,
    width: 128 / 701.8 * height,
    borderRadius: ((128 / 2) / 423.5 * width),
  },

});
  