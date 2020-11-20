import React, {useState, useContext} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const CreateMarker = ({navigation}) => {
    const [longitude, setLongitude] = useState();
    const [latitude, setLatitude] = useState();
    const [description, setDescription] = useState();

    return (
        <View style={StyleSheet.container}>
            <Text style={styles.text}>Add Location</Text>
            <FormInput
                labelValue={description}
                onChangeText={(userDescription) => setDescription(userDescription)}
                placeholderText="Description"
                iconType="EditOutlined"
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={longitude}
                onChangeText={(userLongitude) => setLongitude(userLongitude)}
                placeholderText="Longitude"
                iconType="UpOutlined"
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={latitude}
                onChangeText={(userLatitude) => setLatitude(userLatitude)}
                placeholderText="Latitude"
                iconType="RightOutlined"
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormButton
                buttonTitle="Done" onPress={()=> {navigation.navigate("Locations")}}
            />
        </View>
    )
}

export default CreateMarker;