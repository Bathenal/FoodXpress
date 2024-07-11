import { Image, Text, View } from "react-native";
import { Ionicons } from 'react-native-ionicons';


const FoodItem = ({ image, name, time, rating, price }) => (
      <View className='bg-white rounded-lg p-4 mb-4'>
        <Image source={{ uri: image }} className='w-full h-32 rounded-lg' />
        <Text className='mt-2 text-lg font-bold'>{name}</Text>
        <View className='flex-row items-center mt-1'>
          <Ionicons name="time-outline" size={16} color="gray" />
          <Text className='ml-1 text-gray-500'>{time}</Text>
          <Ionicons name="star-outline" size={16} color="gray" className='ml-4' />
          <Text className='ml-1 text-gray-500'>{rating}</Text>
        </View>
        <Text className='mt-2 text-lg font-bold'>{price}</Text>
      </View>
    );

export default FoodItem

// import React, { useContext } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   ScrollView,
// } from 'react-native';
// import { data } from '../data';
// import { StateContext } from '../context/state';
// import { doc, getDoc } from "firebase/firestore";
// import {app, db} from '../firebase';

// const HomeScreen = async ({ navigation }) => {
//   const { currentUserId } = useContext(StateContext);
//   const docRef = doc(db, "users", "user.uid");
//   const user =await  getDoc(docRef);

// if (user.exists()) {
//   console.log("user data:", user.data());
// } else {
//   console.log("No User!");

// };
//   console.log(currentUserId);

//   return (
//     <View className="flex-1 bg-red-500">
//       <ScrollView contentContainerClassName="p-6">
//         <View className="flex-row justify-between items-center mb-6">
//           <View>
//             <TouchableOpacity onPress={() => navigation.navigate('UserProfile', { userId: currentUserId })}>
//               <Text className="text-xl text-black font-bold">
//                 {user.data}
//               </Text>
//             </TouchableOpacity>
//             <Text className="text-gray-500">Let's grab your food!</Text>
//           </View>
//         </View>

//         <View className="flex-row items-center bg-gray-300 rounded-full p-3 mb-6">
//           <TextInput placeholder="Search for food" className="ml-2 flex-1" />
//         </View>

//         <Text className="text-xl font-bold text-black mb-4">
//           Food Categories
//         </Text>
//         <View>
//           {data.map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               onPress={() =>
//                 navigation.navigate('Category', {
//                   foods: item.foods,
//                   name: item.categoryName,
//                 })
//               }
//             >
//               <View className="flex-row justify-around mb-6">
//                 <View>
//                   <Image
//                     source={item.categoryImage}
//                     className="w-16 h-16"
//                   />
//                   <Text className="mt-2 text-gray-700">
//                     {item.categoryName}
//                   </Text>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           ))}
//         </View>

//         <Text className="text-xl font-bold text-black mb-4">Food For You</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <View className="bg-white rounded-lg p-4 mb-4">
//             <Image
//               source={require('../images/githeri.jpg')}
//               className="w-64 h-32 rounded-lg"
//             />
//             <Text className="mt-2 text-lg text-black font-bold">
//               Githeri Curry
//             </Text>
//             <View className="flex-row justify-between items-left mt-1">
//               <Text className="ml-1 text-gray-500">20 mins</Text>
//               <Text className="ml-1 text-gray-500">5.7</Text>
//             </View>
//             <Text className="mt-2 text-lg font-bold text-black">KSh 300</Text>
//           </View>
//         </ScrollView>
//       </ScrollView>
//     </View>
//   );
// };

// export default HomeScreen;
