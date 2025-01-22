import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text } from 'react-native-gesture-handler';

const backgroundImage = require('../SourceImages/Assets/BackGround.jpg');

const Background3 = ({ children }) => {
  return (
    <View style={styles.backgroundStyle}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    //flex: 1, // Ensures it fills the entire screen
    //justifyContent: 'center', // Centers content if there is any
    //alignItems: 'center', // Centers content if there is any
    resizeMode: 'cover',
    width: '100%',
    height: 50, // Makes sure the image is stretched properly
  },
  backgroundImage: {
    //flex: 1,
    height: 50,
    resizeMode: 'cover',
    justifyContent: 'center',
    zIndex: 1,
  },
});

export default Background3;
