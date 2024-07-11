import { Image, Text, View } from "react-native";

const CategoryItem = ({ image, name }) => (
  <View className="mt-6">
  <Text className="text-xl font-bold">Cart</Text>
  {cart.map((cartItem, index) => (
    <View
      key={index}
      className="flex-row justify-between py-2 border-b border-gray-300">
      <Text className="text-base">
        {cartItem.name} x {cartItem.quantity}
      </Text>
      <Text className="text-base text-gray-600">
        KSh {cartItem.price * cartItem.quantity}
      </Text>
    </View>
  ))}
  <Text className="text-xl font-bold mt-4">
    Total Amount: KSh {totalAmount}
  </Text>
  <TouchableOpacity className="bg-red-500 p-4 rounded-full mt-4">
    <Text className="text-white text-center text-lg">Checkout</Text>
  </TouchableOpacity>
</View>

  
);

export default CategoryItem