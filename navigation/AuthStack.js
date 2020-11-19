import React, { useState, useEffect } from 'react';
import {View} from 'react-native';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
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
          webClientId: '1009191553837-ip6hnuf24urdeoduooft5k49augl7vv9.apps.googleusercontent.com',
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
        routeName = 'Login';
      }

      return (
        <Stack.Navigator initialRouteName={routeName}>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{header: () => null}}
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
        </Stack.Navigator>
      );
    };
    
    export default AuthStack;
