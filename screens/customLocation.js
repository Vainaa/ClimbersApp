import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import LocationsScreen from '../screens/LocationsScreen';


const customLocation = ({location}) => {
    const [coordinate,setCoordinate] = useState();
    const [title,setTitle]  = useState();
    const [description,setDescription]  = useState();
    const [image,setImage]  = useState();
    const [link,setLink]  = useState();

    

    return (
        <View style={ styles.container}>
            <Text style={styles.text}>Add location</Text>
            <FormInput
                labelValue={title}
                onChangeText={(title) => setTitle(title)}
                placeholderText="Title"
                iconType="user"
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={description}
                onChangeText={(description) => setDescription(description)}
                placeholderText="Description"
                iconType="user"
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={image}
                onChangeText={(image) => setImage(image)}
                placeholderText="Image URI"
                iconType="user"
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={link}
                onChangeText={(link) => setLink(link)}
                placeholderText="Link"
                iconType="user"
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
            />
            
            
        </View>

    );
};

export default customLocation;

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
        color: '#000000',
        

    },
    linkButtonText:{
        fontSize: 18,
        fontWeight:'500',
        color: "#2e64e5"
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