// CombinedBackground.js
import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const backgroundImage = require('../SourceImages/Assets/BackGround.jpg');

const CombinedBackground = ({ children }) => {
  return (
    <View style={styles.container}>
    <ImageBackground
      source={backgroundImage}
      style={styles.topBackground}
    >
      {React.Children.map(children, (child, index) => {
        if (index === 0) {
          return child;
        }
        return null;
      })}
    </ImageBackground>
    <View style={styles.bottomBackground}>
      {React.Children.map(children, (child, index) => {
        if (index > 0) {
          return child;
        }
        return null;
      })}
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  topBackground: {
    height: 75,
    width: '100%',
    //marginHorizontal: 0,
  },
  bottomBackground: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 50,
    width: '100%',
  },
});

export default CombinedBackground;