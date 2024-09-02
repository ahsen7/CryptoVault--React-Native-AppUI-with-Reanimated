import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { AppColors } from '../Theme/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { WifiIcon } from 'react-native-heroicons/solid';
import { FadeInLeft, FadeInUp, FadeInRight, Easing } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: AppColors.bg, flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        <Animated.Text
          entering={FadeInLeft.duration(600).easing(Easing.ease)}
          className="text-white font-bold mt-3 ml-2"
          style={{ fontSize: wp(7) }}
        >
          CryptoVault
        </Animated.Text>

        {/* Centered cards container */}
        <View style={styles.centeredContainer}>
          <Animated.View
            entering={FadeInUp.springify().damping(30)}
            style={styles.cardContainer}
          >
            <Animated.View style={[styles.card, styles.cardOne]}>
              <Text style={styles.cardNumber}>0000 0000 0000 0000</Text>
              <Text style={styles.cardHolder}>Ian Bell</Text>
              <Text style={styles.expiry}>7/27</Text>
              <View style={styles.mastercardLogo}>
                <Image source={require('../../assets/images/image.png')} />
              </View>
            </Animated.View>

            <Animated.View style={[styles.card, styles.cardTwo]} className="bg-white/30">
              <Text style={styles.cardNumber}>0000 0000 0000 0000</Text>
              <Text style={styles.cardHolder}>Ian Bell</Text>
              <Text style={styles.expiry}>7/27</Text>
            </Animated.View>
          </Animated.View>
        </View>
      </ScrollView>

      {/* Position the text in the bottom-left corner */}
      <View style={styles.bottomTextContainer}>
        <Animated.Text entering={FadeInLeft.duration(600).easing(Easing.ease)} style={styles.bottomText}>
          Empowering Your Crypto Journey, Safeguarding Your Future.
        </Animated.Text>
        <Text style={styles.bottomText1}>
          Track and manage your diverse crypto holdings all in one place.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.getStartedText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    marginTop: -100, // Move the cards upwards by increasing the negative value
  },
  cardContainer: {
    width: width * 0.8,
    height: width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    height: '60%',
    borderRadius: 15,
    position: 'absolute',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'space-between',
  },
  cardOne: {
    backgroundColor: '#c2ff81',
    transform: [{ rotate: '-15deg' }],
    zIndex: 1,
  },
  cardTwo: {
    transform: [{ rotate: '5deg' }],
    zIndex: 0,
  },
  cardNumber: {
    fontSize: 18,
    color: '#000',
    marginBottom: 15,
  },
  cardHolder: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  expiry: {
    fontSize: 14,
    color: '#000',
  },
  mastercardLogo: {
    position: 'absolute',
    bottom: 70,
    right: 50,
    width: 30,
    height: 10,
    borderRadius: 5,
    transform: [{ rotate: '10deg' }],
  },
  bottomTextContainer: {
    position: 'absolute',
    bottom: hp(15), // Adjust vertical position
    left: wp(4),   // Adjust horizontal position
    padding: 10,
    maxWidth: wp(80), // Optional: limit width for readability
  },
  bottomText: {
    color: '#fff',
    fontSize: wp(5),
    fontWeight: 'bold',
    textAlign: 'left',
  },
  bottomText1: {
    color: "#615E5E",
    fontSize: wp(3.8),
    fontWeight: "600",
    textAlign: 'left',
    marginTop: 10, // Add space between bottomText and bottomText1
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30, // Distance from the bottom of the screen
    left: 0,
    right: 0,
    alignItems: 'center', // Centers the button horizontally
  },
  getStartedButton: {
    backgroundColor: '#c2ff81', 
    width: wp(80),
    padding: 15,
    borderRadius: 10, // Rounded corners
    elevation: 5, // Shadow for Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  getStartedText: {
    color: "#615E5E", // White text color
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center"
  },
});