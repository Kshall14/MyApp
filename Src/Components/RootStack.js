// StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './TopTabsNavigator'; // Import your drawer with tabs
import MainMenuScreen from '../Screens/MainMenuScreen';
import TabsNavigator from './TopTabsNavigator';
const Stack = createStackNavigator();
const RootStack = () => {
    return (
      <Stack.Navigator>
         <Stack.Screen name="MainMenu" component={MainMenuScreen} />
        <Stack.Screen name="TabNavigator" component={TabsNavigator} />
       
      </Stack.Navigator>
    );
  };
  export default RootStack;
/*const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MainMenu">
      <Stack.Screen
        name="MainMenu"
        component={MainMenuScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};*/

//export default StackNavigator;
