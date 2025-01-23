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

      <Text style={styles.title}>Username:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {

        }}
        placeholder="Enter your username"
      />

      <Text style={styles.title}>Password:</Text>
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
  },
});

export default TextInputs;