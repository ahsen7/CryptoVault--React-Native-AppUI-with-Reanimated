import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { ArrowLeftIcon, ChevronDownIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { AppColors } from '../Theme/Colors';
import { Picker } from '@react-native-picker/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const avatar = require("../../assets/images/avatar_.png");
const btc = require("../../assets/images/btc.png");
const stklines = require("../../assets/images/stock.png");
const eth = require("../../assets/images/eth.png");
const lite = require("../../assets/images/lite.png");
const doge = require("../../assets/images/doge.png");
const dollar = require("../../assets/images/dollar.png");

const Exchange = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 p-4" style={{ backgroundColor: AppColors.bg }}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView className="flex-1">
        <TouchableOpacity className="mt-2" onPress={() => navigation.goBack()}>
          <ArrowLeftIcon color={AppColors.btnclr} size={30} />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold text-center">Exchange</Text>
      </SafeAreaView>

      {/* Card View */}
      <View className="p-4 rounded-xl mb-4 flex-row justify-between items-center bg-gray-700">
        <View className="flex-row items-center">
          <Image source={btc} className="h-8 w-8 mr-2" />
          <Text className="text-white text-lg ml-2">Bitcoin</Text>
        </View>

        {/* Right section with BTC and ChevronDownIcon */}
        <View style={styles.rightSection}>
          <Text className="text-sm mr-2" style={{ color: AppColors.txtclr }}>BTC</Text>
          <ChevronDownIcon size={25} color={AppColors.btnclr} />
        </View>
      </View>

      <View className="p-4 rounded-xl mb-4 flex-row justify-between items-center bg-gray-700">
        <View className="flex-row items-center">
          <Image source={dollar} className="h-8 w-8 mr-2" />
          <Text className="text-white text-lg ml-2">432082.30</Text>
        </View>

        {/* Right section with USD and ChevronDownIcon */}
        <View style={styles.rightSection}>
          <Text className="text-sm mr-2" style={{ color: AppColors.txtclr }}>USD</Text>
          <ChevronDownIcon size={25} color={AppColors.btnclr} />
        </View>
      </View>

      <View className="p-4 rounded-xl mb-4 flex-row justify-between items-center bg-gray-700">
        <View className="flex-row items-center">
          <Image source={btc} className="h-8 w-8 mr-2" />
          <Text className="text-white text-lg ml-2">10.00</Text>
        </View>

        {/* Right section with BTC */}
        <View style={styles.rightSection}>
          <Text className="text-sm mr-2" style={{ color: AppColors.txtclr }}>BTC</Text>
        </View>
      </View>

      <TouchableOpacity className="p-4 rounded-md items-center mb-8" style={{ backgroundColor: AppColors.btnclr }}>
        <Text className="text-center font-bold text-base" style={{ color: AppColors.txtclr }}>Buy BTC</Text>
      </TouchableOpacity>

      <View className="flex-row justify-between mb-4">
        <View className="flex-row items-center">
          <Text className="text-white text-base ml-2">BTC</Text>
          <ChevronDownIcon size={25} color={AppColors.btnclr} className="ml-2" />
        </View>
        <View className="flex-row items-center">
          <Text className="text-gray-500">Day</Text>
          <Text className="text-white text-sm font-semibold mx-4">Week</Text>
          <Text className="text-gray-500">Month</Text>
        </View>
      </View>

      <View className="bg-gray-700 p-4 rounded-xl mb-4">
        {/* Circle with BTC initials centered */}
        <View className="flex-row justify-center mb-4">
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: '#C7FF3E',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text className="text-[#0B0E16] font-semibold">BTC</Text>
          </View>
        </View>

        <View className="flex-row justify-between">
          <View>
            <Text className="text-gray-500 text-base">Total Balance</Text>
            <Text className="text-white text-lg font-semibold">$432082.30</Text>
          </View>
          <View>
            <Text className="text-gray-500 text-sm">Name</Text>
            <Text className="text-white text-lg font-semibold">Mike</Text>
          </View>
        </View>
        <View className="flex-row justify-between items-end">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'].map((day, index)=>(
            <View className="items-center" key={index}>
              <View className="w-2 rounded-sm mb-2"
              style={{height:[48,96,32,64,128,80,64][index], backgroundColor: AppColors.btnclr}}
              />
              <Text className="text-gray-500 text-sm">{day}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Exchange;

const styles = StyleSheet.create({
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
