// TextComponent.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextComponent1 = () => {
  return (
    <>
      <Text style={styles.title}>FOODCORT</Text>
      <Text style={styles.description}>FOOD DELIVERY SERVICE</Text>
      </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#666',
  },
});

export default TextComponent1;