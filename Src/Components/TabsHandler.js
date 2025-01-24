import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {View, FlatList, StyleSheet, Text, StatusBar, Button, Image} from 'react-native';
import TrackerScreen from './TrackerScreen';
import FoodScreen from './FoodScreen';
import SettingScreen from './SettingsScreen';
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const Tabs = props => {
    const Drawer = createDrawerNavigator();

    function MyTopTabs(){
        return (
            <TopTab.Navigator
            screenOptions={{
                tabBarStyle: {
                  backgroundColor: '#303', // Change the background color to #333
                },
                tabBarActiveTintColor: '#f0f', // Change the active tab text color to #fff
                tabBarInactiveTintColor: '#ccc', // Change the inactive tab text color to #ccc
              }}
            >
            <TopTab.Screen 
            name="TrackerTop" 
            component={TrackerScreen}
            options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Image 
                    source={require('../SourceImages/Assets/Tracker.png')} 
                    style={{ width: size, height: size, tintColor: color }}
             />
                ),
            }}
            />
            <TopTab.Screen 
            name="FoodTop" 
            component={FoodScreen}
            options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Image 
                    source={require('../SourceImages/Assets/Food.png')} 
                    style={{ width: size, height: size, tintColor: color }}
             />
                ),
            }} />
            <TopTab.Screen 
            name="SettingsTop" 
            component={SettingScreen} 
            options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Image 
                    source={require('../SourceImages/Assets/Settings.png')} 
                    style={{ width: size, height: size, tintColor: color }}
             />
                ),
            }}
            /> 
            </TopTab.Navigator>
          );
    }

    function MyBottomTabs() {
        return (
          <BottomTab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#303', // Change the background color to #333
            },
            tabBarActiveTintColor: '#f0f', // Change the active tab text color to #fff
            tabBarInactiveTintColor: '#c0c', // Change the inactive tab text color to #ccc
          }}
          >
            <BottomTab.Screen 
            name="Tracker" 
            component={TrackerScreen} 
            options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Image 
                    source={require('../SourceImages/Assets/Tracker.png')} 
                    style={{ width: size, height: size, tintColor: color }}
             />
                ),
            }}/>
            <BottomTab.Screen 
            name=" " 
            component={FoodScreen} 
            options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Image 
                    source={require('../SourceImages/Assets/Food.png')} 
                    style={{ width: size, height: size, tintColor: color }}
             />
                ),
            }}/>
            <BottomTab.Screen 
            name="SettingsBottom" 
            component={SettingScreen} 
            options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Image 
                    source={require('../SourceImages/Assets/Settings.png')} 
                    style={{ width: size, height: size, tintColor: color }}
             />
                ),
            }}/> 
          </BottomTab.Navigator>
        );
      }

return(    
    

    <Drawer.Navigator>
    <Drawer.Screen name="BottomTabs" component={MyBottomTabs} />
    <Drawer.Screen name="TopTabs" component={MyTopTabs} />

  </Drawer.Navigator>
)
};

export default Tabs;