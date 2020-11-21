import React, { useContext } from 'react';
import { View, Text, StyleSheet,ImageBackground } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import {windowHeight} from '../utils/Dimensions';

const HomeScreen=({navigation})=> {

    const {user, logout} = useContext(AuthContext);

    return (
        
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bgImage.jpg/')} style={styles.backgroundImage}>
            <Text style={styles.text}>Welcome {user.uid}</Text>
            <View>
                <FormButton
                    buttonTitle="Locations" onPress={()=> {navigation.navigate("Locations")}}
                />
                <FormButton
                    buttonTitle="Logout" onPress={()=> logout()}
                />
            </View>
           
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,       
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",
        
    },
    text:{
        fontSize:20,
        color:"#000000",
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#F2d338',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        fontWeight:"bold"
    },
    backgroundImage:{
        flex:1,
        justifyContent:"center",
        resizeMode: "cover"
    }
});