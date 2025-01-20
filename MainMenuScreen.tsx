import React from 'react';
import{
    SafeAreaView,
    StyleSheet,
    Text,
    Button,
    ImageBackground,
    TextInput,
}from 'react-native';
import Header from './Header';
import BackGround from './Background'
//function App(): React.JSX.Element {
 

const MainMenuScreen = ({ navigation}: any)=>{
  const [name, setName] = React.useState('');
    return(
        <SafeAreaView style={styles.safeArea}>
        <BackGround> 
        <Header /> 
          <TextInput
                    style={{
                      height: 40,
                      width: 400,
                      borderColor: 'gray',
                      borderWidth: 1,
                      alignItems: 'center',
                      textAlignVertical: 'top',
                      color: '#00FF00',
                    }}
                    placeholder="Enter your name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    placeholderTextColor="#00FF00"
                    //defaultValue="Type in me please"
                  />
        <Button
            title="Enter App"
            onPress={() => navigation.navigate('AppContent', {name: name})} // Navigate to the app screen
          />
        </BackGround>
      </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
        fontSize: 24, marginBottom:20.
      },
      backgroundStyle: {
        flex: 1,
        resizeMode: 'cover', // Ensures the background image covers the entire screen
      },
});
export default MainMenuScreen;