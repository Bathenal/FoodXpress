import AppIntroSlider from 'react-native-app-intro-slider';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AllFoodScreen from './src/screens/AllFoodScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import SingleFoodScreen from './src/screens/SingleFoodScreen';
import CartScreen from './src/screens/CartScreen';
import HomeScreen from './src/screens/HomeScreen';
import {slide} from './src/Slide';
import SignUpScreen from './src/screens/SignUpScreen';
import {Text, View, Image} from 'react-native';
import LogInScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import State from './src/context/state';
import CheckoutScreen from './src/screens/CheckoutScreen';
import PaymentSuccessScreen from './src/screens/PaymentSuccessScreen';
import LogoutScreen from './src/screens/LogoutScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const buttonLabel = label => <Text>{label}</Text>;

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LogInScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="Singlefood" component={SingleFoodScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Allfood" component={AllFoodScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="UserProfile" component={ProfileScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
      <Stack.Screen name="Logout" component={LogoutScreen} />

    </Stack.Navigator>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="hometab"
        component={StackNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="menutab"
        component={AllFoodScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({color, size}) => (
            <Icon name="bars" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="carttab"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="profiletab"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="user-o" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  const [showStack, setShowStack] = useState(false);

  if (!showStack) {
    return (
      <AppIntroSlider
        data={slide}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
            <Image source={item.image} />
            <Text>{item.text}</Text>
          </View>
        )}
        renderNextButton={() => buttonLabel('Next')}
        renderSkipButton={() => buttonLabel('Skip')}
        renderDoneButton={() => buttonLabel('Done')}
        showSkipButton
        onSkip={() => setShowStack(true)}
        onDone={() => setShowStack(true)}
      />
    );
  }

  return (
    <State>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </State>
  );
}

export default App;
