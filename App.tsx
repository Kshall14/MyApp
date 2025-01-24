import React from 'react';
import {
  SafeAreaView,StyleSheet,Text,Image,ActivityIndicator,
  Button,Alert,View, Modal, Pressable, SectionList,StatusBar, 
  StatusBarStyle, Platform, Switch, TouchableOpacity, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard,
  ScrollView, ImageBackground
} from 'react-native';
import { createStaticNavigation,NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenuScreen from './Src/Screens/MainMenuScreen'; 
import AppContent from './Src/Screens/AppContent'; 
import SignIn from './Src/Screens/SignInPage';
import Tabs from './Src/Components/TabsHandler';
import FoodScreen from './Src/Components/FoodScreen';
import SettingScreen from './Src/Components/SettingsScreen';
import TrackerScreen from './Src/Components/TrackerScreen';
const RootStack = createNativeStackNavigator({
  screens: {
    WelcomeBack: MainMenuScreen,
    Tabs: Tabs,
  }
});

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="WelcomeBack" component={MainMenuScreen} options={{ headerShown: false }}  />
        <RootStack.Screen name="SignUp" component={AppContent} options={{ headerShown: false }} />
        <RootStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <RootStack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;