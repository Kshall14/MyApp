import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainMenuScreen from './Src/Screens/MainMenuScreen'; // Import main menu
import AppContent from './Src/Screens/AppContent';//important main app
import SignIn from './Src/Screens/SignInPage';
import ListRenderer from './Src/Components/IistRenderer';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();
const AppContentWithDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="AppContent"
      drawerContent={(props) => (
        <View>
          <Text>Hello</Text>
          <ListRenderer />
        </View>
      )}
    >
      <Drawer.Screen name="AppContent" component={AppContent} />
    </Drawer.Navigator>
  );
};
const TabNavigator = ()=>{
  return(
  <Tab.Navigator>
    <Tab.Screen name = 'MainMenu' component = {MainMenuScreen}/>
       <Tab.Screen name = 'AppContent' component = {AppContentWithDrawer}/>
        <Tab.Screen name = 'SignInPage' component = {SignIn}/>
  </Tab.Navigator>
  );
}
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
       <TabNavigator />
    
      
    </NavigationContainer>
  );
}

export default App;
