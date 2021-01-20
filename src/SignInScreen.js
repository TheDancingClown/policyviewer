import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (username, password) => {
    const sessionData = await _getSessionData(username, password)
    const policy = await _getPolicyData(sessionData.access_token)
    await navigation.navigate('CustomerScreen', policy)
  }
   
  const _getSessionData = async (username, password) => {
    try {
      let response = await fetch('https://api.bybits.co.uk/auth/token', {
        method: 'POST',
        headers: {
          "environment": "mock",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "username": username,
          "password": password,
          "type": "USER_PASSWORD_AUTH"
        })
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  }

  const _getPolicyData = async (token) => {
    try {
      let response = await fetch('https://api.bybits.co.uk/policys/details', {
        method: 'GET',
        headers: {
          "environment": "mock",
          "Authorisation": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>User Name:</Text>
        <TextInput
        placeholder='username'
        onChangeText={(username) => setUsername(username)}
        testID='username'/>
        <Text>Password:</Text>
        <TextInput
        placeholder='password'
        onChangeText={(password) => setPassword(password)}
        testID='password'/>
        <TouchableOpacity
        testID='signInBtn'
        onPress={() => signIn(username, password)
        }>
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
