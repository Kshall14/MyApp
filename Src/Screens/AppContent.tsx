/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
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


function App({ route, navigation }: any): React.JSX.Element {
  //const { name } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
    <CombinedBackground>
      <HelpPressable />
        <Header></Header>
        <ImageRow></ImageRow>
        <TextInputs></TextInputs>
        <RememberMeSwitch></RememberMeSwitch>
        <SignUpButton></SignUpButton>

        <APressable onPress={() => navigation.navigate('SignInPage')} />
        <ActivityIndicator size='large'/>
      
        </CombinedBackground>
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
    width: 200,
    height: 200,
    marginTop: 5,
  },
});

export default App;
