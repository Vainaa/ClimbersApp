import React from 'react';
import { View,StyleSheet, Button, Text, TouchableOpacity } from 'react-native';
import { windowHeigth } from '../utils/Dimensions';

// import { Container } from './styles';

const FormButton = ({buttonTitle, ...rest}) => {
    return (
       <TouchableOpacity style={styles.buttoncontainer} {...rest}>
           <Text style={styles.buttonText}>{buttonTitle}</Text>
       </TouchableOpacity>
    );
}
const styles= StyleSheet.create({
    buttoncontainer:{
        marginTop: 10,
        width:'100%',
        height: windowHeigth / 15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3,
    },
    buttonText:{
        fontSize:18,
        fontWeight: 'bold',
        color:'#ffffff',
        fontFamily: 'Lato-Regular',
    },

}); 

export default FormButton;