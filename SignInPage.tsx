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
import Header from './SignInHeader';
import RememberMeSwitch from './RememberMeSwitch';
import BackGround from './Background';
import SocialMediaPictures from'./SocialMediaPictures';
import ImageRow from './SocialMediaPictures';
import TextInputs from './SignInTextInputs';
import SignInButton from './FinalSignInButton';
import AlreadyButton from './AlreadyHaveAccountButton';
// Define the background image
const backgroundImage = {
  uri: 'https://reactnative.dev/docs/assets/p_cat2.png',

};

function SignIn({ route, navigation }: any): React.JSX.Element {
  //const { name } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackGround> 
        <ScrollView>
          <Header></Header>
          <ImageRow></ImageRow>
          <TextInputs></TextInputs>
          <RememberMeSwitch></RememberMeSwitch>
          <SignInButton></SignInButton>
          

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

export default SignIn;
