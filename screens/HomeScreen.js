import React, { useContext } from 'react';
import { View, Text, StyleSheet,ImageBackground, useWindowDimensions, Dimensions } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import {windowHeight} from '../utils/Dimensions';

const {width, height} = Dimensions.get("window");
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT -50;

const HomeScreen=({navigation})=> {
    
    const {user, logout} = useContext(AuthContext);

    return (
        
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bgImage.jpg/')} style={styles.backgroundImage}>
            <View>
            <Text style={styles.text}>Welcome {user.displayName}</Text>
            </View>
            
                
            <View style={{flexDirection:"row", justifyContent:"center",marginBottom:"-60%"}}>
                <FormButton style={styles.card} 
                buttonTitle="Contact" onPress={()=> {navigation.navigate("Contact")}}
                />
                <FormButton style={styles.card}
                    buttonTitle="Logout" onPress={()=> logout()}
                />
                
            </View>
            <View style={{flexDirection:"row", justifyContent:"center",marginBottom:"-50%"}}>
                <FormButton style={styles.card}
            
                buttonTitle="Locations" onPress={()=> {navigation.navigate("Locations")}}
                />
                
                <FormButton style={styles.card}
                    buttonTitle="About" onPress={()=> {navigation.navigate("About")}}
                />
            </View>
           
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,       
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",   
    },
    text:{
        fontSize:20,
        color:"#000000",
        marginLeft:"0%",
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#F2d338',
        padding: 15,
        marginTop: "-120%",
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        fontWeight:"bold"
    },
    backgroundImage:{
        flex:1,
        justifyContent:"center",
        resizeMode: "cover",
        width:"100%"
    },
    card: {
        padding: 10,
        elevation: 2,
        backgroundColor: "#F2d338",
        marginVertical:"1%",
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT/2,
        width: CARD_WIDTH,
        marginHorizontal: "1%",
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
      },
});