import React, {useState} from 'react';
import{
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
}from 'react-native';
import BackGround from '../Components/Background';
import OpenSidePanelButton from '../Components/DrawerButton';
import SidePanel from '../Components/ParentSidePanel';
const MainMenuScreen = ({ navigation}: any)=>{
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
    const handleOpenSidePanel = () => {
        console.log('Button pressed!');
        setIsSidePanelOpen(true);
      };
      const handleCloseSidePanel = () => {
        setIsSidePanelOpen(false);
      };
    return(
        <SafeAreaView style={styles.safeArea}>
        <BackGround>
          <View style={styles.contentContainer}>
            <TouchableOpacity style={styles.button} onPress={handleOpenSidePanel}>
              <Text>Open Side Panel</Text>
            </TouchableOpacity>
            <Text>Welcome</Text>
          </View>
        </BackGround>
        <SidePanel isOpen={isSidePanelOpen} onClose={() => setIsSidePanelOpen(false)} />
      </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
       // alignItems: 'center',
        //justifyContent: 'center',
      },
      text:{
        fontSize: 24, marginBottom:20.
      },
      backgroundStyle: {
        flex: 1,
        resizeMode: 'cover', // Ensures the background image covers the entire screen
      },
      contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5, 
      },
      
      image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
      },
  
});
export default MainMenuScreen;