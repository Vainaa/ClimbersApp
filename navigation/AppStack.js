// Handels stack navigation


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from  '../screens/HomeScreen';
import LocationsScreen from '../screens/LocationsScreen';
import Contact from '../screens/Contact';
import About from '../screens/About';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Locations" component={LocationsScreen}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="Contact" component={Contact}/>
            <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default AppStack;