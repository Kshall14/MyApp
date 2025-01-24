import React from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';

const APressable = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Already have an account?{' '}
        <Pressable onPress={onPress}>
          <Text style={styles.pressableText}>Press here.</Text>
        </Pressable>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 470,
    left: 50,
    right: 0,
    //justifyContent: 'left',
    //alignItems: 'center',
    paddingBottom: 0,
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  pressableText: {
    color: '#007bff', // This gives the "Press here" text a blue color
    textDecorationLine: 'underline', // Underlines the "Press here" text
  },
});

export default APressable;
