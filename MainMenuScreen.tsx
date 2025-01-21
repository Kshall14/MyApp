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
import Header from './Header';
import BackGround from './Background';
import SomeText from './MainMenuText';
import MainScreenImage from './MainScreenImage'
import AppImage from './MainScreenImage';
import CircleButton from './CircleButton';
//import TextComponent from './MainMenuText';
import TextComponent1 from './MainMenuText';
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