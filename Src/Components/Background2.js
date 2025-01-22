import React from 'react';
import { StyleSheet, View } from 'react-native';

const Background2 = ({ children }) => {
  return <View style={styles.background}>{children}</View>;
};

const styles = StyleSheet.create({
  background: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%', // White background
    zIndex: 0,
  },
});

export default Background2;
