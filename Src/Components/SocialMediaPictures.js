// ImageRow.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageRow = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../SourceImages/Assets/GoogleChrome.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <Image
        source={require('./Assets/FaceBook.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <Image
        source={require('./Assets/Twitter.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default ImageRow;