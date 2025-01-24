// ImageRow.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageRow = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../SourceImages/Assets/Google.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Image
        source={require('../SourceImages/Assets/FaceBook.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Image
        source={require('../SourceImages/Assets/Twitter.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'left',
    paddingBottom: 25,
    paddingLeft:20,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 20,

  },
});

export default ImageRow;