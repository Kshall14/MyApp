import React from 'react';
import { View, Text, StyleSheet,SectionList } from 'react-native';

const TrackerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TrackerScreen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C6F4D6',
  },
  text: {
    fontSize: 24,
  },
});

export default TrackerScreen;