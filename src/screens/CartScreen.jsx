// import React, { useContext, useState } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
// import { StateContext } from '../context/state';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const CartScreen = () => {
//   const { cart, setCart } = useContext(StateContext);

//   const incrementQuantity = id => {
//     setCart(prevCart =>
//       prevCart.map(item =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decrementQuantity = id => {
//     setCart(prevCart =>
//       prevCart.map(item =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   const totalAmount = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const removeCartItem = id => {
//     setCart(prevCart => prevCart.filter(item => item.id !== id));
//   };

//   return (
//     <View className="flex-1 bg-gray-100">
//       <ScrollView contentContainerClassName="p-6">
//         <View className="mt-6">
//           <Text className="text-xl font-bold mb-4 text-black">Cart</Text>
//           {cart.length === 0 ? (
//             <Text className="text-base text-gray-600">Your cart is empty.</Text>
//           ) : (
//             cart.map((cartItem, index) => (
//               <View
//                 key={index}
//                 className="flex-col justify-between py-2 border-b border-gray-300">
//                 <View className="flex-row items-center justify-between">
//                   <Image
//                     source={cartItem.image}
//                     className="w-[120px] h-[120px]"
//                   />
//                   <View className="flex-1 ml-4">
//                     <Text className="text-base text-gray-500">
//                       {cartItem.foodName} x {cartItem.quantity}
//                     </Text>
//                     <Text className="text-base text-gray-600">
//                       KSh {cartItem.price * cartItem.quantity}
//                     </Text>
//                   </View>
//                   <TouchableOpacity onPress={() => removeCartItem(cartItem.id)}>
//                     <Icon name="trash" size={24} color="red" />
//                   </TouchableOpacity>
//                 </View>
//                 <View className="flex-row items-center mt-4">
//                   <TouchableOpacity
//                     onPress={() => decrementQuantity(cartItem.id)}
//                     className="bg-red-500 p-2 rounded-full">
//                     <Text className="text-white text-xl">-</Text>
//                   </TouchableOpacity>
//                   <Text className="mx-4 text-xl text-black">
//                     {cartItem.quantity}
//                   </Text>
//                   <TouchableOpacity
//                     onPress={() => incrementQuantity(cartItem.id)}
//                     className="bg-red-500 p-2 rounded-full">
//                     <Text className="text-white text-xl">+</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             ))
//           )}

//           {cart.length > 0 && (
//             <>
//               <Text className="text-xl font-bold mt-4 text-gray-500">
//                 Total Amount: KSh {totalAmount}
//               </Text>
//               <TouchableOpacity className="bg-red-500 p-4 rounded-full mt-4">
//                 <Text className="text-white text-center text-lg">Checkout</Text>
//               </TouchableOpacity>
//             </>
//           )}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default CartScreen;
import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StateContext } from '../context/state';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

const CartScreen = () => {
  const { cart, setCart } = useContext(StateContext);
  const navigation = useNavigation();

  const incrementQuantity = id => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = id => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const removeCartItem = id => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

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
                <View className="flex-row items-center justify-between">
                  <Image
                    source={cartItem.image}
                    className="w-[120px] h-[120px]"
                  />
                  <View className="flex-1 ml-4">
                    <Text className="text-base text-gray-500">
                      {cartItem.foodName} x {cartItem.quantity}
                    </Text>
                    <Text className="text-base text-gray-600">
                      KSh {cartItem.price * cartItem.quantity}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => removeCartItem(cartItem.id)}>
                    <Icon name="trash" size={24} color="red" />
                  </TouchableOpacity>
                </View>
                <View className="flex-row items-center mt-4">
                  <TouchableOpacity
                    onPress={() => decrementQuantity(cartItem.id)}
                    className="bg-red-500 p-2 rounded-full">
                    <Text className="text-white text-xl">-</Text>
                  </TouchableOpacity>
                  <Text className="mx-4 text-xl text-black">
                    {cartItem.quantity}
                  </Text>
                  <TouchableOpacity
                    onPress={() => incrementQuantity(cartItem.id)}
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
              <TouchableOpacity
                onPress={() => navigation.navigate('Checkout')}
                className="bg-red-500 p-4 rounded-full mt-4">
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
