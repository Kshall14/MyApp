import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text } from 'react-native-gesture-handler';

const backgroundImage = require('./Src/SourceImages/Assets/BackGround.jpg');

const Background = ({ children }) => {
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
    flex: 1, // Ensures it fills the entire screen
   //justifyContent: 'center', // Centers content if there is any
   // alignItems: 'center', // Centers content if there is any
    resizeMode: 'cover',
    width: '100%',
    height: null, // Makes sure the image is stretched properly
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute', // Ensures the background does not block other content
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(162, 40, 40, 0.3)', // Optional: Dark overlay to make text more readable
  },
});

export default Background;
