// ListButtons.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ListButtons = ({ onFlatListPress, onSectionListPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onFlatListPress} style={styles.button}>
        <Text style={styles.buttonText}>Flat List</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSectionListPress} style={styles.button}>
        <Text style={styles.buttonText}>Section List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
  },
});

export default ListButtons;