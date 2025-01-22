// CircleButton.js
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const imageSource = require('../SourceImages/Assets/DownArrow.jpg');

const CircleButton = ({ onPress,style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.circleButton}>
      <Image source={imageSource} style={styles.buttonImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default CircleButton;