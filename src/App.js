import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from './SignInScreen';
import CustomerScreen from './CustomerScreen';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerTitleAlign: 'left',}}>
        <Stack.Screen 
        name="SignInScreen"
        options={{ title: "Sign in"}}
        component={SignInScreen} 
        />
        <Stack.Screen 
        name="CustomerScreen"
        options={{ title: 'My Policy', headerLeft: null,}}
        component={CustomerScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

