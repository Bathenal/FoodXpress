import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

const CategoryScreen = ({route, navigation}) => {
  const {foods, name} = route.params;

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="p-6">
        <Text className="text-2xl font-bold text-black mb-4">{name}</Text>
        <View className="flex-row flex-wrap justify-between">
          {foods.map((food, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('Singlefood', {
                  foods: item.foods,
                  name: item.categoryName,
                })
              }>
              <View
                key={index}
                className="w-48 mb-6 bg-white rounded-lg p-4 items-center">
                <Image source={food.image} className="w-24 h-24 rounded-full" />
                <Text className="text-lg font-bold mt-4">{food.foodName}</Text>
                <Text className="text-sm text-gray-500 mt-2">
                  {food.description}
                </Text>
                <Text className="text-lg font-bold mt-4">
                  Ksh. {food.price}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default CategoryScreen;
