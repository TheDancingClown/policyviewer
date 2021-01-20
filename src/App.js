import React from 'react';
import { StyleSheet } from 'react-native';
import SignInScreen from './SignInScreen';
import CustomerScreen from './CustomerScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerTitleAlign: 'left',}}>
        <Stack.Screen 
        name="Sign In" 
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
