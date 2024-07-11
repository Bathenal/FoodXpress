import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { app } from '../firebase';
import { StateContext } from '../context/state';


const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const auth = getAuth(app);
  const db = getFirestore(app);
  const { setCurrentUserId } = useContext(StateContext);

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogIn = () => {
    if (validate()) {
      signInWithEmailAndPassword(auth, email, password)
        .then(async userCredential => {
          const user = userCredential.user;
          console.log(user);

          if (user) {
            setCurrentUserId(user.uid);
            Alert.alert('Success', 'Logged in successfully!');
            navigation.navigate('Home');
          }
        })
        .catch(error => Alert.alert('Error', error.message));
    }
  };

  return (
    <View className="flex-1 justify-center px-8 bg-white">
      {/* Logo */}
      <View className="items-center mb-6">
        <Image
          source={require('../images/logo.png')}
          className="w-24 h-24"
          resizeMode="contain"
        />
      </View>

      {/* Input fields */}
      <View className="mb-4">
        <TextInput
          placeholder="Email Address"
          className={`border p-3 mb-4 rounded-full text-gray-500 bg-gray-100 ${errors.email ? 'border-red-500' : ''}`}
          value={email}
          onChangeText={setEmail}
        />
        {errors.email && <Text className="text-red-500">{errors.email}</Text>}
        <TextInput
          placeholder="Password"
          secureTextEntry
          className={`border p-3 mb-4 rounded-full bg-gray-100 text-gray-500 ${errors.password ? 'border-red-500' : ''}`}
          value={password}
          onChangeText={setPassword}
        />
        {errors.password && <Text className="text-red-500">{errors.password}</Text>}
      </View>

      {/* Forgot Password */}
      <TouchableOpacity className="mb-4">
        <Text className="text-right text-gray-900">Forgot Password?</Text>
      </TouchableOpacity>

      {/* Log In button */}
      <TouchableOpacity className="bg-red-500 p-3 rounded-full mb-4" onPress={handleLogIn}>
        <Text className="text-white text-center text-lg">Log In</Text>
      </TouchableOpacity>

      {/* OR separator */}
      <View className="flex-row items-center my-4">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="px-3 text-gray-500">OR</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      {/* Continue with Google button */}
      <TouchableOpacity className="border p-3 rounded-full flex-row items-center justify-center bg-gray-100">
        <Image
          source={require('../images/google.png')}
          className="w-5 h-5 mr-2"
          resizeMode="contain"
        />
        <Text className="text-lg text-black">Continue With Google</Text>
      </TouchableOpacity>

      {/* Sign Up link */}
      <View className="mt-6 flex-row justify-center">
        <Text className="text-gray-500">Don't Have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text className="text-red-500 ml-1">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogInScreen;
