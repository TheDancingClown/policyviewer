import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


const SignInScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>User Name:</Text>
        <TextInput
        placeholder='username'
        testID='username'/>
        <Text>Password:</Text>
        <TextInput
        placeholder='password'
        testID='password'/>
        <TouchableOpacity
        testID='signInBtn'
        onPress={() => navigation.navigate('CustomerScreen')}>
          <Text>Sign in</Text>
        </TouchableOpacity>
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
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3
  }
});

export default SignInScreen;
