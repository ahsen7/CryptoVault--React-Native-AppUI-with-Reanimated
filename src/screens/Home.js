import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity, Image, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react';
import { AppColors } from '../Theme/Colors';
import {MapPinIcon, Bars4Icon} from 'react-native-heroicons/solid'
import {BellIcon} from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const avatar = require("../../assets/images/avatar_.png");
const btc = require("../../assets/images/btc.png")
const stklines = require("../../assets/images/stock.png")
const eth = require("../../assets/images/eth.png")
const lite = require("../../assets/images/lite.png")
const doge = require("../../assets/images/doge.png")

const Home = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 relative" style={{backgroundColor: AppColors.bg}}>
      <StatusBar />
      <SafeAreaView className="flex-1">
        <View className="px-4 flex-row justify-between items-center">
          <Image source={avatar} className="h-9 w-9 rounded-full" />
          <View className="flex-row items-center space-x-2">
          <MapPinIcon size={25} color={AppColors.btnclr}/>
          <Text className="text-white font-semibold">Lahore, Pakistan</Text>
          </View>
          <Bars4Icon size={27} color={AppColors.btnclr} />
        </View>
        <View className="px-4 mt-2">
          <Text className="font-bold text-xl pt-4" style={{color:AppColors.txtclr}}>Total Balance</Text>
          <Text className="text-white text-4xl font-bold">$20,000.12</Text>
          <Text className="text-sm" style={{color: AppColors.btnclr}}>-0.28 (0.20)</Text>
        </View>
        <View className="px-4 mt-6 flex-row justify-between items-center">
        <Text className="text-white font-semibold">⚡ ACTIVITY</Text>
          <Text className="text-white font-semibold">PORTFOLIO ▼</Text>
        </View>
        <ScrollView horizontal className="px-6 mt-4" showsHorizontalScrollIndicator={false}>
          <View className="rounded-lg h-44 w-44 mr-4 p-4" style={{backgroundColor: AppColors.btnclr}}>
            <View className="flex-row justify-between">
              <Image source={btc} className="h-6 w-6" />
              <Text className="text-black text-sm">BTC</Text>
            </View>
            <Text className="text-black text-sm mt-2">5.58%</Text>
            <Image source={stklines} className="h-16 w-full mt-2" resizeMode="contain" />
          </View>
          <View className="bg-gray-700 rounded-lg h-44 w-44 p-3">
            <View className="flex-row justify-between">
              <Image source={eth} className="h-6 w-6" />
              <Text className="text-white text-sm">ETH</Text>
            </View>
            <Text className="text-white text-sm mt-2">-2.48%</Text>
            <Image source={stklines} className="h-16 w-full mt-2" resizeMode="contain" />
          </View>
        </ScrollView>
        <View className="px-4 mt-4">
          <Text className="text-white font-semibold">Crypto Assets</Text>
          <View className="mt-2 p-4 bg-gray-700 rounded-lg  flex-row justify-between items-center h-16">
            <View className="flex-row items-center">
              <Image source={btc} className="h-8 w-8 mr-2"/>
              <Text className="text-white text-base">Bitcoin</Text>
            </View>
            <View className="flex-col items-center">
              <Text className="text-white text-base mr-2">$18,700.23</Text>
              <Text className="text-xs ml-10" style={{color: AppColors.btnclr}}>5.58%</Text>
            </View>
          </View>
          <View className="mt-2 p-4 bg-gray-700 rounded-lg  flex-row justify-between items-center h-16">
            <View className="flex-row items-center">
              <Image source={eth} className="h-8 w-8 mr-2"/>
              <Text className="text-white text-base">Ethereum</Text>
            </View>
            <View className="flex-col items-center">
              <Text className="text-white text-base mr-2">$56,700.33</Text>
              <Text className="text-red-500 text-xs ml-10">-2.48%</Text>
            </View>
          </View>
          <View className="mt-2 p-4 bg-gray-700 rounded-lg  flex-row justify-between items-center h-16">
            <View className="flex-row items-center">
              <Image source={lite} className="h-8 w-8 mr-2"/>
              <Text className="text-white text-base">Litecoin</Text>
            </View>
            <View className="flex-col items-center">
              <Text className="text-white text-base mr-2">$28,890.14</Text>
              <Text className="text-xs ml-10" style={{color: AppColors.btnclr}}>6.21%</Text>
            </View>
          </View>
          <View className="mt-2 p-4 bg-gray-700 rounded-lg  flex-row justify-between items-center h-16">
            <View className="flex-row items-center">
              <Image source={doge} className="h-8 w-8 mr-2"/>
              <Text className="text-white text-base">Dogecoin</Text>
            </View>
            <View className="flex-col items-center">
              <Text className="text-white text-base mr-2">$4,766.09</Text>
              <Text className="text-xs ml-10" style={{color: AppColors.btnclr}}>3.65%</Text>
            </View>
          </View>
          <TouchableOpacity className="p-4 rounded-md mt-4 items-center" style={{backgroundColor: AppColors.btnclr}} onPress={()=> navigation.navigate("Exchange")}>
            <Text className="text-center text-lg font-bold" style={{color: AppColors.txtclr}}>Exchange</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
