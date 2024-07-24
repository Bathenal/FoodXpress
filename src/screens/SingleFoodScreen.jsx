import React, {useContext, useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {StateContext} from '../context/state';

const SingleFoodScreen = ({route, navigation}) => {
  const {singlefood} = route.params;
  const [quantity, setQuantity] = useState(1);
  const {cart, setCart} = useContext(StateContext);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const addToCart = item => {
    // const foodQuantity={...food, quantity}
    const existingItem = cart.find(
      cartItem => cartItem.foodName === item.foodName,
      
    );
    if (existingItem) {
      setCart(
        // [...cart,foodQuantity];
        cart.map(cartItem =>
          cartItem.foodName === item.foodName
            ? {...cartItem, quantity: cartItem.quantity += quantity}
            : cartItem,
        ),
      );
    } else {
      setCart([...cart, {...item, quantity}]);
    }
    navigation.navigate('Cart');
  };

  return (
    <ScrollView className="bg-white">
      <View className="p-4">
        <Image
          source={singlefood.image}
          className="w-full h-48 rounded-t-lg"
          resizeMode="contain"
        />
        <View className="p-4">
          <Text className="text-2xl font-bold text-black">
            {singlefood.foodName}
          </Text>
          <View className="flex-row justify-between">
            <Text className="text-red-500 text-xl">
              KSh {singlefood.price * quantity}
            </Text>
            <View className="flex-row items-center mt-4">
              <TouchableOpacity
                onPress={decrementQuantity}
                className="bg-red-500 p-2 rounded-full">
                <Text className="text-white text-xl">-</Text>
              </TouchableOpacity>
              <Text className="mx-4 text-xl text-black">{quantity}</Text>
              <TouchableOpacity
                onPress={incrementQuantity}
                className="bg-red-500 p-2 rounded-full">
                <Text className="text-white text-xl">+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity
          className="bg-red-500 p-2 rounded-full"
          onPress={() => addToCart(singlefood)}>
          <Text className="text-white text-center">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SingleFoodScreen;
