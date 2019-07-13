import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,  
  Dimensions, 
  ScrollView,
  AsyncStorage
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const backgroundColorGlobal= 'white';

export default class HistoryScreen extends React.Component{

    state = {
        bronze: "",
        silver: "",
        gold: "",
        trophies: ""
    }

    componentDidMount(){
        this.retreiveBronze();
    }

    async storeBronze(count){
        try {
            await AsyncStorage.setItem("Bronze", count);
        } catch (err){
            console.log("Regarding storeBronze: " + err);
        }
    }

    retreiveBronze = async () => {
        try {
            const value = await AsyncStorage.getItem("Bronze");
            if(value === null){
                console.log("Value is null");
                this.storeBronze("0");
            }else{
                this.state.bronze = value;
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
          <Text>{this.state.bronze}</Text>
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
        backgroundColor: backgroundColorGlobal,
        alignItems: 'center',
      },
});