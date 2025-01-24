// Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Welcome Back!
      </Text>
      <Text style = {styles.normalText}>
      Sign in to continue.
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
    paddingLeft: 20,
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