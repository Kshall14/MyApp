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
import Header from './Header';
import BackGround from './Background'
// Define the background image
const backgroundImage = {
  uri: 'https://reactnative.dev/docs/assets/p_cat2.png',

};

function App({ route, navigation }: any): React.JSX.Element {
  const { name } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackGround> 
        <ScrollView>
          <Image
            //source={{
            //  uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            //}}
            //style={styles.image}
          />

          <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black' }}>
            Hello {name}, welcome onboard at Tech Consulting!
          </Text>

          <TextInput
            style={{
              height: 40,
              width: 400,
              borderColor: 'gray',
              borderWidth: 1,
              alignItems: 'center',
            }}
            defaultValue="Type in me please"
          />
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
