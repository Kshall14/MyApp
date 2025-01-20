import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenuScreen from './MainMenuScreen'; // Import main menu
import AppContent from './AppContent';//important main app

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        {/* Main Menu Screen */}
        <Stack.Screen 
          name="MainMenu" 
          component={MainMenuScreen} 
          options={{ headerShown: false }} 
        />
        
        {/* Main App Screen */}
        <Stack.Screen 
          name="AppContent" 
          component={AppContent} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
