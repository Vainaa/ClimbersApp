
import React from 'react';
import {Text, TouchableOpacity, StyleSheet,ImageBackground} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';

const MenuButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
    <ImageBackground source={require('../assets/mapIcon.png/')} style={styles.backgroundImage}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </ImageBackground>
    </TouchableOpacity>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '80%',
    margin:"10%",
    height: windowHeight / 15,
    backgroundColor: '#F2d338',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,

  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Lato-Regular',
  },
  backgroundImage:{
    flex:1,
    justifyContent:"center",
    resizeMode: "cover",
    width:"100%",
    justifyContent:"center",
    
},
});