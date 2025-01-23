/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import CombinedBackground from '../Components/CombinedBackgrounds';
import HelpPressable from '../Components/NeedHelpPressable';
import Header from '../Components/Header'
import Background2 from '../Components/Background2';
import Background3 from '../Components/BackGroundOtherScreens';
import RememberMeSwitch from '../Components/RememberMeSwitch';
import BackGround from '../Components/Background';
import ImageRow from '../Components/SocialMediaPictures';
import TextInputs from '../Components/TextInputs';
import SignUpButton from '../Components/SignUpButton';
import APressable from '../Components/Pressable'
import Background4 from '../Components/BetterBackground';
import { storeData } from '../Components/Storage';


function App({ route, navigation }: any): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
    <Background4
     imageChildren={<HelpPressable />}
     overlayChildren={
      <View>
        <Header></Header>
        <ImageRow></ImageRow>
        <TextInputs/>
        <RememberMeSwitch></RememberMeSwitch>
        <SignUpButton/>
        <APressable onPress={() => navigation.navigate('SignInPage')} />
        <ActivityIndicator size='large'/>
        
        </View>
      }
        />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    resizeMode: 'cover', // Ensures the background image covers the entire screen
  },
  safeArea: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 0,
  },
});

export default App;
