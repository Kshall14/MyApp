import React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import flatList from './FlatList';
const FoodScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World 1</Text>
      <FlatList
        data={flatList[0].data}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item.text}</Text>
        )}
        keyExtractor={(item) => item.key}
      />
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
  listItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default FoodScreen;