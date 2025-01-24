// Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Getting Started!
      </Text>
      <Text style = {styles.normalText}>
      Create an account to continue.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#d3d3d3',
    height: 100,
    justifyContent: 'center',
    alignItems: 'left',
    paddingTop: 0,
    paddingLeft:10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    color:'black'
  },
  normalText: {
    fontWeight: 'normal',
    fontSize: 18,
    color:'black'
  },
});

export default Header;