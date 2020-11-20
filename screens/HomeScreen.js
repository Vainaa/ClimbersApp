import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';


const HomeScreen=({navigation})=> {

    const {user, logout} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome {user.uid}</Text>
            <FormButton
                buttonTitle="Locations" onPress={()=> {navigation.navigate("Locations")}}
            />
            <FormButton
                buttonTitle="Logout" onPress={()=> logout()}
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