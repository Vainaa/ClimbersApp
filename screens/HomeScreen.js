import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';

const HomeScreen=()=> {
    return (
        <View style={syles.container}>
            <Text style={styles.text}>Welcome</Text>
            <FormButton
                buttonTitle="Logout" onPress={()=> navigator.navigate("Login")}
            />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",
    },
    text:{
        fontSize:20,
        color:"#333333"
    }
});