import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import  Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
            {
                backgroundColor: "#fff",
                image: <Image source={require('../assets/onboarding-img1.png') }style={styles.logo}/>,
                title: "Onboarding 1",
                subtitle: "Use this app to find climbing gyms near you",
            },

            {
                backgroundColor: "#fff",
                image: <Image source={require('../assets/onboarding-img3.png')}/>,
                title: "Onboarding 3",
                subtitle: "Placeholder text goes here"
            },
            
        ]}
        />
    );
};

export default OnboardingScreen;

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
    }
});