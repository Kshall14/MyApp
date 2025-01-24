import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AlreadyButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.theButton}>
      <Text style={styles.buttonText}>If you already have an account, sign in here</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  theButton: {
    width: 300,
    height: 200,
    marginTop: 0,
    marginLeft : 60,
    backgroundColor: '#6495ED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color:'white',
  },
});

export default AlreadyButton;