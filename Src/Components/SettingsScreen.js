import React from 'react';
import { View, Text, StyleSheet,SectionList,Background } from 'react-native';
import sectionList from './SectionList';
const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>settings screen</Text>
      <SectionList
        sections={sectionList}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
            <View style={styles.itemContainer}>
          <Text style={styles.listItem}>{item.text}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>{section.title}</Text>
          </View>
        )}
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
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItem: {
    fontSize: 16,
  },
  sectionHeaderContainer: {
    backgroundColor: '#f000f0',
    padding: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingScreen;