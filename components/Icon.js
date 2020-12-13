
import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const Icon = ({labelValue, placeholderText, iconType, ...rest}) => {
    return (
            <View style={styles.inputContainer}>
                <View style={styles.iconStyle}>
                    <AntDesign name={iconType} size={25} color ="#666"/>
                </View>
            </View>
    );
}

export default Icon;

const styles = StyleSheet.create({
    inputContainer: {
      width: '100%',
      height: windowHeight / 15,
      borderRadius: 3,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    iconStyle: {
      padding: 10,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightColor: '#ccc',
      width: 50,
    },
    input: {
      padding: 10,
      flex: 1,
      fontSize: 16,
      fontFamily: 'Lato-Regular',
      color: '#333',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputField: {
      padding: 10,
      marginTop: 5,
      marginBottom: 10,
      width: windowWidth / 1.5,
      height: windowHeight / 15,
      fontSize: 16,
      borderRadius: 8,
      borderWidth: 1,
    },
  });