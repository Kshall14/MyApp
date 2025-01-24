// DrawerNavigator.js
import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppContent from '../Screens/AppContent'; 
import SignIn from '../Screens/SignInPage';
import ListRenderer from './ListRenderer';
import SwitchTabs from './TabsSwitcher';
const Drawer = createDrawerNavigator();

// Drawer Content
const DrawerContent = (props) => (
  <View>
    <Text>Hello</Text>
    <ListRenderer />
  </View>
);


// Drawer Navigator
const DrawerNavigator = ({ component: Component }) => {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={Component} />
      </Drawer.Navigator>
    );
  };

export default DrawerNavigator;
