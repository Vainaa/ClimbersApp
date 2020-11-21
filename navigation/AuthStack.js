import React, { useState, useEffect } from 'react';
import {View} from 'react-native';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import LocationsScreen from '../screens/LocationsScreen';
import HomeScreen from '../screens/HomeScreen';
import ForgotPassword from '../screens/ForgotPassword';
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { 
    GoogleSignin,
    GoogleSigninButton,
    statusCodes
} from '@react-native-community/google-signin';

const Stack = createStackNavigator();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;
    useEffect(() => {
        // initialize the Google SDK
        GoogleSignin.configure({
          webClientId: "1009191553837-ip6hnuf24urdeoduooft5k49augl7vv9.apps.googleusercontent.com",
        });
      }, []);
  
    useEffect(() => {
      AsyncStorage.getItem('alreadyLaunched').then((value) => {
        if (value == null) {
          AsyncStorage.setItem('alreadyLaunched', 'true'); 
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
     });


    }, []);
    if (isFirstLaunch === null) {
        return null; 
      } else if (isFirstLaunch == true) {
        routeName = 'Onboarding';
      } else {
        routeName = 'Splash';
      }

      return (
        <Stack.Navigator initialRouteName={routeName}>
          <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Locations"
            component={LocationsScreen}
            opotions={{header: () => null}}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={({navigation}) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f9fafd',
                shadowColor: '#f9fafd',
                elevation: 0,
              },
              headerLeft: () => (
                <View style={{marginLeft: 10}}>
                  <FontAwesome.Button 
                    name="long-arrow-left"
                    size={25}
                    backgroundColor="#f9fafd"
                    color="#333"
                    onPress={() => navigation.navigate('Login')}
                  />
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={({navigation}) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f9fafd',
                shadowColor: '#f9fafd',
                elevation: 0,
              },
              headerLeft: () => (
                <View style={{marginLeft: 10}}>
                  <FontAwesome.Button 
                    name="long-arrow-left"
                    size={25}
                    backgroundColor="#f9fafd"
                    color="#333"
                    onPress={() => navigation.navigate('Login')}
                  />
                </View>
              ),
            })}
          />
        </Stack.Navigator>
      );
    };
    
    export default AuthStack;
