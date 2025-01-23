import React from 'react';
import { Button,TouchableOpacity, Image, StyleSheet } from 'react-native';

const SignInButton =({ onPress }) =>{
  return (
    <Button
      title="Sign In"
      onPress={onPress}
      style={styles.theButton}
    />
  );
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
  export default SignInButton;
