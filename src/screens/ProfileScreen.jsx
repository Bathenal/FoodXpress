import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import {app} from '../firebase';
import {StateContext} from '../context/state';

const ProfileScreen = ({route, navigation}) => {
  const {currentUserId} = useContext(StateContext);
  const [userData, setUserData] = useState(null);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchUserData = async () => {
      const userDoc = await getDoc(doc(db, 'users', currentUserId));
      if (userDoc.exists()) {
        setUserData(userDoc.data());
      }
    };
    fetchUserData();
  }, [currentUserId]);

  if (!userData) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-green-400">Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6 bg-red-500">
        <View className="items-center mb-6">
          <Image
            // source={require('../images/profile.png')}
            className="w-24 h-24 rounded-full"
            resizeMode="contain"
          />
          <Text className="text-2xl font-bold text-black mt-4">
            {userData.firstName} {userData.lastName}
          </Text>
          <Text className="text-lg text-black">{userData.email}</Text>
        </View>
      </View>

      <View className="p-6">
        <Text className="text-xl font-bold text-black mb-4">
          Profile Details
        </Text>
        <View className="mb-4">
          <Text className="text-lg font-bold text-black">First Name</Text>
          <Text className="text-gray-700">{userData.firstName}</Text>
        </View>
        <View className="mb-4">
          <Text className="text-lg font-bold text-black">Last Name</Text>
          <Text className="text-gray-700">{userData.lastName}</Text>
        </View>
        <View className="mb-4">
          <Text className="text-lg font-bold text-black">Email</Text>
          <Text className="text-gray-700">{userData.email}</Text>
        </View>

        <TouchableOpacity
          className="bg-red-500 p-3 rounded-full mb-4"
          onPress={() => navigation.navigate('Home')}>
          <Text className="text-white text-center text-lg">
            Go Back to Home
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

