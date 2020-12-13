import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
  Button, 
  Alert,
  Modal,
  TouchableHighlight,
} from "react-native";

import MapView, {PROVIDER_GOOGLE, animateToRegion, Marker} from "react-native-maps";
import FormInput from '../components/FormInput';
import TextArea from "../components/TextArea";
import {windowHeight} from '../utils/Dimensions';
import Icon from '../components/Icon';

const {width, height} = Dimensions.get("window");
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT -50;
const Images = [

  { uri: "https://imgur.com/RbLtTsz.png" },
  { uri: "https://imgur.com/SHarS07.jpg" },
  { uri: "https://imgur.com/Oj6nmfD.jpg" },
  { uri: "https://imgur.com/6WS7zsT.jpg" }

]
const Links = [
  "https://www.boulderkeskus.com/fi/sivu/hallit/Espoo",// [0]
  "https://kiipeilyareena.com/kalasatama/", // [1]
  "https://kiipeilyareena.com/salmisaari-seinakiipeily/",// [2]
  "https://www.boulderkeskus.com/en/sivu/gyms/herttoniemi/"// [3]
]
let location = null;

export default class LocationsScreen extends Component{

  displayModal(show){
    this.setState({isVisible: show})
  }
  constructor(props){
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }
  updateCardTitle = (title) =>{
    this.setState({
     cardTitle:title,
    })
  }
  updateCardDesc = (desc) =>{
    this.setState({
     cardDesc:desc,
    })
  }
  saveLocation=(e)=>{
    location=e.nativeEvent.coordinate;
    this.displayModal(true)
  }
  handlePress(){   
    
    this.setState({
      markers:[
        ...this.state.markers,{
          title: this.state.cardTitle,
          description:this.state.cardDesc,
          coordinate:location,    
          image: {uri: "https://via.placeholder.com/150"}
        }
      ]
    }) 
  }   
  state={
        isVisible: false,
        markers: [        
            {
                coordinate:{
                    latitude:60.166005, 
                    longitude:24.702590,
                    
                },
                title: "Espoo",
                description:"Boulderkeskus Espoo",
                image: Images[0],//IMAGE HERE
                link: Links[0]    
                },
                {
                coordinate:{
                    latitude:60.18683259, 
                    longitude:24.978029442,
                
                },
                title: "Kalasatama",
                description:"Kalastaman Kiipeilyareena",
                image: Images[1],//IMAGE HERE
                link: Links[1]  
                },  
                {
                    coordinate:{
                    latitude:60.1608710312, 
                    longitude:24.9029297216,
                    
                },
                title: "Salmisaari",
                description:"Salmisaaren Kiipeilyareena",
                image: Images[2],//IMAGE HERE
                link: Links[2]    
                },  
                {
                    coordinate:{
                    latitude:60.203845, 
                    longitude:25.047602,
                    
                },
                title: "Herttoniemi",
                description:"Boulderkeskus Herttoniemi",
                image: Images[3],//IMAGE HERE
                link: Links[3] 
                },  
            ],     
            region:{
                latitude:60.166005, 
                longitude:24.702590,
                latitudeDelta: 0.05864195044303443,
                longitudeDelta: 0.050142817690068,
            },  
  };
        render() {
          this.index = 0;
          this.animation = new Animated.Value(0);
          this.animation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            if (index >= this.state.markers.length) {
              index = this.state.markers.length - 1;
            }
            if (index <= 0) {
              index = 0;
            }
            clearTimeout(this.regionTimeout);
            this.regionTimeout = setTimeout(() => {
              if (this.index !== index) {
                this.index = index;
                const { coordinate } = this.state.markers[index];
                this.map.animateToRegion(
                  {
                    ...coordinate,
                    latitudeDelta: this.state.region.latitudeDelta,
                    longitudeDelta: this.state.region.longitudeDelta,
                  },
                  350
                );
              }
            }, 10);
          });
          const interpolations = this.state.markers.map((marker, index) => {
            const inputRange = [
              (index - 1) * CARD_WIDTH,
              index * CARD_WIDTH,
              ((index + 1) * CARD_WIDTH),
            ];
            const scale = this.animation.interpolate({
              inputRange,
              outputRange: [1, 2.5, 1],
              extrapolate: "clamp",
            });
            const opacity = this.animation.interpolate({
              inputRange,
              outputRange: [0.35, 1, 0.35],
              extrapolate: "clamp",
            });
            return { scale, opacity };
          });
          return (
            <View style={styles.container}>
              <Text style={{fontSize:20,fontWeight:"bold", textAlign:"center"}}>Hold to add custom location</Text>
              <MapView.Animated
                ref={map => this.map = map}
                initialRegion={this.state.region}
                style={styles.container}
                showsUserLocation
                provider={PROVIDER_GOOGLE}
                onLongPress={this.saveLocation}        
              >
                {this.state.markers.map((marker, index) => {                 
                  return (
                    <MapView.Marker key={index} coordinate={marker.coordinate}/>
                  );
                })}
              </MapView.Animated>
              <Modal 
                animationType = {"slide"}
                transparent={false}
                visible={this.state.isVisible}
                onRequestClose={() => {
                  this.displayModal(!this.state.isVisible);
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.displayModal(!this.state.isVisible);
                  }}>
                  <Icon iconType="arrowleft"/>
                </TouchableOpacity>
                <View style={styles.modalContainer}>
                <Text style={{fontSize:25, marginTop:-0}}>Create new location</Text>
                <Image
                  source={require('../assets/onboarding-img3.png')}
                  style={styles.logo}
                />
                  
                  <Text style={styles.text}>Location Name</Text>
                  
                <FormInput
                iconType="edit"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(title) => this.updateCardTitle(title)}
                value={this.state.cardTitle}               
                />
                <Text style={styles.text}>Description</Text>
                <TextArea
                numberOfLines={50}
                autoCorrect={false}
                onChangeText={(title) => this.updateCardDesc(title)}
                value={this.state.cardDesc}               
                />
                <View style={styles.buttonContainer}>
                  <Text style={styles.closeText}
                    onPress={() => {
                      this.handlePress();
                      this.displayModal(!this.state.isVisible);}
                    }> Save
                  </Text>
                </View>
                
                </View>
              </Modal>
              <Animated.ScrollView
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH}
                onScroll={Animated.event(
                  [
                    {
                      nativeEvent: {
                        contentOffset: {
                          x: this.animation,
                        },
                      },
                    },
                  ],
                  { useNativeDriver: true }
                )}
                style={styles.scrollView}
                contentContainerStyle={styles.endPadding}
              >
                {this.state.markers.map((marker, index) => (
                  <TouchableOpacity style={styles.card} key={index}
                  onPress={()=> {Linking.openURL(marker.link)}}
                  >
                    <Image
                      source={marker.image}
                      style={styles.cardImage}
                      resizeMode="cover"
                    />
                    <View style={styles.textContent}>
                      <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                      <Text numberOfLines={1} style={styles.cardDescription}>
                        {marker.description}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </Animated.ScrollView>
            </View>
          );
          
        }
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        modalContainer:{
          flex:1,       
          flexDirection: "column",
          justifyContent:"center",
          alignItems: "center",
        },
        scrollView: {
          position: "absolute",
          bottom: 30,
          left: 0,
          right: 0,
          paddingVertical: 10,
        },
        endPadding: {
          paddingRight: width - CARD_WIDTH,
        },
        card: {
          padding: 10,
          elevation: 2,
          backgroundColor: "#FFF",
          marginHorizontal: 10,
          shadowColor: "#000",
          shadowRadius: 5,
          shadowOpacity: 0.3,
          shadowOffset: { x: 2, y: -2 },
          height: CARD_HEIGHT,
          width: CARD_WIDTH,
          overflow: "hidden",
        },
        cardImage: {
          flex: 3,
          width: "100%",
          height: "100%",
          alignSelf: "center",
        },
        textContent: {
          flex: 1,
        },
        desc:{
          height: 50,
        },
        cardtitle: {
          fontSize: 12,
          marginTop: 5,
          fontWeight: "bold",
        },
        cardDescription: {
          fontSize: 12,
          color: "#444",
        },
        closeText: {
          fontSize: 24,
          color: '#00479e',
          textAlign: 'center',
        },
        text:{
          fontSize:20,
          color:"#000000",
          marginTop: 10,
          width: '100%',
          height: windowHeight / 15,
          backgroundColor: '#F2d338',
          padding: 10,
          textAlign: 'center',
          justifyContent: 'center',
          borderRadius: 3,
          fontWeight:"bold"
      },
      buttonContainer: {
        marginTop: 10,
        width: '40%',
        height: windowHeight / 15,
        backgroundColor: '#F2d338',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
      },
      logo:{
        height: 150,
        width: 150,
        resizeMode: 'cover',
        margin:20
    },
      });
