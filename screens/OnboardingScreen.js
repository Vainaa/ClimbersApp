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
                image: <Image source={require('../assets/onboarding-img1.jpg')}/>,
                title: "Onboarding 1",
                subtitle: "Done with react native onboarding swiper",
            },

            {
                backgroundColor: "#fff",
                image: <Image source={require('../assets/onboarding-img3.jpg')}/>,
                title: "Onboarding 3",
                subtitle: "Done with react native onboarding swiper"
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
});