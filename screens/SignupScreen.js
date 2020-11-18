import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { useState } from 'react';


const SignupScreen = ({navigation}) => {
    const [email,setEmail] = useState();
    const [password,setPassword]  = useState();
    const [confirmPassword,setConfirmPassword]  = useState();
    return (
        <View style={ styles.container}>
            <Text style={styles.text}>Create Account</Text>
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
            <FormInput
                labelValue={confrimPassword}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Confrim Password"
                iconType="lock"
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle="Sign up"
                onPress={()=>alert("Sing up clicked")}
            />
            <View style={styles.textPrivate}>
                <Text style={styles.colorTextPrivate}>By registering, you confirm that you accept to our</Text>
                <TouchableOpacity onPress={()=>alert('Soul sold!')}><Text style={[styles.colorTextPrivate,{color: '#e88832'}]}>Terms of Serivce</Text></TouchableOpacity>
            </View>
            <SocialButton
                buttonTitle="Sign in with Goolge"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={()=>{}}
            />
            <TouchableOpacity style={styles.forgotButton} onPress={()=> {navigation.navigate("Login")}}>
                <Text style={styles.navButtonText}>Have an account? Sign in</Text>
            </TouchableOpacity>
        </View>

    );
};

export default SignupScreen;

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
        color: '#2e64e5',
        

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