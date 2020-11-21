import React, { useState,useContext} from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

import { AuthContext } from '../navigation/AuthProvider';

const ForgotPassword = ({navigation}) => {
    const [email,setEmail] = useState();
    
    const {passwordReset} = useContext(AuthContext);

    return (
        <View style={ styles.container}>
            <Text style={styles.text}>Password recovery</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormButton
                buttonTitle="Send Email"
                onPress={()=> passwordReset(email)}
                onPress={()=>alert('Password reset email was sent succesfully')}
                
            />
        </View>

    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
        
    },
    text:{
        fontSize: 20,
        marginBottom: 20,
        color: "#051d5f",
        alignItems: "center",
        justifyContent: "center"
    },
    navButton:{
        marginTop: 15,
    },
   
});
