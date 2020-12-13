//Provide contact information for the user


import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import LocationsScreen from './LocationsScreen';


const Contact = ({location}) => {

    return (
        <View style={ styles.container}>
            <Text style={styles.text}>Contact</Text>

            <View>
                <Text style={styles.text}>Developer: Ilmari Annila</Text>
                <Text style={styles.text}>Email: Ilmari.Annila@gmail.com</Text>
                <Text style={styles.text}>GitHub: https://github.com/Vainaa</Text>
            </View>
  
            
        </View>

    );
};

export default Contact;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        fontSize: 20,
        marginBottom: 10,
        color: "#051d5f",

    },
    navButton:{
        marginTop: 15,
    },
    navButtonText:{
        fontSize: 18,
        fontWeight: '500',
        color: '#000000',
        

    },
    linkButtonText:{
        fontSize: 18,
        fontWeight:'500',
        color: "#2e64e5"
    },
    colorTextPrivate:{
        fontSize: 13,
        fontWeight: '400',
        color:"grey"
    },
    textPrivate:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: "center"
    }
});