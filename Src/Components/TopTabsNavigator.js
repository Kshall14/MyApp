// TabsNavigator.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DrawerNavigator from './DrawerNavigator'; // Import the drawer
import SignIn from '../Screens/SignInPage';
import AppContent from '../Screens/AppContent';

const Tab = createMaterialTopTabNavigator();

// Tab Navigator
const TabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AppContentWithDrawer">
        {() => <DrawerNavigator component={AppContent} />}
      </Tab.Screen>
      <Tab.Screen name="SignInPage">
        {() => <DrawerNavigator component={SignIn} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};


export default TabsNavigator;
