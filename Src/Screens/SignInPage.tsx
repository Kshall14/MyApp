/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
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
import Header from '../Components/SignInHeader';
import RememberMeSwitch from '../Components/RememberMeSwitch';
import BackGround from '../Components/Background';
import PasswordPressable from '../Components/ForgotPasswordPressable';
import CombinedBackground from '../Components/CombinedBackgrounds';
import SocialMediaPictures from'../Components/SocialMediaPictures';
import ImageRow from '../Components/SocialMediaPictures';
import TextInputs from '../Components/SignInTextInputs';
import SignInButton from '../Components/FinalSignInButton';
import AlreadyButton from '../Components/AlreadyHaveAccountButton';
import Background4 from '../Components/BetterBackground';
import { getData } from '../Components/Storage';

// Define the background image
const backgroundImage = {
  uri: 'https://reactnative.dev/docs/assets/p_cat2.png',

};

function SignIn({ route, navigation }: any): React.JSX.Element {   
  return (
    <SafeAreaView style={styles.safeArea}>
    <Background4
  imageChildren={<PasswordPressable />}
  overlayChildren={
    <View>
      <Header></Header>
      <ImageRow></ImageRow>
      <TextInputs/>
      <RememberMeSwitch></RememberMeSwitch>
      <SignInButton
      onPress={() => navigation.navigate('Tabs')}
      />
      <ActivityIndicator size='large' />
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

export default SignIn;
