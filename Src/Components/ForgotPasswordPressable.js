import React from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';

const PasswordPressable = () => {
  return (
    <View style={styles.container}>
    <Pressable onPress={() => {}} style={styles.pressable}>
      <Text style={[styles.text, styles.pressableText]}>
        Forgot Password? Press here.
      </Text>
    </Pressable>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 300,
    right: 0,
   // width: '100%', // Add this line
    //height: 50,
    justifyContent: 'left',
    alignItems: 'center',
    paddingBottom: 0,
    //flex: 1,
    //justifyContent: 'right',
    //alignItems: 'center',
    //backgroundColor: '#f5f5f5',
    //elevation: 1,
  },
  text: {
    fontSize: 10,
    color: '#333',
  },
  pressableText: {
    color: '#007bff', // This gives the "Press here" text a blue color
    textDecorationLine: 'underline', // Underlines the "Press here" text
  },
});

export default PasswordPressable;
