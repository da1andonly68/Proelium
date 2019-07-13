import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,  
  Dimensions, 
  ScrollView,
  AsyncStorage,
  Image
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const backgroundColorGlobal= 'white';
const darkGrey = '#666666';
const infoBoxColor = darkGrey;
const boxHeight = 140;
const imagePadding = 10;

export default class HistoryScreen extends React.Component{

    state = {
        bronze: "",
        silver: "",
        gold: "",
        trophy: ""
    }

    componentDidMount(){
        this.retreiveBronze();
        this.retreiveSilver();
        this.retreiveGold();
        this.retreiveTrophy();
    }
    
    async storeBronze(value){
        try {
            await AsyncStorage.setItem("Bronze", value);
          } catch (err){
            console.log("Regarding Bronze storage: " + err);
          }
    }
    async storeSilver(value){
        try {
            await AsyncStorage.setItem("Silver", value);
          } catch (err){
            console.log("Regarding Silver storage: " + err);
          }
    }
    async storeGold(value){
        try {
            await AsyncStorage.setItem("Gold", value);
          } catch (err){
            console.log("Regarding Gold storage: " + err);
          }
    }
    async storeTrophy(value){
        try {
            await AsyncStorage.setItem("Trophy", value);
          } catch (err){
            console.log("Regarding Trophy storage: " + err);
          }
    }
    retreiveBronze = async () => {
        try {
            const value = await AsyncStorage.getItem("Bronze");
            if(value === null){
                this.storeBronze("0");
                this.state.bronze = "0";
                this.setState({dummy: 1});
            }else{
                this.state.bronze = value;
                this.setState({dummy: 1});
            }

        }catch(err){
            throw(err);
        }
    }
    retreiveSilver = async () => {
        try {
            const value = await AsyncStorage.getItem("Silver");
            if(value === null){
                this.storeSilver("0");
                this.state.silver = "0";
                this.setState({dummy: 1});
            }else{
                this.state.silver = value;
                this.setState({dummy: 1});
            }
        }catch(err){
            throw(err);
        }
    }
    retreiveGold = async () => {
        try {
            const value = await AsyncStorage.getItem("Gold");
            if(value === null){
                this.storeGold("0");
                this.state.gold = "0";
                this.setState({dummy: 1});
            }else{
                this.state.gold = value;
                this.setState({dummy: 1});
            }
        }catch(err){
            throw(err);
        }
    }
    retreiveTrophy = async () => {
        try {
            const value = await AsyncStorage.getItem("Trophy");
            if(value === null){
                this.storeTrophy("0");
                this.state.trophy = "0";
                this.setState({dummy: 1});
            }else{
                this.state.trophy = value;
                this.setState({dummy: 1});
            }

        }catch(err){
            throw(err);
        }
    }
  render(){

     const {navigate} = this.props.navigation;

    return(

      <ScrollView style={styles.page} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.header}>Victories</Text>
        <View style={styles.contentBox}>
            <View style={styles.imgBox}><Image style={styles.imgBox} source={require('../assets/bronze.png')} /></View>
              <View style={styles.infoBox}>
                  <Text style={styles.medalCount}>{this.state.bronze}</Text>
              </View>
        </View>

          <View style={styles.spacing}></View>

          <View style={styles.contentBox}>
            <View style={styles.imgBox}><Image style={styles.imgBox} source={require('../assets/silver.png')} /></View>
              <View style={styles.infoBox}>
                  <Text style={styles.medalCount}>{this.state.silver}</Text>
              </View>
        </View>

          <View style={styles.spacing}></View>

          <View style={styles.contentBox}>
            <View style={styles.imgBox}><Image style={styles.imgBox} source={require('../assets/gold.png')} /></View>
              <View style={styles.infoBox}>
                  <Text style={styles.medalCount}>{this.state.gold}</Text>
              </View>
        </View>

          <View style={styles.spacing}></View>

          <View style={styles.contentBox}>
            <View style={styles.imgBox}><Image style={styles.imgBox} source={require('../assets/trophy.png')} /></View>
              <View style={styles.infoBox}>
                  <Text style={styles.medalCount}>{this.state.trophy}</Text>
              </View>
        </View>

          <View style={styles.spacing}></View>


      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 0
    },
    page: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: backgroundColorGlobal,
      paddingVertical: (40 / 701.8) * height,
      alignItems: 'center',
    },
    header:{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 50,
    }, 
    contentBox:{
      height: boxHeight / 701.8 * height,
      width: 400 / 423.5 * width,
      backgroundColor: infoBoxColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: imagePadding,
    },
    imgBox:{
      width: (boxHeight - imagePadding * 2)  / 423.5 * width,
      height: (boxHeight - imagePadding * 2)  / 701.8 * height,
      backgroundColor: infoBoxColor,
    },
    infoBox:{
      flex: 1,
      paddingBottom: 10 / 701.8 * height,
    },
    spacing:{
      height: 10 / 701.8 * height,
    },
    medalCount:{
      fontSize: 110 / 701.8 * height,
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold'
    },
});