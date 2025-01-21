import React from 'react';
import{
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    ImageBackground,
    TextInput,
}from 'react-native';
import Header from '../Components/Header';
import BackGround from '../Components/Background';
import SomeText from '../Components/MainMenuText';
import MainScreenImage from '../Components/MainScreenImage'
import AppImage from '../Components/MainScreenImage';
import CircleButton from '../Components/CircleButton';
//import TextComponent from './MainMenuText';
import TextComponent1 from '../Components/MainMenuText';
//function App(): React.JSX.Element {
 

const MainMenuScreen = ({ navigation}: any)=>{
  //const [name, setName] = React.useState('');
    return(
        <SafeAreaView style={styles.safeArea}>
        <BackGround> 
          <View style = {styles.contentContainer}>
        <AppImage style = {styles.image}/>
        <TextComponent1 />
        <CircleButton
          onPress={() => navigation.navigate('AppContent')}
          style={styles.button}
          />
          </View>
        </BackGround>
      </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
       // alignItems: 'center',
        //justifyContent: 'center',
      },
      text:{
        fontSize: 24, marginBottom:20.
      },
      backgroundStyle: {
        flex: 1,
        resizeMode: 'cover', // Ensures the background image covers the entire screen
      },
      contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        marginTop: 100, // Add space between image and button
      },
      image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
      },
  
});
export default MainMenuScreen;