import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogoutScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Handle the logout process
    console.log('User logged out');
    // Navigate to the login screen
    navigation.navigate('Login');
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6">
      <Text className="text-xl font-bold mb-4 text-black">You have been logged out</Text>
      <Text className="text-base text-gray-600 mb-4">Thank you for using our app.</Text>
      <TouchableOpacity
        onPress={handleLogout}
        className="bg-red-500 p-4 rounded-full mt-4">
        <Text className="text-white text-center text-lg">Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutScreen;
