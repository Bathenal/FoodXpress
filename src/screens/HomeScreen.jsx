import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../firebase';
import {data} from '../data';
import {StateContext} from '../context/state';

const HomeScreen = ({navigation}) => {
  const {currentUserId} = useContext(StateContext);
  const [loggedInUser, setLoggedInUser] = useState('');
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, 'users', currentUserId);
        const userDoc = await getDoc(docRef);

        if (userDoc.exists()) {
          setUserData(userDoc.data());
          setLoggedInUser(userDoc.data());
        } else {
          console.log('No User!');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (currentUserId) {
      fetchUserData();
    }
  }, [currentUserId]);

  if (!userData) {
    return (
      <View className="flex-1 bg-red-500 justify-center items-center">
        <Text className="text-white text-lg">Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-red-500">
      <View className="p-6">
        <View className="flex-row justify-between items-center mb-6">
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('UserProfile', {userId: currentUserId})
              }>
              <Text className="text-xl text-black font-bold">
                {userData.firstName} {userData.lastName}
              </Text>
            </TouchableOpacity>
            <Text className="text-gray-500">Let's grab your food!</Text>
          </View>
        </View>

        <View className="flex-row items-center bg-gray-300 rounded-full p-3 mb-6">
          <TextInput placeholder="Search for food" className="ml-2 flex-1" />
        </View>

        <Text className="text-xl font-bold text-black mb-4">
          Food Categories
        </Text>
        <ScrollView>
          <View className="flex-row">
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('Category', {
                    foods: item.foods,
                    name: item.categoryName,
                  })
                }>
                <View className="flex-row justify-between mb-6">
                  <View>
                    <Image source={item.categoryImage} className="w-16 h-16" />
                    <Text className="mt-2 text-gray-700">
                      {item.categoryName}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <Text className="text-xl font-bold text-black mb-4">Food For You</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="bg-white rounded-lg p-4 mb-4">
            <Image
              source={require('../images/githeri.jpg')}
              className="w-64 h-32 rounded-lg"
            />
            <Text className="mt-2 text-lg text-black font-bold">
              Githeri Curry
            </Text>
            <View className="flex-row justify-between items-left mt-1">
              <Text className="ml-1 text-gray-500">20 mins</Text>
              <Text className="ml-1 text-gray-500">5.7</Text>
            </View>
            <Text className="mt-2 text-lg font-bold text-black">KSh 300</Text>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
