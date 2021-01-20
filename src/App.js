import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './SignInScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SignInScreen testID='login'/>
    </View>
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
