import React from 'react';
import { Image, StyleSheet } from 'react-native';

const AppImage = (style) => {
  return (
    <Image
      source={require('./Assets/MyCar.jpg')}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    position:'center',
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default AppImage;