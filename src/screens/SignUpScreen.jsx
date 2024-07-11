import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { app, db } from '../firebase';

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const auth = getAuth(app);

  const validate = () => {
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (validate()) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);

        if (user) {
          await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            firstName: firstName,
            lastName: lastName,
            email: email,
          });
          navigation.navigate('Login');
        }
        Alert.alert('Success', 'Account created successfully!');
      } catch (error) {
        Alert.alert('Error', error.message);
      }
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
          placeholder="First Name"
          className={`border p-3 mb-4 rounded-full bg-gray-100 text-gray-500 ${errors.firstName ? 'border-red-500' : ''}`}
          value={firstName}
          onChangeText={setFirstName}
        />
        {errors.firstName && <Text className="text-red-500">{errors.firstName}</Text>}
        <TextInput
          placeholder="Last Name"
          className={`border p-3 mb-4 rounded-full bg-gray-100 text-gray-500 ${errors.lastName ? 'border-red-500' : ''}`}
          value={lastName}
          onChangeText={setLastName}
        />
        {errors.lastName && <Text className="text-red-500">{errors.lastName}</Text>}
        <TextInput
          placeholder="Email Address"
          className={`border p-3 mb-4 rounded-full bg-gray-100 text-gray-500 ${errors.email ? 'border-red-500' : ''}`}
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

      {/* Create Account button */}
      <TouchableOpacity className="bg-red-500 p-3 rounded-full mb-4" onPress={handleSignUp}>
        <Text className="text-white text-center text-lg">Create Account</Text>
      </TouchableOpacity>

      {/* OR separator */}
      <View className="flex-row items-center my-4">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="px-3 text-gray-500">OR</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      {/* Sign Up with Google button */}
      <TouchableOpacity className="border p-3 rounded-full flex-row items-center justify-center bg-gray-100" onPress={() => navigation.navigate('Login')}>
        <Image
          source={require('../images/google.png')}
          className="w-5 h-5 mr-2"
          resizeMode="contain"
        />
        <Text className="text-lg text-black">Sign Up With Google</Text>
      </TouchableOpacity>

      {/* Log In link */}
      <View className="mt-6 flex-row justify-center">
        <Text className="text-gray-500">Already Have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="text-blue-500 ml-1">Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
