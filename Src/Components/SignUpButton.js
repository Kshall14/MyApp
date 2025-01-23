import React from 'react';
import { storeData } from './Storage';
import { Button,TouchableOpacity, Image, StyleSheet } from 'react-native';

const SignUpButton =() =>{
  return(
      
       <Button style = 
       {styles.theButton} 
       title = 'Sign Up'> </Button>
       
    )
};
const styles = StyleSheet.create({
    theButton: {
      width: 60,
      height: 60,
      //borderRadius: 30,
      marginTop: 200,
      //backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
  });
  export default SignUpButton;
