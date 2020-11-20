import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { useState } from 'react';
import { AuthContext } from '../navigation/AuthProvider';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes
} from '@react-native-community/google-signin';

const LoginScreen = ({navigation}) => {
    const [email,setEmail] = useState();
    const [password,setPassword]  = useState();
    const {login, googleLogin} = useContext(AuthContext);
    return (
        <View style={ styles.container}>
            <Image
                source={require('../assets/onboarding-img3.jpg')}
                style={styles.logo}
            />
            <Text style={styles.text}>Climbing App</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle="Sign in"
                onPress={()=>login(email,password)}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={()=> {navigation.navigate('Signup')}}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>
            <View>
                
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={()=>googleLogin()}
            /> 
            </View>
            <TouchableOpacity style={styles.forgotButton} onPress={()=> {navigation.navigate("Signup")}}>
                <Text style={styles.navButtonText}>Dont have an account? Click Here</Text>
            </TouchableOpacity>
        </View>

    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    logo:{
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text:{
        fontSize: 20,
        marginBottom: 10,
        color: "#051d5f",

    },
    navButton:{
        marginTop: 15,
    },
    forgotButton:{
        marginVertical: 35,
    },
    navButtonText:{
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        

    }
});