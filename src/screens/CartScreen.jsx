import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {StateContext} from '../context/state';

const CartScreen = () => {
  const {cart} = useContext(StateContext);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView contentContainerClassName="p-6">
        <View className="mt-6">
          <Text className="text-xl font-bold mb-4 text-black">Cart</Text>
          {cart.length === 0 ? (
            <Text className="text-base text-gray-600">Your cart is empty.</Text>
          ) : (
            cart.map((cartItem, index) => (
              <View
                key={index}
                className="flex-col justify-between py-2 border-b border-gray-300">
                <Image
                  source={cartItem.image}
                  className="w-[120px] h-[120px]"
                />
                <Text className="text-base text-gray-500">
                  {cartItem.foodName} x {cartItem.quantity}
                </Text>
                <Text className="text-base  text-gray-600">
                  KSh {cartItem.price * cartItem.quantity}
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
            ))
          )}

          {cart.length > 0 && (
            <>
              <Text className="text-xl font-bold mt-4 text-gray-500">
                Total Amount: KSh {totalAmount}
              </Text>
              <TouchableOpacity className="bg-red-500 p-4 rounded-full mt-4">
                <Text className="text-white text-center text-lg">Checkout</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;
