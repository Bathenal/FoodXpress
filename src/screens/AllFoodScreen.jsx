import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { data } from '../data';

const AllFoodScreen = ({ navigation }) => {
  const foodItems = data.reduce((acc, curr) => acc.concat(curr.foods), []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Singlefood', { singlefood: item })
      }
      accessibilityLabel={`View details for ${item.foodName}`}>
      <View className="flex-row justify-between py-2 border-b border-gray-300">
        <View>
          <Image
            source={item.image}
            className="w-[120px] h-[120px]"
            resizeMode="contain"
          />
          <Text className="text-base text-gray-500">{item.foodName}</Text>
          <Text className="text-base text-gray-600">KSh {item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-bold mb-5">Home Browse Cart Profile</Text>
      <Text className="text-2xl font-bold mb-4">All Food Items</Text>
      <FlatList
        data={foodItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default AllFoodScreen;

