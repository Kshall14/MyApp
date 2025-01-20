// Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Hello welcome to Tech Consulting!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#d3d3d3',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    color:'white'
  },
});

export default Header;