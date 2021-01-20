import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (username, password) => {
    // const sessionData = await getSessionData(username, password)
    const sessionData = {
      "username":"Ana.Hodkiewicz",
      "session":"yJraWQiOiJweUs2RHhFak05SXhnU3",
      "type":"USER_PASSWORD_AUTH",
      "code":"116567",
      "access_token":"MuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0zX3JkdldSMGs",
      "refresh_token":"MuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0zX3JkdldSMGs"
    }
    await navigation.navigate('CustomerScreen', {
      access_token: sessionData.access_token
    })
  }

  const getSessionData = async (username, password) => {
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
