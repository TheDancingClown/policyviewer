import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

const SignInScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Text>Email:</Text>
        <TextInput
        testID='email'
        placeholder='email'/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3
  }
});

export default SignInScreen;
