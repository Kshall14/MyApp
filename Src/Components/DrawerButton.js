import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const OpenSidePanelButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={{
      position: 'absolute',
      top: 20,
      right: 20,
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
    }}>
      <Text style={{ color: '#fff' }}>Open Side Panel</Text>
    </TouchableOpacity>
  );
};

export default OpenSidePanelButton;