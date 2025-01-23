import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ListButtons from './listButtons';
import { FlatList, SectionList } from 'react-native';
import lists from './Lists';

const SidePanel = ({ isOpen, onClose }) => {
  const [currentList, setCurrentList] = useState(null);

  const handleFlatList = () => {
    setCurrentList('FlatList');
  };

  const handleSectionList = () => {
    setCurrentList('SectionList');
  };

  return (
    <View style={[styles.container, isOpen && styles.open]}>
      <View style={styles.panel}>
        <Text>Side Panel Content</Text>
        <ListButtons
          onFlatListPress={handleFlatList}
          onSectionListPress={handleSectionList}
        />
        {currentList === 'FlatList' && (
          <FlatList
            data={lists[0].data}
            renderItem={({ item }) => <Text>{item.text}</Text>}
            keyExtractor={(item) => item.key}
          />
        )}
        {currentList === 'SectionList' && (
          <SectionList
            sections={lists[1].data}
            renderItem={({ item }) => <Text>{item.text}</Text>}
            renderSectionHeader={({ section }) => (
              <Text style={{ fontSize: 24 }}>{section.title}</Text>
            )}
            keyExtractor={( item) => item.key}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 0,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  open: {
    width: Dimensions.get('window').width * 0.6,
  },
  panel: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 30,
  },
});

export default SidePanel;