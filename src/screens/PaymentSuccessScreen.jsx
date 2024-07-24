import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const PaymentSuccessScreen = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <Text className="text-xl font-bold mb-4 text-black">Payment Successful!</Text>
      <Text className="text-base text-gray-600 mb-4">Thank you for your purchase.</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        className="bg-red-500 p-4 rounded-full mt-4">
        <Text className="text-white text-center text-lg">Back to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentSuccessScreen;
