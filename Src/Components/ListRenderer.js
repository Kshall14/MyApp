import React, { useState } from 'react';
import { View, Text, FlatList, SectionList, Button } from 'react-native';
import lists from './Lists';

const ListRenderer = () => {
  const [listType, setListType] = useState('SectionList');
  const renderList = () => {
    if (listType === 'SectionList') {
      return (
        <SectionList
          sections={lists[1].data}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <Text>{item.text}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={{ fontSize: 24 }}>{section.title}</Text>
          )}
        />
      );
    } else {
      return (
        <FlatList
          data={lists[0].data}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <Text>{item.text}</Text>}
        />
      );
    }
  };

  return (
    <View>
      <Button title="Show Section List" onPress={() => setListType('SectionList')} />
      <Button title="Show Flat List" onPress={() => setListType('FlatList')} />
      {renderList()}
    </View>
  );
};

export default ListRenderer;