import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { StateContext } from '../context/state';

const CheckoutScreen = ({ navigation }) => {
  const { cart } = useContext(StateContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [creditCardExpiry, setCreditCardExpiry] = useState('');
  const [creditCardCVC, setCreditCardCVC] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [mobileMoneyNumber, setMobileMoneyNumber] = useState('');

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (name && address && phone && selectedPaymentMethod) {
      if (
        (selectedPaymentMethod === 'Credit Card' && creditCardNumber && creditCardExpiry && creditCardCVC) ||
        (selectedPaymentMethod === 'PayPal' && paypalEmail) ||
        (selectedPaymentMethod === 'Mobile Money' && mobileMoneyNumber)
      ) {
        // Proceed with payment logic
        console.log('Proceeding with payment...', selectedPaymentMethod);
        // Navigate to payment confirmation or success screen
        navigation.navigate('PaymentSuccess');
      } else {
        alert('Please fill out all the fields for the selected payment method');
      }
    } else {
      alert('Please fill out all the fields and select a payment method');
    }
  };

  return (
    <View className="flex-1 bg-gray-100 p-6">
      <ScrollView contentContainerClassName="flex-grow">
        <Text className="text-xl font-bold mb-4 text-black">Checkout</Text>
        <View className="mb-4">
          <Text className="text-base text-gray-500">Total Amount: KSh {totalAmount}</Text>
        </View>
        <View className="mb-4">
          <Text className="text-base text-gray-600 mb-2">Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            className="border border-gray-300 rounded-md p-2 text-black"
          />
        </View>
        <View className="mb-4">
          <Text className="text-base text-gray-600 mb-2">Address</Text>
          <TextInput
            value={address}
            onChangeText={setAddress}
            className="border border-gray-300 rounded-md p-2 text-black"
          />
        </View>
        <View className="mb-4">
          <Text className="text-base text-gray-600 mb-2">Phone</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            className="border border-gray-300 rounded-md p-2 text-black"
          />
        </View>
        <View className="mb-4">
          <Text className="text-base text-gray-600 mb-2">Payment Method</Text>
          <TouchableOpacity
            onPress={() => setSelectedPaymentMethod('Credit Card')}
            className={`p-4 rounded-md mb-2 ${selectedPaymentMethod === 'Credit Card' ? 'bg-red-500' : 'bg-white'}`}>
            <Text className={`text-lg ${selectedPaymentMethod === 'Credit Card' ? 'text-white' : 'text-black'}`}>Credit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedPaymentMethod('PayPal')}
            className={`p-4 rounded-md mb-2 ${selectedPaymentMethod === 'PayPal' ? 'bg-red-500' : 'bg-white'}`}>
            <Text className={`text-lg ${selectedPaymentMethod === 'PayPal' ? 'text-white' : 'text-black'}`}>PayPal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedPaymentMethod('Mobile Money')}
            className={`p-4 rounded-md mb-2 ${selectedPaymentMethod === 'Mobile Money' ? 'bg-red-500' : 'bg-white'}`}>
            <Text className={`text-lg ${selectedPaymentMethod === 'Mobile Money' ? 'text-white' : 'text-black'}`}>Mobile Money</Text>
          </TouchableOpacity>
        </View>

        {selectedPaymentMethod === 'Credit Card' && (
          <View className="mb-4">
            <Text className="text-base text-gray-600 mb-2">Credit Card Number</Text>
            <TextInput
              value={creditCardNumber}
              onChangeText={setCreditCardNumber}
              keyboardType="numeric"
              className="border border-gray-300 rounded-md p-2 text-black"
            />
            <Text className="text-base text-gray-600 mb-2">Expiry Date</Text>
            <TextInput
              value={creditCardExpiry}
              onChangeText={setCreditCardExpiry}
              placeholder="MM/YY"
              keyboardType="numeric"
              className="border border-gray-300 rounded-md p-2 text-black"
            />
            <Text className="text-base text-gray-600 mb-2">CVC</Text>
            <TextInput
              value={creditCardCVC}
              onChangeText={setCreditCardCVC}
              keyboardType="numeric"
              className="border border-gray-300 rounded-md p-2 text-black"
            />
          </View>
        )}

        {selectedPaymentMethod === 'PayPal' && (
          <View className="mb-4">
            <Text className="text-base text-gray-600 mb-2">PayPal Email</Text>
            <TextInput
              value={paypalEmail}
              onChangeText={setPaypalEmail}
              keyboardType="email-address"
              className="border border-gray-300 rounded-md p-2 text-black"
            />
          </View>
        )}

        {selectedPaymentMethod === 'Mobile Money' && (
          <View className="mb-4">
            <Text className="text-base text-gray-600 mb-2">Mobile Money Number</Text>
            <TextInput
              value={mobileMoneyNumber}
              onChangeText={setMobileMoneyNumber}
              keyboardType="phone-pad"
              className="border border-gray-300 rounded-md p-2 text-black"
            />
          </View>
        )}

        <TouchableOpacity
          onPress={handleCheckout}
          className="bg-red-500 p-4 rounded-full mt-4">
          <Text className="text-white text-center text-lg">Proceed to Payment</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CheckoutScreen;
