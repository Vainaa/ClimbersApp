//Provide contact information for the user


import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import LocationsScreen from './LocationsScreen';


const Contact = ({location}) => {

    return (
        <View style={ styles.container}>
            <Text style={styles.text}>About</Text>

            <View>
                <Text style={styles.text}>The goal for this app is to provide a way for users to quickly find and locate nearby climbing gyms and sites.</Text>
                <Text style={styles.text}>Users can also create their own custom locations</Text>
                <Text style={styles.text}>This app was Developed as a part of study unit R0335-3002 Building and Deploying Cross Platfrom Mobile Apps</Text>
               
               
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
        margin:"4%"

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