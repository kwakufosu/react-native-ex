import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from "./views/login"
import Home from "./views/Home"
import cart from "./views/cart"


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer  >
    
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="login">
    <Stack.Screen name="cart" component={cart}/>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="login" component={login}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
