import Form from 'antd/lib/form/Form';
import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { windowHeigth, windowWidth } from '../utils/Dimensions';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
    return (
            <View style={styles.inputContainer}>
                <View>
                    <AntDesign name={iconType} size={25} color ="#666"/>
                </View>
                
                <TextInput
                    name={labelValue}
                    numberOfLines={1}
                    placeholder={placeholderText}
                    placeholderTextColor="#666"
                    {...rest}
                />
            </View>
    );
}

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width:"100%",
        height: windowHeigth / 15,
        borderColor: "#ccc",
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#fff"
    },
    iconStyle:{
        padding: 10,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRightColor: "#ccc",
        borderWidth: 1,
        width: 50,
    },
    input:{
        padding: 10,
        flex:1,
        fontSize: 16,
        fontFamily: "Lato-Regular",
        color: "#333",
        justifyContent:"center",
        alignItems: "center",
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth /1.5,
        height: windowHeigth /15,
        fontSize: 16,
        borderRadius: 6,
        borderWidth: 1,

    }
});