import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


const TextInputs = () => {

  return (
    <View>
 <TextInput
        style={styles.input}
        onChangeText={(text) => {
        }}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      
      <TextInput
        style={styles.input}
        onChangeText={(handleUsernameChange) => {

        }}
        placeholder="Enter your username"
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => {
        }}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10, 
    width: '80%', 
    alignSelf: 'center',
  },
});

export default TextInputs;