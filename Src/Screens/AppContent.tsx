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
import Header from '../../Src/Components/Header'
//import Header from './Src/Components/Header';
import RememberMeSwitch from '../../Src/Components/RememberMeSwitch';
import BackGround from '../../Src/Components/Background';
import SocialMediaPictures from'../../Src/Components/SocialMediaPictures';
import ImageRow from '../../Src/components/SocialMediaPictures';
import TextInputs from '../../Src/Components/TextInputs';
import SignUpButton from '../../Src/Components/SignUpButton';
import AlreadyButton from '../../Src/Components/AlreadyHaveAccountButton';
// Define the background image
const backgroundImage = {
  uri: 'https://reactnative.dev/docs/assets/p_cat2.png',

};

function App({ route, navigation }: any): React.JSX.Element {
  //const { name } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackGround> 
        <ScrollView>
          <Header></Header>
          <ImageRow></ImageRow>
          <TextInputs></TextInputs>
          <RememberMeSwitch></RememberMeSwitch>
          <SignUpButton></SignUpButton>
          <AlreadyButton onPress={() => navigation.navigate('SignInPage')}>

          </AlreadyButton>

          <ActivityIndicator size='large'/>

        </ScrollView>
      </BackGround> 
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
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default App;
