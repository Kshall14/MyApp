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
// Define the background image
const backgroundImage = {
  uri: 'https://reactnative.dev/docs/assets/p_cat2.png',

};

function SignIn({ route, navigation }: any): React.JSX.Element {
  //const { name } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <CombinedBackground>
        <PasswordPressable/>
        <ScrollView>
          <Header></Header>
          <ImageRow></ImageRow>
          <TextInputs></TextInputs>
          <RememberMeSwitch></RememberMeSwitch>
          <SignInButton></SignInButton>
          

          <ActivityIndicator size='large'/>

        </ScrollView>
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
    marginTop: 20,
  },
});

export default SignIn;
