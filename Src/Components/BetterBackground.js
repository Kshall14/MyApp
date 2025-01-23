import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text } from 'react-native-gesture-handler';

const backgroundImage = require('../SourceImages/Assets/BackGround.jpg');

const Background4 = ({ imageChildren,overlayChildren }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode='cover'
      >
        {imageChildren}
      </ImageBackground>
      <View style={styles.overlay} >
      {overlayChildren}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 container:{
    flex: 1,
 },
 backgroundImage:{
    flex: 1,
    width: '100%'
 },
 overlay:{
    //flex: 1,
    position: 'absolute',
    top:'20%',
    bottom: 0,
    left: 0,
    right: 0,
    height: '120%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
 },
});

export default Background4;
