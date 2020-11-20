import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import MapView, {PROVIDER_GOOGLE, animateToRegion} from "react-native-maps";;


const {width, height} = Dimensions.get("window");
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT -50;

const Images = [

  { uri: "https://imgur.com/RbLtTsz.png" },
  { uri: "https://imgur.com/SHarS07.jpg" },
  { uri: "https://imgur.com/Oj6nmfD.jpg" },
  { uri: "https://imgur.com/6WS7zsT.jpg" }

]



export default class LocationsScreen extends Component{
       
   
    
    state={
        markers: [
            {
                coordinate:{
                    latitude:60.166005, 
                    longitude:24.702590,
                    
                },
                title: "Espoo",
                description:"Boulderkeskus Espoo",
                image: Images[0],//IMAGE HERE
                    
                },
                {
                coordinate:{
                    latitude:60.18683259, 
                    longitude:24.978029442,
                
                },
                title: "Kalasatama",
                description:"Kalastaman Kiipeilyareena",
                image: Images[1],//IMAGE HERE
                        
                },  
                {
                    coordinate:{
                    latitude:60.1608710312, 
                    longitude:24.9029297216,
                    
                },
                title: "Salmisaari",
                description:"Salmisaaren Kiipeilyareena",
                image: Images[2],//IMAGE HERE
                    
                },  
                {
                    coordinate:{
                    latitude:60.203845, 
                    longitude:25.047602,
                    
                },
                title: "Herttoniemi",
                description:"Boulderkeskus Herttoniemi",
                image: Images[3],//IMAGE HERE
                    
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
              <MapView.Animated
                ref={map => this.map = map}
                initialRegion={this.state.region}
                style={styles.container}
                showsUserLocation
                provider={PROVIDER_GOOGLE}

               
              >
                {this.state.markers.map((marker, index) => {
                  const scaleStyle = {
                    transform: [
                      {
                        scale: interpolations[index].scale,
                      },
                    ],
                  };
                  const opacityStyle = {
                    opacity: interpolations[index].opacity,
                  };
                  return (
                    <MapView.Marker key={index} coordinate={marker.coordinate}>
                      <Animated.View style={[styles.markerWrap, opacityStyle]}>
                        <Animated.View style={[styles.ring, scaleStyle]} />
                        <View style={styles.marker} />
                      </Animated.View>
                    </MapView.Marker>
                  );
                })}
              </MapView.Animated>
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
        cardtitle: {
          fontSize: 12,
          marginTop: 5,
          fontWeight: "bold",
        },
        cardDescription: {
          fontSize: 12,
          color: "#444",
        },
        markerWrap: {
          alignItems: "center",
          justifyContent: "center",
        },
        marker: {
          width: 16,
          height: 16,
          borderRadius: 8,
          backgroundColor: "rgba(130,4,150, 0.9)",
        },
        ring: {
          width: 48,
          height: 48,
          borderRadius: 24,
          backgroundColor: "rgba(130,4,150, 0.3)",
          position: "absolute",
          borderWidth: 1,
          borderColor: "rgba(130,4,150, 0.5)",
        },
      });
