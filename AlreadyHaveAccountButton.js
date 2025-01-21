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
    height: 60,
    marginTop: 10,
    marginLeft : 50,
    backgroundColor: '#6495ED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color:'white',
  },
});

export default AlreadyButton;