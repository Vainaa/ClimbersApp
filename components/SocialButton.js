import React from 'react';
import { View,StyleSheet, Button, Text, TouchableOpacity } from 'react-native';
import { windowHeigth } from '../utils/Dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

const SocialButton = ({buttonTitle,btnType,color,backgroundColor, ...rest}) => {
    let bgColor = backgroundColor;
    return (
       <TouchableOpacity style={styles.buttonContainer, {backgroundColor: bgColor}} {...rest}>
           <View style={styles.iconWrapper}>
                <FontAwesome name={btnType} style={styles.icon} size={22} color={color}/>
           </View>
           <View style={styles.btnTextWrapper}>
                <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
           </View>
           
       </TouchableOpacity>
    );
}
const styles= StyleSheet.create({
    buttonContainer:{
        marginTop: 10,
        width:'100%',
        height: windowHeigth / 20,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3,
    },
    buttonText:{
        fontSize:18,
        fontWeight: 'bold',
        color:'#ffffff',
        fontFamily: 'Lato-Regular',
    },
    iconWrapper:{   
        width:30,
        justifyContent:"center",
        alignItems:"center"
    },
    icon:{
        fontWeight:'bold'
    },
    btnTextWrapper:{
        justifyContent:"center",
        alignItems:"center"
    },


}); 

export default SocialButton;